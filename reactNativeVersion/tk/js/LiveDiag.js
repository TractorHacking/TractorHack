import React from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';
import tractorImg from '../assets/bluetractor.png';

class LiveDiag extends React.Component {
  constructor(props) {
    super(props);
    this.LiveStyles = StyleSheet.create({
      orange: {
        color: 'orange'
      },
      imgProp : {
        width : 151, 
        height : 77
      }
    });
  }
  
  tractor() {
    return (
      <Image
        source = {{uri : tractorImg}}
        style = {this.LiveStyles.imgProp}
      />
    );
  }
  
  general() {

    
    return (
      <View>
        <Text style = {this.LiveStyles.orange}> General </Text>
      </View>
    )
  }
  
  render() {
    return (
      <View>
      {this.tractor()}
      {this.general()}
        <Text>
        <Button title = "Disconnect"
                onPress = {() => {this.props.changeAppState('splash')}}
        />
        <Text> Live Diag Data Here...</Text>
        </Text>
      </View>
    );
  }
}

export default LiveDiag;