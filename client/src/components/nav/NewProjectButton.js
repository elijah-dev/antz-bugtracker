import React from 'react';
import { DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const NewProjectButton = props => {
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(
      openModal({
        type: 'project',
        closeBtnText: 'Cancel',
        okBtnType: 'submit',
        okBtnText: 'Create Project'
      })
    );
  };

  return (
    <DropdownItem
      className={`${
        props.active ? 'bg-primary text-white ' : 'disabled '
      }d-flex justify-content-between align-items-center`}
      onClick={openForm}
    >
      <span>New Project</span>
      <img src='add.svg' height='15px' width='15px' alt='' />
    </DropdownItem>
  );
};

export default NewProjectButton;
