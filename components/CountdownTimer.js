import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'


export default class CountdownTimer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            secondsRemaining: null,
            secondsTotal: null,
            percent: null
        }
    }

    componentDidMount(){
        this.setState({ 
            secondsRemaining: this.props.secondsRemaining,
            secondsTotal: this.props.secondsRemaining 
        });
        this.interval = setInterval(this.tick, 1000);    
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            secondsRemaining: this.state.secondsRemaining - 1,
            percent: 100 - (this.state.secondsRemaining - 1) /  this.state.secondsTotal * 100
        });
        if (this.state.secondsRemaining <= 0) {
          clearInterval(this.interval);
        }    
    }

    render() {
        return (
            <ProgressCircle
            percent={this.state.percent}
            radius={80}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{this.state.secondsRemaining}</Text>
            <Text>{this.state.percent}</Text>
        </ProgressCircle>
        );
    }
}