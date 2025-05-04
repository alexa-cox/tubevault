import { useEffect, useState } from 'react';

/**
 * Custom hook that observes sections in the viewport and returns the currently active section.
 *
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - How much of the element needs to be visible (0-1)
 * @param {string} options.rootMargin - Margin around the root (viewport)
 * @param {number} options.offsetPx - Additional offset in pixels for header height
 * @returns {string|null} The ID of the currently active section or null if none
 */
export function useSectionObserver(
  sectionIds = [],
  { threshold = 0.5, rootMargin = '0px', offsetPx = 80 } = {}
) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Skip if no section IDs provided or running in a non-browser environment
    if (!sectionIds.length || typeof window === 'undefined') {
      return;
    }

    // Create observer callback function
    const observerCallback = (entries) => {
      // Get all elements being observed
      const allObservedElements = Array.from(
        observer.takeRecords().map((record) => record.target.id)
      );

      // Filter for entries that are intersecting
      const visibleSections = entries.filter((entry) => entry.isIntersecting);

      // If no sections are visible, set activeSection to null
      if (!visibleSections.length) {
        setActiveSection(null);
        return;
      }

      // If multiple sections are visible, choose the one with the largest intersection ratio
      if (visibleSections.length > 1) {
        const mostVisible = visibleSections.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio
            ? prev
            : current;
        });
        setActiveSection(mostVisible.target.id);
      } else {
        // If only one section is visible, use that one
        setActiveSection(visibleSections[0].target.id);
      }
    };

    // Create the observer with options
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin: `${-offsetPx}px 0px 0px 0px`, // Adjust for header height
    });

    // Start observing each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function to disconnect observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold, rootMargin, offsetPx]);

  return activeSection;
}
