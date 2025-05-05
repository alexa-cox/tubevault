import { ROLES, TAB_INDEXES } from '../utils/a11y';
import { useClickHandler } from './useClickHandler';
import { useKeyboardHandler } from './useKeyboardHandler';

/**
 * Hook for handling navigation with keyboard accessibility
 *
 * @param {Object} options - Navigation options
 * @param {string} [options.path] - Path to navigate to
 * @param {Function} [options.callback] - Optional callback to execute instead of navigation
 * @returns {Object} Object containing handlers and props for navigation
 * @returns {Function} returns.handleClick - Click event handler
 * @returns {Function} returns.handleKeyPress - Keyboard event handler
 * @returns {Object} returns.navigationProps - Props object to spread on interactive elements
 */
export function useNavigationHandler({ path, callback }) {
  const handleClick = useClickHandler(callback, path);
  const handleKeyPress = useKeyboardHandler(handleClick);

  return {
    handleClick,
    handleKeyPress,
    navigationProps: {
      onClick: handleClick,
      onKeyDown: handleKeyPress,
      role: ROLES.BUTTON,
      tabIndex: TAB_INDEXES.FOCUSABLE,
    },
  };
}
