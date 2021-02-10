import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import EmptyRooms from './EmptyRooms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyRooms: [],
      occupantList: [],
      currentDorm: '',
      currentRoom: '',
    };
  };

  // getEmptyRooms
  getEmptyRooms() {
    axios.get('/roomies/empties')
      .then((list) => {
        this.setState({emptyRooms: list.data})})
      .then(() => {
        EmptyRooms(this.state.emptyRooms);
      })
      .catch((error) => console.log(error))
    };

  render () {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <h1>hey Roomies!</h1>
          </div>
        </nav>
        <div className="d-flex">
          <Button
            variant="primary"
            size="lg"
            onClick={() => this.getEmptyRooms()}>Get Empty Rooms</Button>{' '}
        </div>
        <div>
        </div>
      </div>
    )
  };
};

export default App;