import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import CountdownTimer from './components/CountdownTimer'

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      timeSelected: "15"
    }
  }

  onChange = (text) => {
    // code to remove non-numeric characters from text
    this.setState({timeSelected: text})
  }

  render() {
    return (
      <View style={styles.container}>       

        <View style={styles.formContainer}>
          <Text>I would like to write for</Text>
          <TextInput 
            style={styles.timeInput}
            keyboardType = 'numeric'
            onChangeText = {(text)=> this.onChange(text)}
            value = {this.state.timeSelected}
            placeHolder="Select a time"
          /> 
          <Text>minutes</Text>
      </View>
        <Text>{this.state.timeSelected}</Text>
        
        <CountdownTimer secondsRemaining={this.state.timeSelected} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {

  },
  timeInput: {
    height: 60,
    width: 60,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 25,
    color: 'grey',
    fontWeight: 'bold'
  }
});
