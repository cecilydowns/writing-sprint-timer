import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { Icon } from 'react-native-elements'


import styles from './styles'

export default class FooterItem extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.itemContainer}>
            <Icon name={this.props.icon} color='#666' onPress={this.props.click} />
                <Text style={styles.itemText}>{this.props.text}</Text>
            </View>
        );
    }
}