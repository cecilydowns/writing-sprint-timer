import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './styles';

class TimerComplete extends React.Component {

    render() {
        return (
            <View>
                <Text>You did it!!!!</Text>
                <Button title="reset..." onPress={this.props.onTimerSave} />
            </View>
        );
    }
}


export default TimerComplete