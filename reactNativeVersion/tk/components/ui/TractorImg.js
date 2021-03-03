import React from 'react';
import {Image, View} from 'react-native';
import styles from './Styles.js';
import tractorImg from '../../assets/bluetractor.png';

class TractorImg extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style = {styles.centerView}>
        <Image
          source = {{uri : tractorImg}}
          style = {styles.imgProp}
        />
      </View>
    );
  }
}
export default TractorImg;