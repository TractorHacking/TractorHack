import React from 'react';
import {Button, Text} from 'react-native';
import {styles} from '../App.js';


class ConnectedRoot extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Text>
        <Button title = "Disconnect"
                onPress = {() => {this.props.changeAppState('splash')}}
        />
        <Text> </Text>
        <Button title = "Live Diag Data"
                onPress = {() => {this.props.changeAppState('live')}}
        />
        <Text> </Text>
        <Button title = "History"
                onPress = {() => {this.props.changeAppState('history')}}
        />
      </Text>
    );
  }
}

export default ConnectedRoot;