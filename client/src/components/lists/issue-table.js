import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

const IssueTable = () => {
  const type = useSelector(state => state.modal.type);
  const issues = useSelector(state => state.issues.data);

  if (type.match(/issue---.+/)) {
    const id = type.split('issue---')[1];
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
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan='2'>
              <div className='d-flex justify-content-around font-weight-normal'>
                <span>Issue type: {issue.type}</span>
                <span>Severity: {issue.severity}</span>
                <span>Priority: {issue.priority}</span>
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
              {issue.submittedBy.role} {issue.submittedBy.firstName}{' '}
              {issue.submittedBy.secondName} on{' '}
              {new Intl.DateTimeFormat('de-DE', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric'
              }).format(date)}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
  return '';
};

export default IssueTable;
