import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

var error1 = new Object();
error1.errorDate = "1/24/18";
error1.resolved = "False";
error1.errorCodes = ["G18: No Gas", "F15: Fumes"];

var error2 = new Object();
error2.errorDate = "1/20/18";
error2.resolved = "True";
error2.errorCodes = ["G18: No Gas", "F15: Fumes"];

var initialArr = [error1, error2];


class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View>
      <Button title = "Disconnect"
        onPress = {() => {this.props.changeAppState('splash')}}
      />
      <View style={styles.RectangleShapeView} >
        <Text>1/24/18 Past Error            
          <Button marginLeft = "10" title = ">"
            onPress = {() => {this.props.changeAppState('splash')}}
            />
        </Text>
      </View>
      <View style={styles.Unresolved} ></View>

      <View style={styles.RectangleShapeView} >
        <Text>1/20/18 Past Error            
          <Button marginLeft = "10" title = ">"
            onPress = {() => {this.props.changeAppState('splash')}}
            />
        </Text>
      </View>
      <View style={styles.Resolved} ></View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
   
    RectangleShapeView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 20,
        width: 120 * 2,
        height: 30,
        backgroundColor: '#FFFFFF',
        boxShadow: "4px 4px gray",
        outline: "2px black",
        borderWidth: .5,
        borderColor: 'grey'
    },
    
    Unresolved: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop: 20,
        width: 120 * 2,
        height: 10,
        backgroundColor: 'red',
        boxShadow: "4px 4px gray",
        outline: "2px black",
        borderWidth: .5,
        borderColor: 'grey'
    },

    Resolved: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop: 20,
        width: 120 * 2,
        height: 10,
        backgroundColor: '#39FF14',
        boxShadow: "4px 4px gray",
        outline: "2px black",
        borderWidth: .5,
        borderColor: 'grey'
    }
   
});

export default History;