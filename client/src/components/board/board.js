import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Badge } from 'reactstrap';
import { getIssues } from '../../actions/issue-actions';
import IssueColumn from './column';

const Board = () => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.currentProject.data._id);
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);

  useEffect(() => {
    if (isAuthorized) dispatch(getIssues(project, ''));
  }, [project]);

  return (
    <Container className='board'>
      <Row className='title-row'>
        <Col>
          <h4>
            <Badge color='danger'>Open</Badge>
          </h4>
        </Col>
        <Col>
          <h4>
            <Badge color='warning'>Assigned</Badge>
          </h4>
        </Col>
        <Col>
          <h4>
            <Badge color='info'>In Progress</Badge>
          </h4>
        </Col>
        <Col>
          <h4>
            <Badge color='success'>Resolved</Badge>
          </h4>
        </Col>
      </Row>
      <Row className='issue-row'>
        <IssueColumn status='open' />
        <IssueColumn status='open' assigned={true} />
        <IssueColumn status='in progress' />
        <IssueColumn status='resolved' />
      </Row>
    </Container>
  );
};

export default Board;
