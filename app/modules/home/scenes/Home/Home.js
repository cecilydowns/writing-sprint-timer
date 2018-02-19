import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Button, SocialIcon, Divider } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';

import {actions as auth} from "../../index"

class Home extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <View>
                <Text>Home page!</Text>
            </View>
        );
    }
}

export default Home;