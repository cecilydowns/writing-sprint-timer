import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import styles from './styles';

export default class Timer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            secondsRemaining: null,
            secondsTotal: null,
            percent: 0
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.secondsRemaining !== this.state.secondsRemaining){
            this.setState({
                secondsRemaining: nextProps.secondsRemaining,
                secondsTotal: nextProps.secondsRemaining
            })
        }
    }

    componentDidMount(){
        this.setState({ 
            secondsRemaining: this.props.time * 60,
            secondsTotal: this.props.time * 60 
        });
        this.interval = setInterval(this.tick, 1000); 
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            secondsRemaining: this.state.secondsRemaining - 1,
            percent: 100 - (((this.state.secondsRemaining - 1) /  this.state.secondsTotal) * 100)
        });
        if (this.state.secondsRemaining <= 0) {
          clearInterval(this.interval);
          this.props.onTimerComplete(this.props.time)
        }    
    }

    render() {

            const secondsToMinutes = () => {
            let seconds = this.state.secondsRemaining
            let minutes = 0
            while(seconds > 59){
                minutes += 1
                seconds -= 60
            }
            return `${minutes}m${seconds}s`
        }

        return (
        <View>
            <ProgressCircle
            percent={this.state.percent}
            radius={120}
            borderWidth={3}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{secondsToMinutes()}</Text>
            </ProgressCircle>
            
        </View>
        );
    }
}
