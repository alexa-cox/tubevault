import React from 'react';
import PropTypes from 'prop-types';
import { useImageLoader } from '../../hooks';
import ImageFallback from './ImageFallback';

/**
 * Enhanced image component with built-in loading and error handling
 *
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for the image
 * @param {number} props.width - Width of the image
 * @param {number} props.height - Height of the image
 * @param {string} [props.className] - CSS class for the image
 * @param {string} [props.fallbackClassName] - CSS class for the fallback component
 * @param {Function} [props.onLoad] - Callback when image loads successfully
 * @param {Function} [props.onError] - Callback when image fails to load
 * @returns {JSX.Element} Image or fallback component
 */
function EnhancedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackClassName,
  onLoad,
  onError,
}) {
  const { hasError } = useImageLoader(src, { onLoad, onError });

  if (hasError) {
    return (
      <ImageFallback
        width={width}
        height={height}
        className={fallbackClassName}
        altText={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{ width, height }}
      className={className}
    />
  );
}

EnhancedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
  fallbackClassName: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default React.memo(EnhancedImage);
