import React from 'react';
import {Button, Text} from 'react-native';

class LiveDiag extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Text>
      <Button title = "Disconnect"
              onPress = {() => {this.props.changeAppState('splash')}}
      />
      <Text> Live Diag Data Here...</Text>
      </Text>
    );
  }
}

export default LiveDiag;