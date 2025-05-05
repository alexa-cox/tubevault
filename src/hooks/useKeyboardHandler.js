import { useCallback } from 'react';
import { KEYBOARD_KEYS } from '../utils/a11y';

/**
 * Hook for handling keyboard events for accessibility
 *
 * @param {Function} actionHandler - Function to call when Enter or Space is pressed
 * @returns {Function} Keyboard event handler function
 */
export function useKeyboardHandler(actionHandler) {
  return useCallback(
    (event) => {
      if (
        event.key === KEYBOARD_KEYS.ENTER ||
        event.key === KEYBOARD_KEYS.SPACE
      ) {
        event.preventDefault();
        actionHandler(event);
      }
    },
    [actionHandler]
  );
}
