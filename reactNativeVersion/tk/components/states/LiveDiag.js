import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from '../ui/Styles.js';
import DiagFormatter from '../ui/DiagFormatter';
import Tractor from '../ui/TractorImg.js';
import HeaderBar from '../ui/HeaderBar.js';
import TitleCard from '../ui/TitleCard.js';

class LiveDiag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }
  
  componentDidMount() {
    this.updateData();
  }

  fetchData() {
    let x =
      {
        vehicleSpeed : "0",
        engineTemp : "195",
        fuel : "45",
        oilLevel : "87",
        rpm : "540",
        exhaustTemp : "145",
        load : "90",
        armPosition : "up",
        trailerPosition : "20",
        wheelRotation : "Locked",
        spray1 : "Off"
      };
    
    return x;
  }
  
  updateData() {
    let received = this.fetchData();
    
    this.setState({
      data : [
        {
          catTitle : "General",
          group : [
            {
              title : "Vehicle Speed", 
              value : received.vehicleSpeed
            },
            {
              title : "Engine Temp",
              value : received.engineTemp
            },
            {
              title : "Fuel Level",
              value : received.fuel
            }
          ]
        },
        {
          catTitle : "Engine",
          group : [
            {
              title : "Oil Level",
              value : received.oilLevel
            }, 
            {
              title : "RPM",
              value : received.rpm
            },
            {
              title : "Exhaust Temp",
              value : received.exhaustTemp
            },
            {
              title : "Load",
              value : received.load
            }
          ]
        },
        {
          catTitle : "Controls",
          group : [
            {
              title : "Arm Position",
              value : received.armPosition
            },
            {
              title : "Trailer Position",
              value : received.trailerPosition
            }, 
            {
              title : "Wheel Rotation",
              value : received.wheelRotation
            },
            {            
              title : "Spray 1",
              value : received.spray1
            }
          ]
        }
      ]
    });
  }
  
  tcContent() {
    return (
      <View>
        <Text> {this.props.tractorName} </Text>
        <Tractor />
      </View>
    );
  }
  
  render() {
    return (
      <View>
        <HeaderBar title = "Live Diagnostic Data" />
        <View style = {styles.centerView}>
          <TitleCard 
            content = {() => this.tcContent()} 
            backButtonAction = {() => {this.props.changeAppState('connected')}}
          />
          <Button title = "Disconnect"
                  onPress = {() => {this.props.changeAppState('splash')}}
          />
          <DiagFormatter data = {this.state.data} />
        </View>
      </View>
    );
  }
}

export default LiveDiag;