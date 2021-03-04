import React from 'react';
import {Image, Pressable, Text, Button, TouchableOpacity} from 'react-native';
import BTConnect from './blueTooth/BTConnect.js';
import ConnectedRoot from './ConnectedRoot.js';
import LiveDiag from './LiveDiag.js';
import logo from '../assets/logo.png';
import styles from './Styles.js';
import RadialGradient from 'react-native-web';

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

            <TouchableOpacity onPressIn={() => {this.changeAppState('bluetooth')}}
                              style={styles.connectButton}>
              <Image style={styles.splashImg} source={{uri: logo}}/>
              <text style={{color:'white',
                font:"bold 30px arial,serif"}}> Connect</text>
            </TouchableOpacity>

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