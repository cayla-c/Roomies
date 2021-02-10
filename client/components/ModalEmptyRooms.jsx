import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

var EmptyRooms = (props) => {
  return (
    <div className="empty-list">
      <Modal show={props.isOpen}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}>
      <Modal.Header>
        <Modal.Title>Empty Rooms:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Dorm</th>
              <th>Room</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((room) => {
              return (
              <tr>
                <td>{room.dorm}</td>
                <td>{room.roomNo}</td>
                <td>{room.single}</td>
              </tr>
            )})}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default EmptyRooms;
