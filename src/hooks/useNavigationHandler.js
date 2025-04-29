import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { KEYBOARD_KEYS } from '../utils';

export const useNavigationHandler = (callback, path = '/') => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (callback) {
      callback();
    } else {
      navigate(path);
    }
  }, [callback, navigate, path]);

  const handleKeyPress = useCallback(
    (event) => {
      if (
        event.key === KEYBOARD_KEYS.ENTER ||
        event.key === KEYBOARD_KEYS.SPACE
      ) {
        handleClick();
      }
    },
    [handleClick]
  );

  return { handleClick, handleKeyPress };
};
