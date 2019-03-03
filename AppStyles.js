import {    
  StyleSheet
} from 'react-native';

const underslider = {
  display: 'flex',
  justifyContent: 'space-around',
  height: 120, 
  width: 400, 
  textAlign: 'center', 
  color: 'black', 
  fontSize: 30,
  flexDirection: 'row',
  alignItems: 'center',
};

const measurementunitsFlexRow = {
  height: 50, 
  width: 100, 
  textAlign: 'center', 
  color: 'black', 
  fontSize: 30,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

const inputs = {
    textAlign: 'center', 
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black', 
    fontSize: 30,
    width: 80,
    height: 80,
    borderColor: 'gray', 
    borderWidth: 1, 
    marginRight: 5
}

const resultInsideParts = {
  fontSize: 35,
  padding: 10,
  textAlign: 'center',
  margin: 5,
}
const styles = StyleSheet.create({
  appcontainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ccc65',
    marginTop: 0,
    paddingTop: 0
  },


  logocontainer: {
    width: 100,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    top: 27,
    left: 280
  },
  logo: {
    width: 75,
    height: 75
  },


  slider: {
    width: 360
  },
  overslider: {
    fontSize: 25,
    marginRight: 275
  },
  weightunderslider: {
    ...underslider,
    marginLeft: 15
  },
  heightunderslider: {
    ...underslider
  },


  measurementunitsText: {
    fontSize: 30
  },


  kgsflexrow: {
    ...measurementunitsFlexRow
  },
  lbsflexrow: {
    ...measurementunitsFlexRow,
    marginRight: 40
  },
  mtsflexrow: {
    ...measurementunitsFlexRow
  },
  cmsflexrow: {
    ...measurementunitsFlexRow
  },


  kgsinput: {
    ...inputs
  },
  lbsinput: {
    ...inputs
  },
  mtsinput: {
    ...inputs
  },
  cmsinput: {
    ...inputs,
    marginLeft: -23
  },

  flexResultsMessage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  resultsContainer: {
    backgroundColor: 'white', 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 65,
    padding: 2,
    marginRight: 1
  },
  resultsTopPart: {
    ...resultInsideParts,
    paddingBottom: 0,
    marginBottom: 0,
    marginLeft: 15,
  },
  resultsBottomPart: {
    ...resultInsideParts,
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