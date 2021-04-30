import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';

function ConfirmAssignment(props) {
  console.log("props from ConfirmAssignment?", props);
  var show = props.show;
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <ModalHeader>
        <h4>Success!</h4>
      </ModalHeader>
      <Modal.Body>
        <p>
          You have assigned {props.personFirst} {props.personLast} to Katharine Blunt dorm, room {props.dorm} {props.room}.
        </p>
      </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => props.closeme()}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}

export default ConfirmAssignment;