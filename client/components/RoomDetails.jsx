import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

var RoomDetails = (props) => {
  return ( props.room === null ? (<div></div>) : (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.room[0].dorm} {props.room[0].roomNo}</Card.Title>
          <Card.Text>
            Size: {props.room[0].single}
          </Card.Text>
          <Button variant="danger" onClick={props.showModalAssign}>Assign this room?</Button>
        </Card.Body>
      </Card>
    </div>
  ))
}

export default RoomDetails;
