import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProject } from '../../actions/project-actions';

const NewProjectForm = props => {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const type = useSelector(state => state.modal.type);

  const submit = e => {
    e.preventDefault();
    dispatch(createNewProject({ name, key, description }));
  };

  if (type === 'project') {
    return (
      <Form className='d-flex flex-column' id={type} onSubmit={submit}>
        <FormGroup>
          <Label for='name'>Project Name:</Label>
          <Input
            type='text'
            name='name'
            id='name'
            required
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='key'>Unique project key:</Label>
          <Input
            type='text'
            name='key'
            id='key'
            required
            onChange={e => setKey(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='description'>Description:</Label>
          <Input
            type='text'
            name='description'
            id='description'
            required
            onChange={e => setDescription(e.target.value)}
          />
        </FormGroup>
      </Form>
    );
  } else return '';
};

export default NewProjectForm;
