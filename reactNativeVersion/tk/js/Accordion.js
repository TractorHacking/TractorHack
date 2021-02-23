import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import styles from './Styles.js';
import down from '../assets/down.png';
import up from '../assets/up.png';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.expanded != null) {
      this.state = {
        expanded : this.props.expanded
      };
    } 
    else {
      this.state = {
        expanded : false
      }
    }
  }
     
  makeCatTitle (cat) {
    if (this.state.expanded) {
      return (
        <View style = {styles.outsideCatTitle} >
          <View style = {styles.insideCatTitle}>
            <Text style = {styles.catTitle}> {cat.catTitle} </Text>
          </View>
          <Image 
            source = {{uri : up}}
            style = {styles.arrow}
          />
        </View>
      )
    } 
    else {
      return (
        <View style = {styles.outsideCatTitle} >
          <View style = {styles.insideCatTitle}>
            <Text style = {styles.catTitle}> {cat.catTitle} </Text>
          </View>
          <Image 
            source = {{uri : down}}
            style = {styles.arrow}
          />
        </View>
      )
    }
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
    
    if (this.state.expanded) {
      cat.group.forEach((gp) => {group.push(this.singleGroup(gp))});
    }
    else {
      group.push(<View key = {cat.catTitle + "empty"}></View>);
    }
    
    return group;
  }
  
  toggleExpanded() {
    if(this.state.expanded) {
      this.setState({expanded : false});
    }
    else {
      this.setState({expanded : true});
    }
  }
  
  render() {
    return (
      <Pressable onPressIn = {()=>{this.toggleExpanded()}}>
        {this.makeCatTitle(this.props.cat)}
        {this.makeGroup(this.props.cat)}
      </Pressable>
    );
  }  
}
export default Accordion;