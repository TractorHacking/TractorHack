import React from 'react';
import {Button, Pressable, Text, View, Image, useState} from 'react-native';
import styles from './Styles.js';
import down from '../../assets/down.png';
import up from '../../assets/up.png';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.styleArr = [styles.catUnresolved, styles.catResolved];
    if(this.props.expanded != null) {
      if(this.props.cat.status != null) {
        this.state = {
          arr : ["Unresolved", "Resolved"],
          expanded : this.props.expanded,
          text: this.props.cat.status
        }
      }
      else {
        this.state = {
          expanded : this.props.expanded,
        }
      }
    }
    else {
      if(this.props.cat.status != null) {
        this.state = {
          arr : ["Unresolved", "Resolved"],
          expanded : false,
          text: this.props.cat.status
        }
      }
      else {
        this.state = {
          expanded : false
        }
      }
    }
  }
  
  makeCatTitle (cat) {
    if (this.state.expanded) {
      return (
        <View style = {styles.outsideCatTitle} >
          <View style = {styles.insideCatTitle}>
            {cat.status == null? <Text style = {styles.catTitle}> {cat.catTitle} </Text>: <Text style = {this.styleArr[this.state.text % 2]}> {this.props.cat.catTitle + " " + this.props.cat.time} </Text>}
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
            {cat.status == null? <Text style = {styles.catTitle}> {cat.catTitle} </Text>: <Text style = {this.styleArr[this.state.text % 2]}> {this.props.cat.catTitle + " " + this.props.cat.time} </Text>}
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

  changeTitleColor(cat) {
    cat.status += 1;
    this.makeCatTitle(cat);
  }

  makeGroup (cat) {
    let group = [];
    
    if (this.state.expanded) {
      cat.group.forEach((gp) => {group.push(this.singleGroup(gp))});
      if (cat.status != null)
        group.push(<Button title = {this.state.arr[this.state.text % 2]} onPress = {() => this.setState({text: this.state.text+1})}/>);
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