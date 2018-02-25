import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './styles';

class Timer extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text>Timer for {this.props.time}</Text>
                <Button title="when complete..." onPress={() => {this.props.onTimerComplete(this.props.time)}} />
            </View>
        );
    }
}


export default Timer