import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

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
        <Col className='issue-col'>open</Col>
        <Col className='issue-col '>asigned</Col>
        <Col className='issue-col'>in progress</Col>
        <Col className='issue-col'>resolved</Col>
      </Row>
    </Container>
  );
};

export default Board;
