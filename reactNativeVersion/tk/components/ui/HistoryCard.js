import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

class HistoryCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.centerCard}>
        <Text style={styles.textHeader}>
          Vehicle History
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/bluetractor.png')}
        />
        <Text style={styles.textBody}>
          View your garage, diagnostic history, and snapshots.
        </Text>
        <Button
          title="View History"
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
    width: 100,
    height: 60
  },
  textHeader: {
    fontSize: '1.25em',
    lineHeight: '1.5em'
  },
  textBody: {
    lineHeight: '1.2em',
    margin: '1em'
  }
})

export default HistoryCard;