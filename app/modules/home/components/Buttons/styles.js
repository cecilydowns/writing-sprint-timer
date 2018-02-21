import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    timeButton:{
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'white',
        marginVertical: 5,
    },

    timeNumber: {
        fontSize: 30,
        marginBottom: -5
    },

    timeText: {
        color: '#666'
    }

});

export default styles;