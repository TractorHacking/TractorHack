import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './Styles.js';


class ConnectedRoot extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View>
        <View style = {styles.padded}>
          <Button title = "Disconnect"
                  onPress = {() => {this.props.changeAppState('splash')}}
          />
        </View>
        <View style = {styles.padded}>
          <Button title = "Live Diag Data"
                  onPress = {() => {this.props.changeAppState('live')}}
          />
        </View>
      </View>
    );
  }
}

export default ConnectedRoot;