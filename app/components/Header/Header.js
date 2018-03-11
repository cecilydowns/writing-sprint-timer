import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

class Header extends React.Component {

    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.siteTitle}>Sprinter</Text>
            </View>
        );
    }
}


export default Header