import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from '../ui/Styles.js';
import Tractor from '../ui/TractorImg.js';
import VehicleInfo from './VehicleInformation.js';
import HeaderBar from '../ui/HeaderBar.js';
import TitleCard from '../ui/TitleCard.js';
import TitleCardNoButton from '../ui/TitleCardNoButton.js';
import ErrorSnapshot from './ErrorSnapshot.js';

class ConnectedRoot extends React.Component {
  constructor(props) {
    super(props);
    
  }
  titleCard2() {
    
    return (
      <View>
        <VehicleInfo />
      </View>
    );
  }

  historyCard() {
    return (
      <ErrorSnapshot />
    );
  }
  
  titleCard() {
    
    return (
      <View>
        <TextInput
          style = {styles.inpTracName}
          onChangeText = {this.props.changeTractorName}
          defaultView = {this.props.tractorName}
          placeholder = {this.props.tractorName}
          clearButtonMode = "always"
        />
        <Tractor />
        <View style = {styles.paddedCenter}>
          <Button title = "Live Diag Data"
                  onPress = {() => {this.props.changeAppState('live')}}
          />
        </View>
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
          <TitleCardNoButton
            content = {() => this.historyCard()}
          />
        </View>
        <View style = {styles.paddedCenter}>
          <Button title = "Disconnect"
                  onPress = {() => {this.props.changeAppState('splash')}}
          />
        </View>
      </View>
    );
  }
}

export default ConnectedRoot;
