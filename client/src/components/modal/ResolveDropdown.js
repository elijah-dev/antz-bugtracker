import React, { useState } from 'react';
import {
  Form,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateIssue } from '../../actions/issue-actions';

const ResolveDropdown = props => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.currentProject.data._id);
  const user = useSelector(state => state.currentUser.data);
  const [resolution, setResolution] = useState();
  const [resText, setResText] = useState();

  const submit = e => {
    e.preventDefault();
    const data = {
      resolution: resolution,
      status: 'resolved'
    };
    dispatch(updateIssue(props.issue._id, project, data));
  };

  if (
    props.issue.status === 'in progress' &&
    props.issue.assignedTo._id === user._id
  ) {
    return (
      <tr>
        <th scope='row'>Resolution</th>
        <th>
          <Form onSubmit={submit} className='d-flex '>
            <UncontrolledDropdown>
              <DropdownToggle size='sm' color='info' outline caret>
                {resText ? resText : 'resolve issue'}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    setResolution('fixed');
                    setResText('Fixed');
                  }}
                >
                  Fixed
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setResolution(`cannot reproduce`);
                    setResText(`Can't reproduce`);
                  }}
                >
                  Can't reproduce
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setResolution('incomplete');
                    setResText('Incomplete');
                  }}
                >
                  Incomplete
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setResolution('duplicate');
                    setResText('Duplicate');
                  }}
                >
                  Duplicate
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setResolution('wont fix');
                    setResText(`Won't fix`);
                  }}
                >
                  Won't fix
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setResolution('fad');
                    setResText('FAD');
                  }}
                >
                  FAD
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {resText ? (
              <Button type='submit' size='sm' color='info' className='ml-2'>
                Resolve
              </Button>
            ) : (
              ''
            )}
          </Form>
        </th>
      </tr>
    );
  }
  return '';
};

export default ResolveDropdown;
