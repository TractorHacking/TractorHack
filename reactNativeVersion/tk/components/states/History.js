import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import HeaderBar from '../ui/headerBar.js';

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title='History' />
        <ConnectionStatusCard />
        <HistoryCard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '420px',
    display: 'block',
  }
})

export default History;