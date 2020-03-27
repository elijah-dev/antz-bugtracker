import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Form, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getTeam, manageTeam } from '../../actions/team-actions';
import Avatar from '../common/Avatar';

const CandidatesList = () => {
  const type = useSelector(state => state.modal.type);
  const project = useSelector(state => state.currentProject.data._id);
  const candidates = useSelector(state => state.team.candidates);
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (project) {
      if (type === 'candidates') dispatch(getTeam(project, '?invite=true'));
    }
  }, [project, type, dispatch]);

  const submit = e => {
    e.preventDefault();
    // if (user) {
    dispatch(manageTeam(project, `?user=${user}&action=add`));
    // }
  };

  const users = candidates.map(candidate => {
    return (
      <ListGroupItem
        key={candidate._id}
        className='d-flex align-items-center justify-content-between'
      >
        {' '}
        <div>
          <Avatar publicId={candidate.avatar} size={40} />
          <span className='ml-2'>
            {candidate.firstName} {candidate.secondName}, {candidate.role}
          </span>
        </div>
        <div>
          <Input
            type='radio'
            name='candidate'
            onChange={() => {
              setUser(candidate._id);
            }}
            required
          />
        </div>
      </ListGroupItem>
    );
  });

  if (type === 'candidates') {
    return (
      <Form id={type} onSubmit={submit}>
        <ListGroup className='mb-2'>
          {users}
          {candidates.length < 1 ? <div>No users found</div> : ''}
        </ListGroup>
      </Form>
    );
  } else {
    return '';
  }
};

export default CandidatesList;
