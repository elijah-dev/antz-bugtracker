import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal-actions';

const IssueButton = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    state => state.currentProject.permissions.canSubmitIssues
  );

  return (
    <Button
      className='border border-white bg-primary m-1'
      disabled={!isActive}
      onClick={() =>
        dispatch(
          openModal({
            type: 'issue',
            closeBtnText: 'Cancel',
            okBtnType: 'submit',
            okBtnText: 'Submit issue'
          })
        )
      }
    >
      New Issue
    </Button>
  );
};

export default IssueButton;
