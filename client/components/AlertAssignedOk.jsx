import React from 'react';
import Alert from 'react-bootstrap/Alert';

var AlertAssignedOk = (props) => {
  return (
    <Alert key={idx} variant={success} onClose={() => props.dismissAlert()} dismissible>
    This is a {variant} alert—check it out!
    </Alert>
  )
}