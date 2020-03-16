import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../actions/auth-actions';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  return (
    <Form className='d-flex flex-column' onSubmit={submit}>
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
          onChange={e => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type='submit' color='primary' className='align-self-end'>
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
