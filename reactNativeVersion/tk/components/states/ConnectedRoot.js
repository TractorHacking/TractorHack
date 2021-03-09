import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../ui/Styles.js';
import Tractor from '../ui/TractorImg.js';
import VehicleInfo from './VehicleInformation.js';
import HeaderBar from '../ui/HeaderBar.js';
<<<<<<< Updated upstream
=======
import TitleCard from '../ui/TitleCard.js';
import TitleCardNoButton from '../ui/TitleCardNoButton.js';

>>>>>>> Stashed changes

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


  
  render() {
    return (
      <View>
<<<<<<< Updated upstream
        <HeaderBar title = "Connected"/>
        <Tractor />
	<VehicleInfo />
=======
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
>>>>>>> Stashed changes
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
