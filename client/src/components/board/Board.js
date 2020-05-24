import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import IssueColumn from './IssueColumn';
import { useSelector } from 'react-redux';
import AuthContainer from './AuthContainer';
import ProjectPicker from './ProjectPicker';

const Board = () => {
  const isAuthorized = useSelector(state => state.currentUser.isAuthorized);
  const project = useSelector(state => state.currentProject.data);

  if (isAuthorized) {
    if (project.name) {
      return (
        <Container className='board container-lg'>
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
            <IssueColumn status='assigned' />
            <IssueColumn status='in progress' />
            <IssueColumn status='resolved' />
          </Row>
        </Container>
      );
    }
    return <ProjectPicker />;
  }
  return <AuthContainer />;
};

export default Board;
