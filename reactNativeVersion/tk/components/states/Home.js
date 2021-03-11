import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import HeaderBar from '../ui/headerBar.js';
import ConnectionStatusCard from '../ui/ConnectionStatusCard.js';
import HistoryCard from '../ui/HistoryCard.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title='Home' />
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

export default Home;