import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from './Styles.js';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <View style = {styles.headerBar} >
        <Text style = {styles.headerBarText}> {this.props.title} </Text>
      </View>
    )
  }
}
export default HeaderBar;