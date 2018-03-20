export const PASSWORD_RESET_EMAIL_REQUEST = 'PASSWORD_RESET_EMAIL_REQUEST';
export const PASSWORD_RESET_EMAIL_REQUEST_SUCCESS =
  'PASSWORD_RESET_EMAIL_REQUEST_SUCCESS';
export const PASSWORD_RESET_EMAIL_REQUEST_FAILURE =
  'PASSWORD_RESET_EMAIL_REQUEST_FAILURE';

export const passwordResetEmailRequest = email => ({
  type: PASSWORD_RESET_EMAIL_REQUEST,
  email,
});
export const passwordResetEmailRequestSuccess = response => ({
  type: PASSWORD_RESET_EMAIL_REQUEST_SUCCESS,
  response,
});
export const passwordResetEmailRequestFailure = error => ({
  type: PASSWORD_RESET_EMAIL_REQUEST_FAILURE,
  error,
});

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_REQUEST_SUCCESS = 'PASSWORD_RESET_REQUEST_SUCCESS';
export const PASSWORD_RESET_REQUEST_FAILURE = 'PASSWORD_RESET_REQUEST_FAILURE';

export const passwordResetRequest = (password, confirmedPassword) => ({
  type: PASSWORD_RESET_REQUEST,
  password,
  confirmedPassword,
});
export const passwordResetRequestSuccess = response => ({
  type: PASSWORD_RESET_REQUEST_SUCCESS,
  response,
});
export const passwordResetRequestFailure = error => ({
  type: PASSWORD_RESET_REQUEST_FAILURE,
  error,
});
