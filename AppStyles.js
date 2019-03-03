import {    
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ccc65',
    marginTop: 0,
    paddingTop: 0
  },
  overslider: {
    fontSize: 25,
    marginRight: 275
  },
  resultsTopPart: {
    fontSize: 35,
    padding: 10,
    textAlign: 'center',
    margin: 5,
    paddingBottom: 0,
    marginBottom: 0,
    marginLeft: 15,
  },
  resultsBottomPart: {
    fontSize: 35,
    padding: 10,
    textAlign: 'center',
    margin: 5,
    paddingTop: 0,
    marginTop: 0,
    
  },
  underresults: {
    fontSize: 31,
    textAlign: 'center',
    marginLeft: 5
  },
});

export default styles;