import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

var ModalAssign = (props) => {
  console.log(props)
  return(
    <div className="modal-assign">
      <Modal show={props.isOpenModalAssign}
        onHide={props.closeModalAssign}
        backdrop="static"
        keyboard={false}
        size="lg">
      <Modal.Header>
        <Modal.Title>Assigning:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>User Id:</th>
              <th>First:</th>
              <th>Last:</th>
              <th>Room Type:</th>
              <th>Rooming with:</th>
              <th>Approx Age:</th>
              <th>Restroom Pref:</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((row) => {
              return (
              <tr key={Math.random()}>
                <td>{row.userId}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.roomType}</td>
                <td>{row.roommateUserId}</td>
                <td>{row.approxAge}</td>
                <td>{row.rrPref}</td>
              </tr>
            )})}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModalAssign}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalAssign;