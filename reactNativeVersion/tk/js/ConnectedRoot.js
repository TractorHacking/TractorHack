import React from 'react';
import {Button, Text, View} from 'react-native';
<<<<<<< Updated upstream:reactNativeVersion/tk/js/ConnectedRoot.js
import styles from './Styles.js';
import Tractor from './TractorImg.js';

=======
import styles from '../ui/Styles.js';
import Tractor from '../ui/TractorImg.js';
import VehicleInfo from './VehicleInformation.js';
>>>>>>> Stashed changes:reactNativeVersion/tk/components/states/ConnectedRoot.js

class ConnectedRoot extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View>
        <Text style = {styles.title}> Connected </Text>
        <Tractor />
	<VehicleInfo />
        <View style = {styles.padded}>
          <Button title = "Disconnect"
                  onPress = {() => {this.props.changeAppState('splash')}}
          />
        </View>
        <View style = {styles.padded}>
          <Button title = "Live Diag Data"
                  onPress = {() => {this.props.changeAppState('live')}}
          />
        </View>
      </View>
    );
  }
}

export default ConnectedRoot;
