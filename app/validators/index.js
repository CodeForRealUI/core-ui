import Yup from 'yup';

export const emailValidator = Yup.string()
  .email('A valid email is required.')
  .required('A valid email is required.');

export const passwordValidator = Yup.string()
  .min(6, 'Password must be at least 6 characters.')
  .max(128, 'Password cannot exceed 128 characters.')
  .required('Password is required.');

export const passwordAgainValidator = Yup.mixed().test(
  'match',
  'Passwords must match',
  (password, confirmedPassword) => {
    console.log(confirmedPassword);
    return password == confirmedPassword;
  }
);

export const phoneValidator = Yup.string()
  .matches(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    'A valid phone number is required.'
  )
  .required('A valid phone number is required.');
