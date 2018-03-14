import yup from 'yup';

export const emailValidator = yup.string()
  .email('A valid email is required.')
  .required('A valid email is required.');

export const passwordValidator = yup.string()
  .min(6, 'Password must be at least 6 characters.')
  .max(128, 'Password cannot exceed 128 characters.')
  .required('Password is required.');

export const passwordAgainValidator = yup.mixed().test(
  'match',
  'Passwords must match',
  ({ password, confirmationPassword }) => password === confirmationPassword
);

export const phoneValidator = yup.string()
  .matches(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    'A valid phone number is required.'
  )
  .required('A valid phone number is required.');
