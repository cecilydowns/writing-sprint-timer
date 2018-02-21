import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles"
import { Actions } from 'react-native-router-flux'


class Timer extends React.Component {


    onTimerButtonPress = () => {
        console.log("Well hello there")
    }

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.topContainer}>

                <Text>Top container...</Text>

              </View>
              <View style={styles.bottomContainer}>
                <Text>Some encouragement about writing every day,
                    or activity stats.
                </Text>
              </View>
          </View>
        );
    }
}


export default Timer