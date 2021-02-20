import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StateController from './js/StateController.js';
import styles from './js/Styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StateController />       
    </View>
  );
}