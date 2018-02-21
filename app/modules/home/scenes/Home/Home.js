import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles"
import { Actions } from 'react-native-router-flux'


class Home extends React.Component {


    onTimerButtonPress = () => {
        Actions.push('Timer')
    }

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.topContainer}>

                <TouchableOpacity onPress={this.onTimerButtonPress} style={styles.timeButton}>
                    <Text>
                        <Text style={styles.timeNumber}>30</Text>
                        <Text style={styles.timeText}>min</Text>
                    </Text>
                </TouchableOpacity>
                <View style={styles.timeButton}>
                    <Text style={styles.timeNumber}>15</Text>
                    <Text style={styles.timeText}>min</Text>
                </View>
                <View style={styles.timeButton}>
                    <Text style={styles.timeNumber}>10</Text>
                    <Text style={styles.timeText}>min</Text>
                </View>
                <View style={styles.timeButton}>
                    <Text style={styles.timeNumber}>5</Text>
                    <Text style={styles.timeText}>min</Text>
                </View>
                <View style={styles.timeButton}>
                    <Text style={styles.timeNumber}>60</Text>
                    <Text style={styles.timeText}>min</Text>
                </View>

                <View style={styles.timeButton}>
                    <Text>Custom</Text>
                    <Text>Time</Text>
                </View>

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


export default Home