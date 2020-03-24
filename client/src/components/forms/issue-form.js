import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { submitIssue } from '../../actions/issue-actions';

const IssueForm = props => {
  const [issueType, setIssueType] = useState('Functional');
  const [summary, setSummary] = useState('');
  const [priority, setPriority] = useState('Major');
  const [severity, setSeverity] = useState('Major');
  const [description, setDescription] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');
  const [expectedResult, setExpectedResult] = useState('');
  const [actualResult, setActualResult] = useState('');
  const [environment, setEnvironment] = useState('');
  const [affectVersion, setAffectVersion] = useState('');
  const dispatch = useDispatch();
  const formType = useSelector(state => state.modal.type);
  const project = useSelector(state => state.currentProject.data._id);

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, video/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map(file => (
    <div className='thumb' key={file.name}>
      <div className='thumb-inner'>
        {file.type.match(/image.+/) ? (
          <img src={file.preview} className='prev' />
        ) : (
          <video src={file.preview} className='prev' />
        )}
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const submit = e => {
    e.preventDefault();
    console.log(files);
    let formData = new FormData();
    formData.set('type', issueType);
    formData.set('summary', summary);
    formData.set('severity', severity);
    formData.set('priority', priority);
    formData.set('description', description);
    formData.set('stepsToReproduce', stepsToReproduce);
    formData.set('expectedResult', expectedResult);
    formData.set('actualResult', actualResult);
    formData.set('environment', environment);
    formData.set('affectVersion', affectVersion);
    for (const key of Object.keys(files)) {
      formData.append('file', files[key]);
    }
    dispatch(submitIssue(project, formData));
  };

  if (formType === 'issue') {
    return (
      <Form className='d-flex flex-column' id={formType} onSubmit={submit}>
        {/* summary */}
        <FormGroup>
          <Label for='summary'>Summary:</Label>
          <Input
            type='text'
            name='summary'
            id='summary'
            //   required
            onChange={e => setSummary(e.target.value)}
          />
        </FormGroup>

        {/* type, severity, priority */}
        <FormGroup
          inline
          className='d-flex justify-content-between align-items-center'
        >
          <div>
            <Label for='issue-type' className='mr-2'>
              Issue type
            </Label>
            <UncontrolledButtonDropdown>
              <DropdownToggle
                id='issue-type'
                style={{ width: '8rem' }}
                caret
                color='primary'
                size='sm'
                outline
              >
                {issueType}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={e => setIssueType(e.target.innerHTML)}>
                  Functional
                </DropdownItem>
                <DropdownItem onClick={e => setIssueType(e.target.innerHTML)}>
                  UI
                </DropdownItem>
                <DropdownItem onClick={e => setIssueType(e.target.innerHTML)}>
                  Improvement
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div>
            <Label for='severity' className='mr-2'>
              Severity
            </Label>
            <UncontrolledButtonDropdown>
              <DropdownToggle
                id='severity'
                style={{ width: '8rem' }}
                caret
                color='primary'
                size='sm'
                outline
              >
                {severity}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={e => setSeverity(e.target.innerHTML)}>
                  Critical
                </DropdownItem>
                <DropdownItem onClick={e => setSeverity(e.target.innerHTML)}>
                  Major
                </DropdownItem>
                <DropdownItem onClick={e => setSeverity(e.target.innerHTML)}>
                  Minor
                </DropdownItem>
                <DropdownItem onClick={e => setSeverity(e.target.innerHTML)}>
                  Trivial
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div>
            <Label for='priority' className='mr-2'>
              Priority
            </Label>
            <UncontrolledButtonDropdown>
              <DropdownToggle
                id='priority'
                style={{ width: '8rem' }}
                caret
                color='primary'
                size='sm'
                outline
              >
                {priority}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={e => setPriority(e.target.innerHTML)}>
                  Critical
                </DropdownItem>
                <DropdownItem onClick={e => setPriority(e.target.innerHTML)}>
                  Major
                </DropdownItem>
                <DropdownItem onClick={e => setPriority(e.target.innerHTML)}>
                  Minor
                </DropdownItem>
                <DropdownItem onClick={e => setPriority(e.target.innerHTML)}>
                  Trivial
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </FormGroup>

        <FormGroup>
          <Label for='description'>Description:</Label>
          <Input
            type='textarea'
            name='description'
            id='description'
            required
            onChange={e => setDescription(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for='stepsToReproduce'>Steps to reproduce:</Label>
          <Input
            type='textarea'
            name='stepsToReproduce'
            id='stepsToReproduce'
            required
            onChange={e => setStepsToReproduce(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for='expectedResult'>Expected Result:</Label>
          <Input
            type='text'
            name='expectedResult'
            id='expectedResult'
            required
            onChange={e => setExpectedResult(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for='actualResult'>Actual Result:</Label>
          <Input
            type='text'
            name='actualResult'
            id='actualResult'
            required
            onChange={e => setActualResult(e.target.value)}
          />
        </FormGroup>

        <FormGroup row>
          <Col>
            <Label for='environment'>Environment:</Label>
          </Col>

          <Col>
            <Input
              type='text'
              name='environment'
              id='environment'
              required
              onChange={e => setEnvironment(e.target.value)}
            />
          </Col>

          <Col>
            <Label for='affectVersion'>Affects version:</Label>
          </Col>

          <Col>
            <Input
              type='text'
              name='affectVersion'
              id='affectVersion'
              required
              onChange={e => setAffectVersion(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Label for='attachments'>Attachments:</Label>
          <div className='drop-container' id='attachments'>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} className='drop-input' alt='' />
              {files.length < 1 ? (
                <div className='attachment-icon-container'>
                  <img src='landscape.svg' className='attachment-icon' alt='' />
                </div>
              ) : (
                ''
              )}
              <div className='thumb-container'>{thumbs}</div>
            </div>
          </div>
        </FormGroup>
      </Form>
    );
  } else return '';
};

export default IssueForm;
