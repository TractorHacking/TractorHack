import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './Styles.js';
import back from '../../assets/back.png';
import well from '../../assets/box.png';

class TitleCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style = {styles.titleCardView}>
        
          <TouchableOpacity onPressIn = {this.props.backButtonAction} >
            <Image 
              source = {{uri : back}}
              style = {styles.backImg}
            />
          </TouchableOpacity>
          {this.props.content()}
        
      </View>
    );
  }
}
export default TitleCard;