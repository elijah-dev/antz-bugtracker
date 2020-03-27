import React from 'react';
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import Attachment from './Attachment';
import AssignElement from './AssignElement';
import Avatar from '../common/Avatar';

const IssueTable = () => {
  const type = useSelector(state => state.modal.type);
  const issues = useSelector(state => state.issues.data);
  const id = useSelector(state => state.modal.issueId);

  if (type === 'issue-browser') {
    const issue = issues.filter(issue => issue._id === id)[0];
    const steps = parse(issue.stepsToReproduce);

    const date = new Date(issue.createdAt);

    return (
      <Table>
        <thead>
          <tr>
            <th colSpan='2'>
              <h4 className='text-left'>
                [{issue.key}] {issue.summary}
              </h4>
              <div className='font-sm text-secondary font-weight-normal'>
                {new Intl.DateTimeFormat('de-DE', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: 'numeric',
                  minute: 'numeric'
                }).format(date)}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan='2'>
              <div className='d-flex justify-content-between font-weight-normal'>
                <span>
                  <span className='text-secondary'>Issue type:</span>{' '}
                  <span>{issue.issueType}</span>
                </span>
                <span>
                  <span className='text-secondary'>Severity:</span>{' '}
                  <span>{issue.severity}</span>
                </span>
                <span>
                  <span className='text-secondary'>Priority:</span>{' '}
                  <span>{issue.priority}</span>
                </span>
              </div>
            </td>
          </tr>

          <tr>
            <th scope='row'>Description</th>
            <td>{issue.description}</td>
          </tr>

          <tr>
            <th scope='row'>Steps to reproduce</th>
            <td>{steps}</td>
          </tr>

          <tr>
            <th scope='row'>Expected result</th>
            <td>{issue.expectedResult}</td>
          </tr>

          <tr>
            <th scope='row'>Actual result</th>
            <td>{issue.actualResult}</td>
          </tr>

          <tr>
            <th scope='row'>Affects version</th>
            <td>{issue.affectVersion}</td>
          </tr>

          <tr>
            <th scope='row'>Environment</th>
            <td>{issue.environment}</td>
          </tr>

          <tr>
            <th scope='row'>Submitted by</th>
            <td>
              <Avatar publicId={issue.submittedBy.avatar} size={30} />
              <span className='ml-2'>
                {issue.submittedBy.role} {issue.submittedBy.firstName}{' '}
                {issue.submittedBy.secondName}
              </span>
            </td>
          </tr>

          <tr>
            <th scope='row'>Assigned to</th>
            <AssignElement issue={issue} />
          </tr>

          <tr>
            <td colSpan='2'>
              <div className='d-flex align-items-center'>
                {issue.attachments.map(attachment => {
                  return (
                    <Attachment
                      key={attachment._id}
                      mimeType={attachment.mimeType}
                      publicId={attachment.publicId}
                    />
                  );
                })}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
  return '';
};

export default IssueTable;
