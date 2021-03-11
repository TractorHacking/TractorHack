import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StateController from './components/states/StateController.js';
import styles from './components/ui/Styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StateController />       
    </View>
  );
}