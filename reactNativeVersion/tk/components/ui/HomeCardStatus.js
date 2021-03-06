import React from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';

class HomeCardHistory extends React.Component {
  render() {
    return(
      <View style={styles.centerCard}>
        <Text style={styles.textHeader}>
          Connection Status
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/bluetooth.png')}
        />
        <Text style={styles.textBody}>
          You are not connected to a bluetooth device. Check your bluetooth settings to connect.
        </Text>
        <Button
          title="Bluetooth Settings"
          onPress={() => Alert.alert('You pressed a button')}
          color="#1FA2DC"
        />
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
  textBody: {
    lineHeight: '1.2em',
    margin: '1em',
    textAlign: 'center'
  }
})

export default HomeCardHistory;