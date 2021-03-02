import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../ui/Styles.js';
import HeaderBar from '../ui/HeaderBar.js';


class BTConnect extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
       connectedStat : 'notTryed',
       tractorList : [{title : "no tractors"}]
    }
  }
  
  safeChangeAppState = (newState, cStat) => {
    if(this.state.connectedStat != 'success') {
      this.setState({connectedStat : cStat});
      this.props.changeAppState(newState);
    }
  }
  
  componentDidMount() {
    // Get Bluetooth List
    this.setState({tractorList : [
      {
        title : "Tractor 1",
        onPress : () => {this.safeChangeAppState('connected', 'success')}
      },
      {
        title : "Tractor 2",
        onPress : () => {this.setState({connectedStat : 'failure'})}
      }
    ]});
    
  }
  
  singleButton = (tractor) => {
    return (
    <View style = {styles.btTractorButton} key = {tractor.title}>
      <Button 
        title = {tractor.title}
        onPress = {tractor.onPress}
      />
    </View>
    );
  }
  
  buttonMaker(tractorList) {
    let temp = [];
    tractorList.forEach((tractor) => {temp.push(this.singleButton(tractor))}); 
    
    return (
      temp
    );
  }
  
  render() {
    
    switch (this.state.connectedStat) {
      case 'notTryed' :
        return (
          <View>
            <HeaderBar title = "Connections Available" />
            {this.buttonMaker(this.state.tractorList)}
          </View>
        );
        break;
      case 'failure' :
        return (
          <View>
            <View style = {styles.padded}>
              <Button title = "Back"
                onPress = {() => {this.props.changeAppState('splash')}}
              />
            </View>
            <Text> Failed To Connect </Text>
          </View>
        );
        break;
    }
  }
}

export default BTConnect;