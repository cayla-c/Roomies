//// PULLING IT ALL TOGETHER:
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  /////// shape of basic info for onload:
  // showMeTheCows() {
  //   this.props.getTheHerd((err, result) => {
  //     if (err) {
  //       console.log('Oops - no cows today.  :(');
  //     } else {
  //       this.setState({
  //         cows: result
  //       });
  //     }
  //   });
  // };

  ///// shape of clickhandler:
    // handleCowNameClick(cow) {
    //   this.setState({
    //     currentCow: cow,
    //     /////// V.2: also might not work:
    //     seen: !this.state.seen
    //   });
    // };

  ///// loading the page:
    // componentDidMount() {
    //   this.showMeTheCows();
    // };

    render() {
      // console.log('things in state: ', this.state);

      return (
        <div>

        </div>
      )
    }
  }

  export default App;