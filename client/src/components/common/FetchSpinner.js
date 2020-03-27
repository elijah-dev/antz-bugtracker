import React from 'react';
import { Spinner } from 'reactstrap';

const FetchSpinner = props => {
  return (
    <div className='d-flex justify-content-center align-items-center loading'>
      <Spinner color='info' />
    </div>
  );
};

export default FetchSpinner;
