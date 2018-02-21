import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './styles';

class Timer extends React.Component {

    render() {
        return (
            <View>
                <Text>Here's the timer!</Text>
                <Button title="reset..." onPress={this.props.onTimerComplete} />
            </View>
        );
    }
}


export default Timer