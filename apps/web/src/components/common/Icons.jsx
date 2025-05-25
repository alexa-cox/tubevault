import React from 'react';
import { ROLES, TAB_INDEXES } from '../../utils/a11y';
import { useClickHandler } from '../../hooks/useClickHandler';
import { useKeyboardHandler } from '../../hooks/useKeyboardHandler';

/**
 * Base component for all icons with common props and accessibility features
 *
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Width and height of the icon in pixels
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler for interactive icons
 * @param {string} [props.title] - Accessible title for the icon (for screen readers)
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive (clickable)
 * @returns {Object} - Props object for SVG element
 */
const IconBase = ({
  size = 24,
  color = 'currentColor',
  className = '',
  onClick,
  title,
  isInteractive = false,
  ...props
}) => {
  const handleClick = useClickHandler(onClick);
  const handleKeyDown = useKeyboardHandler(handleClick);

  const baseProps = {
    className: `icon ${className}`,
    width: size,
    height: size,
    fill: color,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    'aria-hidden': title ? 'false' : 'true',
    ...(title && { 'aria-labelledby': `title-${title.replace(/\s+/g, '-')}` }),
    ...(isInteractive && {
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      role: ROLES.BUTTON,
      tabIndex: TAB_INDEXES.FOCUSABLE,
    }),
    ...props,
  };

  return baseProps;
};

/**
 * Image/Image Fallback Icon - Used for image placeholders or fallbacks when images fail to load
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Image icon SVG
 */
export const ImageIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' />
  </svg>
);

/**
 * Settings Gear Icon - Used for settings or configuration options
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Settings icon SVG
 */
export const SettingsIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' />
  </svg>
);

/**
 * User Avatar Icon - Used for user profiles or account sections
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - User icon SVG
 */
export const UserIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
  </svg>
);

/**
 * Lock/Login Icon - Used for authentication or secure areas
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Lock icon SVG
 */
export const LockIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z' />
  </svg>
);

/**
 * Heart Filled (Favorite) Icon - Used for favorites, likes, or saved items
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Filled heart icon SVG
 */
export const HeartFilledIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
  </svg>
);

/**
 * Heart Empty Icon - Used for unfavorited or unliked items
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Empty heart icon SVG
 */
export const HeartEmptyIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' />
  </svg>
);

/**
 * Gallery Icon - Used for gallery or image collection pages
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Gallery icon SVG
 */
export const GalleryIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z' />
  </svg>
);

/**
 * GitHub Icon - Used for linking to GitHub repositories
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - GitHub icon SVG
 */
export const GitHubIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.21-1.6-1.21-1.6-.99-.67.07-.66.07-.66 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.42-.27-4.96-1.2-4.96-5.36 0-1.18.42-2.15 1.12-2.91-.11-.27-.49-1.38.11-2.87 0 0 .92-.29 3 1.12a10.38 10.38 0 015.5 0c2.08-1.41 3-1.12 3-1.12.6 1.49.22 2.6.11 2.87.7.76 1.12 1.73 1.12 2.91 0 4.17-2.54 5.08-4.96 5.35.39.34.73 1 .73 2.01v2.98c0 .29.19.63.74.53A11 11 0 0012 1.27' />
  </svg>
);

/**
 * Medium Icon - Used for linking to Medium blog posts
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Medium icon SVG
 */
export const MediumIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M4.37 7.46h.79c.27 0 .44.2.44.47v8.19c0 .27-.17.47-.44.47h-.79v1.88h5.32v-1.88h-1.12V8h.07l4.09 10.46h2.06L18.93 8h.07v8.13h-1.12v1.88H24v-1.88h-.79c-.27 0-.44-.2-.44-.47V7.93c0-.27.17-.47.44-.47H24V5.58h-5.19l-3.2 8.11h-.07l-3.2-8.11H7.13v1.88z' />
  </svg>
);

/**
 * Website Icon - Used for linking to personal portfolio or website
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Website/globe icon SVG
 */
export const WebsiteIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z' />
  </svg>
);

/**
 * Video Library Icon - Used for personal video collections
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Video Library icon SVG
 */
export const VideoLibraryIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z' />
  </svg>
);

/**
 * Do Not Disturb Icon - Used for blocking distractions
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Do not disturb icon SVG
 */
export const DoNotDisturbIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z' />
  </svg>
);

/**
 * Label/Tag Icon - Used for categorization
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Label icon SVG
 */
export const LabelIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z' />
  </svg>
);

/**
 * Devices Icon - Used for multi-device access
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Devices icon SVG
 */
export const DevicesIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z' />
  </svg>
);

/**
 * Video Collection Icon - Used for personal video libraries
 *
 * @param {Object} props - Icon component props
 * @param {number} [props.size=24] - Width and height of the icon
 * @param {string} [props.color='currentColor'] - Color of the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.title] - Accessible title
 * @param {boolean} [props.isInteractive=false] - Whether the icon is interactive
 * @returns {JSX.Element} - Video collection icon SVG
 */
export const VideoCollectionIcon = (props) => (
  <svg {...IconBase(props)}>
    {props.title && (
      <title id={`title-${props.title.replace(/\s+/g, '-')}`}>
        {props.title}
      </title>
    )}
    <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z' />
  </svg>
);

/**
 * Collection of all icon components for easy import
 */
export default {
  ImageIcon,
  SettingsIcon,
  UserIcon,
  LockIcon,
  HeartFilledIcon,
  HeartEmptyIcon,
  GalleryIcon,
  GitHubIcon,
  MediumIcon,
  WebsiteIcon,
  VideoLibraryIcon,
  DoNotDisturbIcon,
  LabelIcon,
  DevicesIcon,
  VideoCollectionIcon,
};
