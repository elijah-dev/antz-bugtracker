import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import IssueColumn from './IssueColumn';

const Board = () => {
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
