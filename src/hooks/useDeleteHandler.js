import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteVideo } from '../redux/slices';
import { KEYBOARD_KEYS } from '../utils';

export const useDeleteHandler = (videoId) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(deleteVideo(videoId));
    },
    [dispatch, videoId]
  );

  const handleDeleteKeyPress = useCallback(
    (event) => {
      if (
        event.key === KEYBOARD_KEYS.ENTER ||
        event.key === KEYBOARD_KEYS.SPACE
      ) {
        event.stopPropagation();
        handleDelete(event);
      }
    },
    [handleDelete]
  );

  return { handleDelete, handleDeleteKeyPress };
};
