import React from 'react';
import { DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const NewProjectButton = props => {
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(openModal('project'));
  };

  return (
    <DropdownItem className={props.active ? '' : 'disabled'} onClick={openForm}>
      New Project
    </DropdownItem>
  );
};

export default NewProjectButton;
