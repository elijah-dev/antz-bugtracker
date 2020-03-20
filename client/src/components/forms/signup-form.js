import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/auth-actions';

const SignUpForm = props => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [role, setRole] = useState(0);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [files, setFile] = useState(0);
  const dispatch = useDispatch();
  const type = useSelector(state => state.modal.type);

  const submit = e => {
    e.preventDefault();

    let formData = new FormData();
    formData.set('firstName', firstName);
    formData.set('secondName', secondName);
    formData.set('role', role);
    formData.set('login', login);
    formData.set('password', password);
    for (const key of Object.keys(files)) {
      formData.append('file', files[key]);
    }
    dispatch(signUp(formData));
  };

  if (type === 'signup') {
    return (
      <Form className='d-flex flex-column' id={type} onSubmit={submit}>
        <div className='d-flex justify-content-between'>
          <FormGroup>
            <Label for='first-name'>First name:</Label>
            <Input
              type='text'
              name='first-name'
              id='first-name'
              //   required
              onChange={e => setFirstName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for='second-name'>Second name:</Label>
            <Input
              type='text'
              name='second-name'
              id='second-name'
              //   required
              onChange={e => setSecondName(e.target.value)}
            />
          </FormGroup>
        </div>

        <FormGroup>
          <Label for='role'>Role:</Label>
          <Input
            type='text'
            name='role'
            id='role'
            // required
            onChange={e => setRole(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for='login'>Login:</Label>
          <Input
            type='text'
            name='login'
            id='login'
            // required
            onChange={e => setLogin(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for='password'>Password:</Label>
          <Input
            type='password'
            name='password'
            id='password'
            // required
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup inline>
          <Label for='file-avatar'>Avatar:</Label>
          <Input
            type='file'
            name='file'
            id='file-avatar'
            multiple
            onChange={e => setFile(e.target.files)}
          />
        </FormGroup>
      </Form>
    );
  } else return '';
};

export default SignUpForm;
