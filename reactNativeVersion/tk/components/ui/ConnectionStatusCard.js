import React from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';

class ConnectionStatusCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false
    }
  }

  stateToConnected() {
    this.setState({connected: true});
  }

  goToBluetooth() {
    this.setState.appState='bluetooth';
  }

  renderHeader() {
    if (this.state.connected === false) {
      return (
        <Text style={styles.textHeader}>
          Bluetooth Device Not Found
        </Text>
      )
    }
    else {
      return (
        <Text style={styles.textHeader}>
        Bluetooth Device Paired
        </Text>
      )
    }
  }

  // same image for now
  renderImage() {
    if (this.state.connected === false) {
      return (
        <Image
        style={styles.image}
        source={require('../../assets/bluetooth.png')}
        />
      )
    }
    else {
      return (
        <Image
        style={styles.image}
        source={require('../../assets/bluetooth.png')}
        />
      )
    }
  }

  renderCaption() {
    if (this.state.connected === false) {
      return (
        <Text style={styles.caption}>
        Check your system's bluetooth settings to pair with the dongle.
        </Text>
      )
    }
    else {
      return (
        <Text style={styles.caption}>
        Connect to view data and diagnose your vehicle.
        </Text>
      )
    }

  }

  renderButton() {
    if (this.state.connected === false) {
      return(
        <Button
          title="Bluetooth Settings"
          onPress={this.stateToConnected()}
          color="#1FA2DC"
        />
      )
    }
    else {
      return (
        <Button
        title="Connect"
        onPress={this.goToBluetooth()}
        color="#1FA2DC"
        />  
      )
    }
  }

  render() {
    return(
      <View style={styles.centerCard}>
        {this.renderHeader()}
        {this.renderImage()}
        {this.renderCaption()}
        {this.renderButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerCard: {
    alignItems: 'center',
    alignContent: 'center',
    padding: '1em',
    margin: '1em',
    borderRadius: '0.5em',
    borderWidth: 'medium',
    borderColor: '#eeeeee',
    width: 420
  },
  image: {
    width: 40,
    height: 60
  },
  textHeader: {
    fontSize: '1.25em',
    lineHeight: '1.5em',
    textAlign: 'center'
  },
  caption: {
    lineHeight: '1.2em',
    margin: '1em',
    textAlign: 'center'
  }
})

export default ConnectionStatusCard;