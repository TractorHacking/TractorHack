import React from 'react';
import {ImageBackground, View, Button, Text} from 'react-native';
import styles from './Styles.js';
import Grad from '../../assets/grad.png';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      
        <ImageBackground source={Grad} style = {styles.gradImg} resizeMode = "stretch">
          <View style = {styles.centerView}>
            <Text style = {styles.headerBarText}> {this.props.title} </Text>
          </View>
        </ImageBackground>
      
    )
  }
}
export default HeaderBar;