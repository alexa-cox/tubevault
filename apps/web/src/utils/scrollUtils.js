import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to a specific section with optional offset
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from the top of the section (default: 0)
 */

const scrollToSection = (sectionId, offset = 0) => {
  if (!sectionId || typeof sectionId !== 'string') {
    console.error(
      'scrollToSection requires a valid sectionID string',
      sectionId
    );
    return;
  }

  const target = document.getElementById(sectionId);
  if (!target) {
    console.error('Target does not exist', target);
    return;
  }

  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset;

  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, targetPosition - offset);
  }
};

/**
 * Scrolls the window to the top
 * @param {boolean} smooth - Whether to use smooth scrolling (default: false)
 */
const scrollToTop = (smooth = false) => {
  if ('scrollBehavior' in document.documentElement.style && smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, 0);
  }
};

/**
 * React component that automatically scrolls to top on route changes
 * Uses the scrollToTop utility function internally
 */
const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use the existing scrollToTop function
    scrollToTop(false);
  }, [pathname]);

  // This component doesn't render anything
  return null;
};

export { scrollToSection, scrollToTop, ScrollRestoration };
