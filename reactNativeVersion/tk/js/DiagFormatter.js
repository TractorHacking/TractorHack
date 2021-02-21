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
  
  singleGroup(sGroup) {
    return (
    <View style = {styles.catGroupView} key = {sGroup.title + sGroup.value}>
      <Text style = {styles.catGroup}>
        {sGroup.title + "   " + sGroup.value}
      </Text>
    </View>
    )
  }
  
  makeGroup (cat) {
    let group = [];
    
    cat.group.forEach((gp) => {group.push(this.singleGroup(gp))});
    
    return (      
      group      
    )
  }
  
  catMaker = (cat) => {
    return (
      <View key = {cat.catTitle}>
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