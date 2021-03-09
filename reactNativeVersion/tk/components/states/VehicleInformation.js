import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from '../ui/Styles.js';
import DiagFormatter from '../ui/DiagFormatter';
import Tractor from '../ui/TractorImg.js';

class VehicleInformation extends React.Component {
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
        make : "             John Deere",
        model : "                   504 SE",
        year : "                         1998",
        engine : "     2.9L 3 Cylinder",
        vin : "                F25453212",
      };
    
    return x;
  }
  
  updateData() {
    let received = this.fetchData();
    
    this.setState({
      data : [
        {
          catTitle : "Vehicle Information",
          group : [
            {
              title : " Make:							     ", 
              value : received.make
            },
            {
              title : "Model:							     ",
              value : received.model
            },
            {
              title : "Year:							    ",
              value : received.year
            },
	   {
   	     title : "Engine:							      ",
	     value : received.engine
	   },
	   {
	     title: "VIN:				  				  ",
	     value : received.vin
	   }
          ]
        }
          ]
        });
    }
  
  render() {
    return (
      <View>
        <DiagFormatter data = {this.state.data} />
      </View>
    );
  }
}

export default VehicleInformation;
