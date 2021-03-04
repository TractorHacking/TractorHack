import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orange: {
    color: 'orange'
  },
  imgProp : {
    width : 151, 
    height : 77
  },
  splashImg : {
    width : 175, 
    height : 117
  },
  btTractorButton : {
    padding : 10
  },
  padded : {
    padding : 10
  },
  diagItem : {
    backgroundColor : 'green'
  },
  catTitle : {
    fontweight : 'bold',
    backgroundColor : '#F0F0F0'
  },
  catGroup : {
    
  },
  catGroupView : {
    flex : 1,
    flexDirection : 'row-reverse'
  },
  arrow : {
    width : 20,
    height : 19
  },
  outsideCatTitle : {
    paddingTop : 8,
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'flex-end'
  },
  insideCatTitle : {
    flex : 1
  },
  title : {
    
  },

  connectButton :{

  borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:225,
    height:225,
    backgroundColor:'#21b1fb',
    borderRadius:150,

  }
  
  
});
export default styles;