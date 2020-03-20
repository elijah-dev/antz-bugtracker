import React from 'react';
import { DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const NewProjectButton = props => {
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(openModal('project', 'submit', 'Cancel'));
  };

  return (
    <DropdownItem
      className={`${
        props.active ? 'bg-primary text-white ' : 'disabled '
      }d-flex justify-content-between align-items-center`}
      onClick={openForm}
    >
      <span>New Project</span>
      <img src='add.svg' height='15px' width='15px' />
    </DropdownItem>
  );
};

export default NewProjectButton;
