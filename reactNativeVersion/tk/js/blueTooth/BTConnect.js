import React from 'react';
import {Button, Text} from 'react-native';



class BTConnect extends React.Component {
  constructor(props) {
    super(props);
    
    // 0 not tryed yet
    // 1 success
    // 2 falure
    
    this.state = {
       connectedStat : 0,
       tractorList : [{title : "no tractors"}]
    }
  }
  
  safeChangeAppState = (newState, cStat) => {
    if(this.state.connectedStat != 1) {
      this.setState({connectedStat : cStat});
      this.props.changeAppState(newState);
    }
  }
  
  componentDidMount() {
    // Get Bluetooth List
    this.setState({tractorList : [
      {
        title : "Tractor 1",
        onPress : () => {this.safeChangeAppState(2, 1)}
      },
      {
        title : "Tractor 2",
        onPress : () => {this.setState({connectedStat : 2})}
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
      case 0 :
        return (
          this.buttonMaker(this.state.tractorList)
        );
        break;
      case 2 :
        return (
          <Text> Failed To Connect </Text>
        );
        break;
    }
  }
}

export default BTConnect;