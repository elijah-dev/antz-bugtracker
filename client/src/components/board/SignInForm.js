import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { signIn } from '../../actions/auth-actions';

const SignInForm = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    dispatch(signIn({ login, password }));
  };

  return (
    <Form className='d-flex flex-column' id='signin' onSubmit={submit}>
      <FormGroup>
        <Label for='login'>Login:</Label>
        <Input
          type='text'
          name='login'
          id='login'
          required
          onChange={e => setLogin(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='password'>Password:</Label>
        <Input
          type='password'
          name='password'
          id='password'
          required
          onChange={e => setPassword(e.target.value)}
        />
      </FormGroup>
    </Form>
  );
};

export default SignInForm;
