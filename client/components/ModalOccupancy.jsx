import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

var Occupancy = (props) => {
  return (
    <div className="occupancy-list">
      <Modal show={props.isOpen}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        size="lg">
      <Modal.Header>
        <Modal.Title>Occupancy:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Dorm</th>
              <th>Room:</th>
              <th>First:</th>
              <th>Last:</th>
              <th>Cell:</th>
              <th>Emerg. Contact:</th>
              <th>Emerg. Phone:</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((row) => {
              return (
              <tr key={Math.random()}>
                <td>{row.dorm}</td>
                <td>{row.roomNo}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.phoneCell}</td>
                <td>{row.emergencyName}</td>
                <td>{row.emergencyPhone}</td>
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

export default Occupancy;