import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StateController from './js/StateController.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StateController />       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
