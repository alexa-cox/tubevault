import { useState, useCallback } from 'react';

const useImageErrorHandler = (fallbackSrc = '/images/fallback-logo.svg') => {
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageError = useCallback(() => {
    setHasError(true);
    setImageSrc(fallbackSrc);
  }, [fallbackSrc]);

  const resetImage = useCallback((originalSrc) => {
    setHasError(false);
    setImageSrc(originalSrc);
  }, []);

  return {
    hasError,
    imageSrc,
    handleImageError,
    resetImage,
  };
};

export default useImageErrorHandler;
