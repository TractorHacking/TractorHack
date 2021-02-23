import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from './Styles.js';
import Accordion from './Accordion.js';

class DiagFormatter extends React.Component {
  constructor(props) {
    super(props);
  }
  
  catMaker = (cat) => {
    return (
      <View key = {cat.catTitle}>
        <Accordion cat = {cat}/>
      </View>
    );
  }
  
  render() {
    return (
      <View>
        {this.props.data.map((cat)=> this.catMaker(cat))}
      </View>
    );
  }
}
export default DiagFormatter;