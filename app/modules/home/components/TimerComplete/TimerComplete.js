import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './styles';

class TimerComplete extends React.Component {

    render() {
        return (
            <View>
                <Text>You did it!!!!</Text>
                <Button title="reset..." onPress={() => {this.props.onTimerSave(60, 1543)}} />
            </View>
        );
    }
}


export default TimerComplete