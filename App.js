import React, { Component } from 'react';
import {    
  Text,
  TextInput,
  View,
  Image,
  Slider,
} from 'react-native';
import i18n from 'i18n-js';
import I18n from 'react-native-i18n';
import {en, es, pt} from './stringsTranslations';
import styles from './AppStyles';


i18n.fallbacks = true;
i18n.translations = { en, es, pt};
i18n.locale = I18n.currentLocale()

export default class Profile extends Component {
  constructor(props) {
   super(props)
   this.state = { 
     peso: 60, 
     altura: 168}
  } 

  message(){
    let message;
    const BMI_CALCULATION = this.state.peso / ((this.state.altura / 100) * (this.state.altura / 100));
    if (BMI_CALCULATION >= 18.5 && BMI_CALCULATION <= 24.9) {
     message = <Text>{i18n.t('pesonormal')}</Text>;
     } 
    else if (BMI_CALCULATION >= 17.0 && BMI_CALCULATION <= 18.49) {
     message = <Text>{i18n.t('bajopesoleve')}</Text>;
     } 
    else if (BMI_CALCULATION >= 16.0 && BMI_CALCULATION <= 16.99) {
      message = <Text>{i18n.t('bajopesomoderado')}</Text>;
     }
    else if (BMI_CALCULATION <= 15.99) {
      message = <Text>{i18n.t('bajopesosevero')}</Text>;
     }
    else if (BMI_CALCULATION >= 25.0 && BMI_CALCULATION <= 29.99) {
      message = <Text>{i18n.t('sobrepeso')}</Text>;
     } 
    else if (BMI_CALCULATION >= 30.0 && BMI_CALCULATION <= 34.99) {
      message = <Text>{i18n.t('obesidadleve')}</Text>;
     } 
    else if (BMI_CALCULATION >= 35.0 && BMI_CALCULATION <= 39.99) {
      message = <Text>{i18n.t('obesidadmoderada')}</Text>;
     }   
    else if (BMI_CALCULATION >= 40.0) {
      message = <Text>{i18n.t('obesidadmorbida')}</Text>;
     }
     return message
  }
    
  
  render() {    
  const BMI_CALCULATION = (this.state.peso / ((this.state.altura / 100) * (this.state.altura / 100)))
    return (
      <View style={styles.appcontainer}>
<View style={styles.logocontainer}>
    <Image
           style={styles.logo}
          source={require('./assets/splash.png')}
        />
        
</View>

        <Text style={styles.overslider}>{'\n'}{'\n'}
        {i18n.t('peso')}
        </Text>
        <Slider
         style={styles.slider}
         minimumTrackTintColor={'#2196f3'}
         maximumTrackTintColor={'#2196f3'}
         thumbTintColor={'#ff00ff'}
         step={1}
         minimumValue={4}
         maximumValue={240}
         value={this.state.peso}
         onValueChange={val => this.setState({ peso: val }) && this.IMClasification.bind(this)}
         onSlidingComplete={ val => this.getVal(val)}
        />
        

      <View style={styles.weightunderslider}>  
          <View style={styles.kgsflexrow}>
        <TextInput
          style={styles.kgsinput}
          onChangeText={(peso) => this.setState({peso})}
          maxLength = {3}
          keyboardType={"numeric"}>
        {this.state.peso}
        </TextInput>
        <Text style={styles.measurementunitsText}>
        kgs 
        </Text>
      </View>
        <View style={styles.lbsflexrow}>
        <TextInput
          style={styles.lbsinput}
          onChangeText={(event) => this.setState({peso: (event / 2.20462).toPrecision(3)})} 
          maxLength = {3}  
          keyboardType={"numeric"}>
        {this.state.peso.toPrecision && (this.state.peso * 2.20462).toPrecision(3)}
        </TextInput>
        <Text style={styles.measurementunitsText}>
        lbs
        </Text>
      </View>
    </View>

        <Text style={styles.overslider}>
        {i18n.t('altura')}
        </Text>
         <Slider
         style={styles.slider}
         minimumTrackTintColor={'#ff00ff'}
         maximumTrackTintColor={'#ff00ff'}
         thumbTintColor={'#add8e6'}
         step={1}
         minimumValue={50}
         maximumValue={210}
         value={this.state.altura}
         onValueChange={val => this.setState({ altura: val }) }
        />

      <View style={styles.heightunderslider}>  
          <View style={styles.mtsflexrow}>
        <TextInput
          style={styles.mtsinput}
          onChangeText={(altura) => this.setState({altura: altura * 100})}
          defaultValue={(this.state.altura / 100)}
          maxLength = {4}
          keyboardType={"decimal-pad"}>
        {this.state.altura.toPrecision && (this.state.altura.toPrecision(3)) / 100}
        </TextInput>
        <Text style={styles.measurementunitsText}>
        mts 
        </Text>
      </View>
        <View style={styles.cmsflexrow}>
        <TextInput
          style={styles.cmsinput}
          onChangeText={(altura) => this.setState({altura})}
          defaultValue={this.state.altura}
          maxLength = {3}
          keyboardType={"numeric"}>
        {this.state.altura.toPrecision && this.state.altura.toPrecision(3)}
        </TextInput>
        <Text style={{fontSize: 30,}}>
        cms
        </Text>
      </View>
    </View>

<View style={styles.flexResultsMessage}>
<View style={styles.resultsContainer}>
        <Text style={styles.resultsTopPart}>
        {i18n.t('imc')} </Text>
        <Text style={styles.resultsBottomPart}>{(BMI_CALCULATION).toPrecision(3)}
        
        </Text></View>
        <Text style={styles.underresults} >
        
        {this.message()}
        </Text>
       
      </View>
      </View>
    );
  }
}

 

