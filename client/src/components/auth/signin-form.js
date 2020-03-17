import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
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

  if (!props.signup) {
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
            required
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type='submit' color='primary' className='align-self-end'>
          Submit
        </Button>
      </Form>
    );
  } else return '';
};

export default SignInForm;
