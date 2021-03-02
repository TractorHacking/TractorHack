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
  title : {
    
  },
  headerBar : {
    flex : 1,
    backgroundColor : '#3F53A3'
  },
  headerBarText : {
    fontFamily : 'Roboto',
    fontweight : 'bold',
    fontSize : 24
  }
  
});
export default styles;