import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class EmptyRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { closeModal: false };
  };

    handleClose() {
      this.setState({
        closeModal: false
      });
    }

    handleShow() {
      this.setState({
        closeModal: true
      });
    }

    render() {
      return (
        <div className="empty-list">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )

    }
};

export default EmptyRooms;
