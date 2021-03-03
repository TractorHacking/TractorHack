import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

    justifyContent: 'space-between',
  },
  orange: {
    color: 'orange'
  },
  imgProp : {
    width : 151, 
    height : 77
  },
  splashImg : {
    width : 250, 
    height : 271
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
      borderBottomLeftRadius : 30
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
  }
  
});
export default styles;