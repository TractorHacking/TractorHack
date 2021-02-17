import React from 'react';
import {Image, Pressable, Text, Button} from 'react-native';
import BTConnect from './blueTooth/BTConnect.js';
import ConnectedRoot from './ConnectedRoot.js';
import LiveDiag from './LiveDiag.js';
import logo from '../assets/logo.png';

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
          <Pressable onPressIn = {() => {this.changeAppState('bluetooth')}}>
          <Image
            source = {{uri : logo}}
            style = {{width : 175, height : 117}}
          />
          <Button title = "Connect" 
                  onPress = {() => {this.changeAppState('bluetooth')}}
          />
          </Pressable>
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