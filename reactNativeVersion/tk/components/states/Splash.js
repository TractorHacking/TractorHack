import React from 'react';
import {Image, View, Pressable, TouchableOpacity, Text} from 'react-native';
import styles from '../ui/Styles.js';
import logo from '../../assets/logo.png';
import HistoryCard from '../ui/HistoryCard.js';
import ConnectionStatusCard from '../ui/ConnectionStatusCard.js';
//import RadialGradient from 'react-native-web';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.centerView}>
        <TouchableOpacity 
          onPressIn={() => {this.props.changeAppState('home')}}
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