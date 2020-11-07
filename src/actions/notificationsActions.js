import { SUCCESS, CLEAR, ERROR } from './types';

export const showSuccessSnackbar = message => {
  return dispatch => {
    dispatch({ type: SUCCESS, message });
  };
};

export const showErrorSnackbar = message => {
  return dispatch => {
    dispatch({ type: ERROR, message });
  };
};

export const clearSnackbar = () => {
  return dispatch => {
    dispatch({ type: CLEAR });
  };
};