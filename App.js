import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, } from 'react-native';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peso: 'Ej: 52.4', altura: 'Ej: 1.73', imc: 'peso' + 'altura' };
  }
  
  render() {
    return (
      <View style={styles.body}>
        
        <View style={styles.title}>
          <Text style={styles.titletext}>IMC Calculadora</Text>
        </View>
        
        
        <View style={styles.flexcolumn}>
          
        
          <View style={styles.flexrow}>
            <Text style={styles.textpreinput}>Peso:   </Text>
            <TouchableHighlight style={styles.touchablehightlight}>
              <TextInput style={styles.textinput}
              onChangeText={(peso) => this.setState({peso})}
              value={this.state.peso}/>
            </TouchableHighlight>
            <Text style={styles.textposinput}>kgs</Text>
          </View>
        
          
        
          <View style={styles.flexrow}>
            <Text style={styles.textpreinput}>Altura:</Text>
            <TouchableHighlight style={styles.touchablehightlight}>
              <TextInput style={styles.textinput}
              onChangeText={(altura) => this.setState({altura})}
              value={this.state.altura}
              />
            </TouchableHighlight>
            <Text style={styles.textposinput}>mts</Text>
          </View>
          
          <Text style={styles.titletext}>IMC</Text>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#64b5f6',
    color: 'white',
    fontWeight: '900',
  },
  
  title: {
    height: '15%',
    width: '100%',
    backgroundColor: '#1488CC',
    justifyContent: 'center',
    marginTop: '5%',
  },
  
  titletext: {
    fontSize: '140%',
    opacity: 0.95,
    textAlign:'center',
  },
  
  flexcolumn:{
    flex: 0.5,
    flexDirection: 'column',
  },
  
  flexrow:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%',
    marginRight: '3%',
    width: '100%',
  },
  
  textpreinput: {
    fontSize: '120%',
    textAlign: 'center',
  },
  
  textinput: {
    height: '100%', 
    width: '50%', 
    borderRadius: 5,
    borderColor: '#1488CC', 
    borderWidth: 2, 
    backgroundColor: 'white', 
    color: 'gray', 
    textAlign: 'right',
    marginRight: '3%',
    marginLeft: '3%'
  },
  
  textposinput: {
    fontSize: '100%',
    textAlign: 'center',
  },
  touchablehightlight:{
    marginRight: '-35%',
    height: '50%',
  },
  
});
