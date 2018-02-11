import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'


export default class CountdownTimer extends React.Component {

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
            secondsRemaining: this.props.secondsRemaining,
            secondsTotal: this.props.secondsRemaining 
        });
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
        }    
    }


    startTimer = () => {
        this.interval = setInterval(this.tick, 1000);    
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
            <Button title="Start Timer" onPress={this.startTimer} />
        </View>
        );
    }
}