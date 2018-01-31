import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import CountdownTimer from './components/CountdownTimer'

export default class App extends React.Component {

  startTimer = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <CountdownTimer secondsRemaining={16} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
