import React from 'react';

import FormScreen from '../../components/FormScreen/Loadable';
import { emailValidator, passwordValidator } from '../../validators';
const FIELDS = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    value: '',
    validation: emailValidator,

  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    value: '',
    validation: passwordValidator,
  },
];

function SignIn() {
  const onSubmit = async ({ email, password }) => {
    console.log(email, password);
  };

  const abstractForm = {
    onSubmit,
    fields: FIELDS,
  };

  return (
    <FormScreen
      {...{
        abstractForm,
      }}
    />
  );
}

export default SignIn;
