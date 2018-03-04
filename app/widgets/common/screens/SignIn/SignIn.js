import React from 'react';

import FormScreen from '../../components/FormScreen/Loadable';

const FIELDS = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    value: '',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    value: '',
  },
];

function Signin() {
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

export default Signin;
