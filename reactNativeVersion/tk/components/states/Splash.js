import React from 'react';
import {Image, View, Pressable} from 'react-native';
import styles from '../ui/Styles.js';
import logo from '../../assets/logo.png';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style = {styles.centerView}>
        <Pressable onPressIn = {() => {this.props.changeAppState('bluetooth')}}>
          <Image
            source = {{uri : logo}}
            style = {styles.splashImg}
          />
        </Pressable>
      </View>
    );
  }
}
export default Splash;