import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import CountdownTimer from './components/CountdownTimer'

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button title="Start Timer" onPress={this.startTimer} />

        <CountdownTimer secondsRemaining={100} />

        <ProgressCircle
            percent={30}
            radius={80}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'29'}</Text>
        </ProgressCircle>
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
