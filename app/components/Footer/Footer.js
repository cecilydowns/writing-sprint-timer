import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles'
import FooterItem from './FooterItem'

import { Actions } from 'react-native-router-flux';


export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <FooterItem icon='home' text='Home' click={Actions.Main} />
                    <FooterItem icon='book' text='Projects' click={Actions.Projects} />
                    <FooterItem icon='insert-chart' text='Stats' click={Actions.Settings} />
                    <FooterItem icon='settings' text='Settings' click={Actions.Settings} />
                </View>
            </View>
        );
    }
}