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
      className='m-1 border border-white bg-primary'
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
      }>
      <span>Submit Issue</span>
    </Button>
  );
};

export default IssueButton;
