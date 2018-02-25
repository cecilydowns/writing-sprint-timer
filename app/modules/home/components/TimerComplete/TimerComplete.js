import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import styles from './styles';

class TimerComplete extends React.Component {

    render() {
        return (
            <View>
                <Text>You did it!!!! Wrote for {this.props.time} minutes</Text>
            </View>
        );
    }
}


export default TimerComplete;