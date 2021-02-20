import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from './Styles.js';

class DiagFormatter extends React.Component {
  constructor(props) {
    super(props);
  }
  
  makeCatTitle (cat) {
    return (
      <Text style = {styles.catTitle}> {cat.catTitle} </Text>
    )
  }
  
  makeGroup (cat) {
    return (
      <Text style = {styles.catGroup}> Group goes here...</Text>
    )
  }
  
  catMaker = (cat) => {
    return (
      <View>
        {this.makeCatTitle(cat)}
        {this.makeGroup(cat)}
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