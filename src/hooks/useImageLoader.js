import { useEffect, useState } from 'react';

/**
 * Hook for handling image loading states and errors
 *
 * @param {string} src - The image source URL to load
 * @param {Object} [options] - Additional options
 * @returns {Object} Object containing loading states
 */
export function useImageLoader(src, options = {}) {
  const [status, setStatus] = useState('loading');
  const { onLoad, onError } = options;

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setStatus('loaded');
      if (onLoad) onLoad();
    };

    img.onerror = () => {
      setStatus('error');
      if (onError) onError();
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return {
    isLoading: status === 'loading',
    isLoaded: status === 'loaded',
    hasError: status === 'error',
  };
}
