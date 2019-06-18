import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount = () => {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      this.setState({ smurfs: res.data });
    })
    .catch(err => {
      this.setState({error: err});
    });
  };

  handleUpdateList = smurfs => {
    this.setState({
      smurfs
    });
  };

  // Notice what your map function is looping over and returning inside of Smurfs.

  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="header">

          <NavBar />

        </div>
        
        <SmurfForm 
        updateList={this.handleUpdateList}
        />

        <Route 
         exact path="/" 
         render={(props) =>
          <Smurfs {...props}
          smurfs={this.state.smurfs} />
        } />

        {/* <Route path="/smurf-form"
        render={(props) => (
          <SmurfForm 
          {...props}
          updateList={this.handleUpdateList} />
        )}
        /> */}
        
      </div>
    );
  }
}

export default App;