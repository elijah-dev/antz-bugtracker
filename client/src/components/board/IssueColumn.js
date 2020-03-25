import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col,
  Badge,
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardFooter,
  Button,
  UncontrolledTooltip
} from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Avatar from '../common/Avatar';
import { openModal } from '../../actions/modal-actions';

const IssueColumn = props => {
  const issues = useSelector(state => state.issues.data);
  const dispatch = useDispatch();

  const issueCards = issues.map(issue => {
    if (props.assigned === true && !issue.assignedTo) {
      return '';
    }

    if (issue.status === props.status) {
      const date = new Date(issue.createdAt);

      return (
        <CSSTransition key={issue._id} timeout={500} classNames='fade'>
          <Card outline color='dark' className='mb-2'>
            <CardHeader className='d-flex justify-content-between'>
              <UncontrolledTooltip target='sev-badge' placement='bottom'>
                Severity
              </UncontrolledTooltip>
              <Badge
                id='sev-badge'
                color={
                  issue.severity === 'Critical' || issue.severity === 'Major'
                    ? 'danger'
                    : 'warning'
                }
                pill
              >
                {issue.severity}
              </Badge>

              <UncontrolledTooltip target='prio-badge' placement='bottom'>
                Priority
              </UncontrolledTooltip>
              <Badge
                id='prio-badge'
                color={
                  issue.priority === 'Critical' || issue.priority === 'Major'
                    ? 'danger'
                    : 'warning'
                }
                pill
              >
                {issue.priority}
              </Badge>

              <Badge color='primary' pill>
                {issue.type}
              </Badge>
            </CardHeader>

            <CardBody>
              <CardText>{issue.summary}</CardText>
            </CardBody>

            <CardFooter className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <Avatar avatar={issue.submittedBy.avatar} size='30' />
                <span className='font-sm ml-2'>
                  {new Intl.DateTimeFormat('ru-RU', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  }).format(date)}
                </span>
              </div>
              <Button
                color='info'
                size='sm'
                onClick={() =>
                  dispatch(openModal(`issue---${issue._id}`, '', 'Close'))
                }
              >
                Open
              </Button>
            </CardFooter>
          </Card>
        </CSSTransition>
      );
    }
  });

  return (
    <Col className='issue-col'>
      <TransitionGroup className='issue-list'>{issueCards}</TransitionGroup>
    </Col>
  );
};

export default IssueColumn;
