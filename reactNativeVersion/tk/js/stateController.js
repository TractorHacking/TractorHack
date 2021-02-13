import React from 'react';
import {Button, Text} from 'react-native';
import BTConnect from './blueTooth/BTConnect.js';
import ConnectedRoot from './ConnectedRoot.js';
import LiveDiag from './LiveDiag.js';

class StateController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState : 'splash'
    }
  }
  
  changeAppState = (newState) => {
    this.setState({appState : newState});
  }
  
  render() {
    switch (this.state.appState) {
      case 'splash' :
        return (
          <Button title = "Connect" 
                  onPress = {() => {this.changeAppState('bluetooth')}}
          />
        );
        break;
      case 'bluetooth' :
        return (
          <BTConnect changeAppState = {this.changeAppState} />
        );
        break;
      case 'connected' :
        return (
          <ConnectedRoot changeAppState = {this.changeAppState} />
        );
        break;
      case 'live' :
        return (
          <LiveDiag changeAppState = {this.changeAppState} />
        );
        break;
    };
  }
}

export default StateController;