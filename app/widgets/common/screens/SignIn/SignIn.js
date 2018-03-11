import React from 'react';
import { Divider } from 'semantic-ui-react';

import FormScreen from '../../components/FormScreen/Loadable';
import { emailValidator, passwordValidator } from '../../validators';
import './SignIn.less';

const FIELDS = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
    value: '',
    validation: emailValidator,

  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
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
    <div>
      <FormScreen
        {...{
          abstractForm,
        }}
      />
      <Divider className="divider" horizontal>or connect with</Divider>
    </div>
  );
}

export default SignIn;
