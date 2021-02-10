import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import ModalEmptyRooms from './ModalEmptyRooms.jsx';
import ModalOccupancy from './ModalOccupancy.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyRooms: [],
      isOpen: false,
      occupantList: [],
      currentDorm: '',
      currentRoom: '',
    };
  };

  // GET EMPTY ROOMS LIST
  getEmptyRooms() {
    axios.get('/roomies/empties')
      .then((list) => {
        this.setState({ emptyRooms: list.data })
      })
      .then(() => {this.setState({ isOpen: true })})
      .catch((error) => console.log(error))
    };

  // GET OCCUPANCY REPORT
  getOccReport() {
    axios.get('/roomies/occupancy')
      .then((list) => {
        this.setState({ occupantList: list.data })
      })
      .then(() => {this.setState({ isOpen: true })})
      .catch((error) => console.log(error))
    };

  closeModal = () => this.setState({ isOpen: false });
  handleRoomClick = (room) => {
    this.setState({ currentRoom: room });
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <h1 style={{color:"white"}}>hey Roomies!</h1>
          </div>
        </nav>
        <div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => this.getEmptyRooms()}>Get Empty Rooms</Button>{' '}
        </div>
        <div>
          <Button
            variant="success"
            size="lg"
            onClick={() => this.getOccReport()}>Generate Occupancy Report</Button>{' '}
        </div>
        <div className="empty-list">
          <ModalEmptyRooms
            list={this.state.emptyRooms}
            handleRoomClick={this.handleRoomClick.bind(this)}
            isOpen={this.state.isOpen}
            closeModal={this.closeModal.bind(this)}
            />
        </div>
        <div className="occupancy-list">
          <ModalOccupancy
            list={this.state.occupantList}
            isOpen={this.state.isOpen}
            closeModal={this.closeModal.bind(this)}
            />
        </div>
      </div>
    )
  }
}

export default App;