import React from 'react';
import { Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import styles from './styles';

class TimerCompleteForm extends React.Component {
    constructor(){
        super()
        this.state = {
            words: "0"
        }

    }


    onChangeText = (value) => {
        this.setState({
            words: value
        })
    }

    render() {
        return (
            <View>
                <FormLabel>Words Written</FormLabel>
                <FormInput
                    keyboardType={'numeric'}
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    underlineColorAndroid={"#fff"}
                    onChangeText={this.onChangeText}
                    value={this.state.words}/>

                <Button title="SUBMIT" onPress={() => {this.props.onTimerSave(this.props.time, this.state.words)}} />
            </View>
        );
    }
}


export default TimerCompleteForm;