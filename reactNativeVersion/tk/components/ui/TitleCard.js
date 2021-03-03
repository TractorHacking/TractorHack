import React, {Component} from 'react';
import {View, Text, Pressable, Image, ImageBackground} from 'react-native';
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
        <ImageBackground source={well} resizeMode = "stretch">
          <Pressable onPressIn = {this.props.backButtonAction()} >
            <Image 
              source = {{uri : back}}
              style = {styles.backImg}
            />
          </Pressable>
          {this.props.content()}
        </ImageBackground>
      </View>
    );
  }
}
export default TitleCard;