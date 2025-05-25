import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Hook for handling click events with optional callback or navigation
 *
 * @param {Function} [callback] - Optional callback function to execute on click
 * @param {string} [path] - Optional path to navigate to if no callback is provided
 * @returns {Function} Click handler function
 */
export function useClickHandler(callback, path) {
  const navigate = useNavigate();

  return useCallback(() => {
    if (callback) {
      callback();
    } else if (path) {
      navigate(path);
    }
  }, [callback, navigate, path]);
}
