import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

    justifyContent: 'space-between',
    maxWidth: '420px',
    alignSelf: 'center'
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
    padding : 10,
    alignItems: 'center'
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
  catResolved: {
    fontweight : 'bold',
    backgroundColor : '#77dd77'
  },
  catUnresolved: {
    fontweight : 'bold',
    backgroundColor : '#ff6961'
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
  headerBar : {
    flex : 1,
    flexDirection : 'column',
    alignItems: 'stretch'
  },
  headerBarText : {
 //   fontFamily : 'Roboto',
    fontweight : 'bold',
    fontSize : 24,
    color : '#FFFFFF'
    
  },
  gradImg : {
      borderBottomRightRadius : 30,
      borderBottomLeftRadius : 30,
 //   flex : 1,
//    resizeMethod : 'resize',
 //   justifyContent : 'center'
    
  },
  centerView : {
    alignItems : 'center'
  },
  paddedCenter : {
    padding : 10,
    alignItems : 'center'
  },
  titleCardView : {
    flex : 1,
    backgroundColor : '#FFFFFF',
    borderWidth : 'medium',
    borderColor : '#eeeeee',
    width : 440,
    borderRadius : '0.5em',
 //   alignItems : 'center',
    alignContent : 'center',
    padding : '1em',
    margin : '1em'
  },
  backImg : {
    width : 32,
    height : 32
  },
  liveDiagView : {
    
  },
  connectButton : {

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