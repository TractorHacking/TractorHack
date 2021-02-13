import React from 'react';
import {Button, Text} from 'react-native';



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
      <Button 
        title = {tractor.title}
        onPress = {tractor.onPress}
        key = {tractor.title}
      />
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
          this.buttonMaker(this.state.tractorList)
        );
        break;
      case 'failure' :
        return (
          <Text>
            <Button title = "Disconnect"
              onPress = {() => {this.props.changeAppState('splash')}}
            />
            <Text> Failed To Connect </Text>
          </Text>
        );
        break;
    }
  }
}

export default BTConnect;