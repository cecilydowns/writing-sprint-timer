import { StyleSheet } from 'react-native';

import { color, fontFamily, padding, fontSize } from "../../styles/theme"

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'lightgrey',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemContainer: {
        flex: 1
    },
    itemText: {
        textAlign: 'center'
    }
    

});


export default styles;