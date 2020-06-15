import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import { setCurrentProject } from '../../actions/project-actions';
import FetchSpinner from '../common/FetchSpinner';
import { useEffect } from 'react';

const ProjectPicker = () => {
  const dispatch = useDispatch();

  const projects = useSelector(state => state.userProjects.data);
  const fetching = useSelector(state => state.currentProject.fetching);

  useEffect(() => {
    if (projects.length === 1) {
      dispatch(setCurrentProject(projects[0]._id));
    }
  }, [projects, dispatch]);

  const projectsList = projects.map(project => {
    return (
      <ListGroupItem
        tag='a'
        className='hover-pointer'
        key={project._id}
        onClick={() => {
          dispatch(setCurrentProject(project._id));
        }}>
        {project.name}
      </ListGroupItem>
    );
  });

  return (
    <Container>
      <Row>
        <Col sm='3'></Col>
        <Col>
          <Card color='primary' outline>
            {fetching ? <FetchSpinner /> : ''}
            <CardHeader>
              <h3>Choose project</h3>
            </CardHeader>
            <CardBody>
              <ListGroup>{projectsList}</ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col sm='3'></Col>
      </Row>
    </Container>
  );
};

export default ProjectPicker;
