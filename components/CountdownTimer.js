import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CountdownTimer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            secondsRemaining: null
        }
    }

    componentDidMount(){
        this.setState({ secondsRemaining: this.props.secondsRemaining });
        this.interval = setInterval(this.tick, 1000);    
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        if (this.state.secondsRemaining <= 0) {
          clearInterval(this.interval);
        }    
    }

    render() {
        return (
        <Text>
            Seconds remaining: {this.state.secondsRemaining}
        </Text>
        );
    }
}