import React from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';



class HomeCardHistory extends React.Component {
  state = {
    connected: false
  }

  renderHeader = () => {
    if (this.state.connected === false) {
      <Text style={styles.textHeader}>
      Bluetooth Device Not Found
      </Text>
    }
    else {
      <Text style={styles.textHeader}>
      Bluetooth Device Paired
      </Text>
    }
  }

  // same image for now
  renderImage = () => {
    if (this.state.conneced === false) {
      <Image
      style={styles.image}
      source={require('../../assets/bluetooth.png')}
      />
    }
    else {
      <Image
      style={styles.image}
      source={require('../../assets/bluetooth.png')}
      />
    }
  }

  renderCaption = () => {
    if (this.state.connected === false) {
      <Text style={styles.caption}>
        Check your system's bluetooth settings to pair with the dongle.
      </Text>
    }
    else {
      <Text style={styles.caption}>
        Connect to view data and diagnose your vehicle.
      </Text>
    }

  }

  renderButton = () => {
    if (this.state.connected === false) {
      return(
        <Button
          title="Bluetooth Settings"
          onPress={() => Alert.alert('You pressed a button')}
          color="#1FA2DC"
        />
      )
    }
    else {
      <Button
      title="Connect"
      onPress={() => Alert.alert('You pressed a button')}
      color="#1FA2DC"
      />
    }
  }

  render() {
    return(
      <View style={styles.centerCard}>
        renderHeader();
        renderImage();
        renderCaption();
        renderButton();
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

export default HomeCardHistory;