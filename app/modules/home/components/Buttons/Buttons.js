import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

class Buttons extends React.Component {

    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {this.props.onTimerStart(30)}} style={styles.timeButton}>
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
        );
    }
}


export default Buttons