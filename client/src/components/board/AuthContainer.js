import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import FetchSpinner from '../common/FetchSpinner';
import { signIn } from '../../actions/auth-actions';

const AuthContainer = () => {
  const dispatch = useDispatch();
  const [formType, setFormType] = useState('signin');
  const fetching = useSelector(state => state.currentUser.fetching);

  return (
    <Container>
      <Row>
        <Col sm='3'></Col>
        <Col>
          <Card color='primary' outline>
            {fetching ? <FetchSpinner /> : ''}
            <CardHeader>
              {formType === 'signin' ? <h3>Sign in</h3> : <h3>Sign up</h3>}
            </CardHeader>
            <CardBody>
              {formType === 'signin' ? (
                <SignInForm id={formType} />
              ) : (
                <SignUpForm id={formType} />
              )}
            </CardBody>
            <CardFooter className='d-flex justify-content-between'>
              <Button
                color='success'
                onClick={() =>
                  dispatch(signIn({ login: 'admin', password: '1234' }))
                }>
                DEMO
              </Button>
              {formType === 'signin' ? (
                <span>
                  <Button type='submit' color='primary' form={formType}>
                    Sign in
                  </Button>
                  <span className='ml-3 text-secondary'>or</span>
                  <Button color='link' onClick={() => setFormType('signup')}>
                    Sign up
                  </Button>
                </span>
              ) : null}
              {formType === 'signup' ? (
                <span>
                  <Button color='link' onClick={() => setFormType('signin')}>
                    Sign in
                  </Button>
                  <span className='mr-3 text-secondary'>or</span>
                  <Button type='submit' color='primary' form={formType}>
                    Sign up
                  </Button>
                </span>
              ) : null}
            </CardFooter>
          </Card>
        </Col>
        <Col sm='3'></Col>
      </Row>
    </Container>
  );
};

export default AuthContainer;
