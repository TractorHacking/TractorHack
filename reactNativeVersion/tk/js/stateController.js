import React from 'react';
import {Button, Text} from 'react-native';
import BTConnect from './blueTooth/BTConnect.js';

class StateController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState : 0
    }
  }
  
  changeAppState = (newState) => {
    this.setState({appState : newState});
  }
  
  render() {
    switch (this.state.appState) {
      case 0 :
        return (
          <Button title = "Connect" 
                  onPress = {() => {this.changeAppState(1)}}
          />
        );
        break;
      case 1 :
        return (
          <BTConnect changeAppState = {this.changeAppState} />
        );
        break;
    };
  }
}

export default StateController;