import React, {Component} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './Styles.js';
import back from '../../assets/back.png';

class TitleCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style = {styles.titleCardView}>
        <Pressable onPressIn = {()=>{0}} >
          <Image source = {{uri : back}}/>
        </Pressable>
        {this.props.content()}
      </View>
    );
  }
}
export default TitleCard;