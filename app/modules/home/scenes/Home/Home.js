import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"


class Home extends React.Component {

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.topContainer}>
                <View style={styles.timeButton}>
                    <Text style={styles.timeNumber}>30</Text>
                    <Text style={styles.timeText}>min</Text>
                </View>
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