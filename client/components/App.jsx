import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Navigation from './Navigation.jsx';
import ModalEmptyRooms from './ModalEmptyRooms.jsx';
import ModalOccupancy from './ModalOccupancy.jsx';
import RoomDetails from './RoomDetails.jsx';
import ModalAssign from './ModalAssign.jsx';
import ModalUnassigned from './ModalUnassigned.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyRooms: [],
      isOpenEmpty: false,
      isOpenOcc: false,
      isOpenModalAssign: false,
      isOpenModalUnassigned: false,
      occupantList: [],
      currentDorm: '',
      currentRoom: '',
      currentRoomDetails: undefined,
      assignedAlertShow: false,
      unassignedUsers: []
    };
  };

  // OPEN MODAL AND GET EMPTY ROOMS LIST
  getEmptyRooms() {
    axios.get('/roomies/empties')
      .then((list) => {
        this.setState({ emptyRooms: list.data })
      })
      .then(() => {this.setState({ isOpenEmpty: true })})
      .catch((error) => console.log(error))
    };

  // OPEN MODAL AND GET OCCUPANCY REPORT
  getOccReport() {
    axios.get('/roomies/occupancy')
      .then((list) => {
        this.setState({ occupantList: list.data })
      })
      .then(() => {this.setState({ isOpenOcc: true })})
      .catch((error) => console.log(error))
    };

  // GET ROOM DETAILS FOR ONE ROOM
  getRoomDetails(roomNum) {
    axios.get(`/roomies/${roomNum}`)
      .then((details) => {
        this.setState({ currentRoomDetails: details.data })
      })
      .catch((error) => console.log(error))
    };

  // GET UNASSIGNED USERS LIST
  getUnassignedUsers() {
    axios.get('/unassigned')
      .then((list) => {
        this.setState({ unassignedUsers: list.data })
      })
      .catch((error) => console.log(error));
  }

  // ASSIGN A ROOM
  // dismissAlert = () => this.setState({ assignedAlertShow: false })
  assign(userId, roomId) {
    axios.patch(`/roomies/${userId}/${roomId}`)
      .then((success) => {
        // <AlertAssignedOk show={this.state.assignedAlertShow} dimiss={this.dismissAlert}/>
      })
      .catch((error) => console.log(error))
    };

  // CLOSE ALL THE MODALS
  closeModalEmpty = () => this.setState({ isOpenEmpty: false });
  closeModalAssign = () => this.setState({ isOpenModalAssign: false });
  closeModalUnassigned = () => this.setState({ isOpenModalUnassigned: false });
  handleRoomClick = (room) => {
    this.setState({ isOpenEmpty: false, currentRoom: room });
    this.getRoomDetails(parseInt(room));
  }

  handleAssignClick = (userId) => {
    this.assign(userId, this.state.currentRoom);
  }

  closeModalOcc = () => this.setState({ isOpenOcc: false });

  showModalAssign = () => {
    this.setState({ isOpenModalAssign: true });
    this.getUnassignedUsers();
  }

  showModalUnassigned = () => {
    this.setState({ isOpenModalUnassigned: true });
    this.getUnassignedUsers();
  }

  render () {
    return (
      <div>
        <Navigation />
        <div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => this.getEmptyRooms()}>Get Empty Rooms</Button>{'   '}
          <Button
            variant="success"
            size="lg"
            onClick={() => this.getOccReport()}>Generate Occupancy Report</Button>{' '}
          <Button
            variant="warning"
            size="lg"
            >See Floorplan</Button>{' '}
          <Button
            variant="danger"
            size="lg"
            onClick={() => this.showModalUnassigned()}>Who's Unassigned?</Button>
        </div>
        <div className="empty-list">
          <ModalEmptyRooms
            list={this.state.emptyRooms}
            handleRoomClick={this.handleRoomClick.bind(this)}
            isOpen={this.state.isOpenEmpty}
            closeModal={this.closeModalEmpty.bind(this)}
            />
        </div>
        <div className="occupancy-list">
          <ModalOccupancy
            list={this.state.occupantList}
            isOpenOcc={this.state.isOpenOcc}
            closeModalOcc={this.closeModalOcc.bind(this)}
            />
        </div>
        <div className="room-details">
          <RoomDetails
            room={this.state.currentRoomDetails !== undefined ? this.state.currentRoomDetails : null}
            showModalAssign={this.showModalAssign.bind(this)}
            />
        </div>
        <div className="occupancy-list">
          <ModalAssign
            list={this.state.unassignedUsers}
            isOpenModalAssign={this.state.isOpenModalAssign}
            closeModalAssign={this.closeModalAssign.bind(this)}
            handleAssignClick={this.handleAssignClick.bind(this)}
            />
        </div>
        <div className="occupancy-list">
          <ModalUnassigned
            list={this.state.unassignedUsers}
            isOpenModalUnassigned={this.state.isOpenModalUnassigned}
            closeModalUnassigned={this.closeModalUnassigned.bind(this)}
            />
        </div>
      </div>
      )
    }
}

export default App;