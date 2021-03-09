import React from 'react';
import {Image, View, Pressable, TouchableOpacity, Text} from 'react-native';
import styles from '../ui/Styles.js';
import logo from '../../assets/logo.png';
//import RadialGradient from 'react-native-web';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style = {styles.centerView}>
        <TouchableOpacity onPressIn={() => {this.props.changeAppState('bluetooth')}}
                                style={styles.connectButton}>
          <Image style={styles.splashImg} source={{uri: logo}}/>
          <Text style={{color:'white',
          font:"bold 30px arial,serif"}}> Connect</Text>
        </TouchableOpacity>      
      </View>
    );
  }
}
export default Splash;