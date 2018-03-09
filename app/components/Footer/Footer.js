import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles'
import FooterItem from './FooterItem'

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <FooterItem icon='home' text='Home' />
                    <FooterItem icon='book' text='Projects' />
                    <FooterItem icon='insert-chart' text='Stats' />
                    <FooterItem icon='settings' text='Settings' />
                </View>
            </View>
        );
    }
}