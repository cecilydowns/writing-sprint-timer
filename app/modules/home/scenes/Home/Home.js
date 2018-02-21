import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"


class Home extends React.Component {

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.topContainer}>
                <View style={styles.timeButton}>
                    <Text>30 min</Text>
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