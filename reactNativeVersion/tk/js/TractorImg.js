import React from 'react';
import {Image} from 'react-native';
import styles from './Styles.js';
import tractorImg from '../assets/bluetractor.png';

class TractorImg extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Image
        source = {{uri : tractorImg}}
        style = {styles.imgProp}
      />
    );
  }
}
export default TractorImg;