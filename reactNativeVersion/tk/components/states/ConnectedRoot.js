import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from '../ui/Styles.js';
import Tractor from '../ui/TractorImg.js';
import VehicleInfo from './VehicleInformation.js';
import HeaderBar from '../ui/HeaderBar.js';
import TitleCard from '../ui/TitleCard.js';
import TitleCardNoButton from '../ui/TitleCardNoButton.js';

class ConnectedRoot extends React.Component {
  constructor(props) {
    super(props);
    this.tractorName = "Tractor Name Here";
    
  }
  titleCard2() {
    
    return (
      <View>
        <VehicleInfo />
      </View>
    );
  }


  
  titleCard() {
    
    return (
      <View>
        <TextInput
          style = {styles.inpTracName}
          onChangeText = {() => null}
          defaultView = {this.tractorName}
          placeholder = "Tractor Name Here"
          clearButtonMode = "always"
        />
        <Tractor />
      </View>
    );
  }
  
  render() {
    return (
      <View>
        <HeaderBar title = "Vehicle Data"/>
        <View style = {styles.centerView}>
          <TitleCard 
            content = {() => this.titleCard()}
            backButtonAction = {() => this.props.changeAppState('bluetooth')}
          />
	   <TitleCardNoButton
            content = {() => this.titleCard2()}
          />
        </View>
        <View style = {styles.paddedCenter}>
          <Button title = "Disconnect"
                  onPress = {() => {this.props.changeAppState('splash')}}
          />
        </View>
        <View style = {styles.paddedCenter}>
          <Button title = "Live Diag Data"
                  onPress = {() => {this.props.changeAppState('live')}}
          />
        </View>
        <View style = {styles.paddedCenter}>
          <Button title = "Diagnostic History"
                  onPress = {() => {this.props.changeAppState('errorsnap')}}
          />
        </View>
      </View>
    );
  }
}

export default ConnectedRoot;
