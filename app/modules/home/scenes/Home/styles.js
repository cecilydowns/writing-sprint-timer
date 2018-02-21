import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const {padding, color, fontSize, fontFamily } = theme;


const styles = StyleSheet.create({
    container:{
        flex:1
    },

    topContainer:{
        flex:1,
        paddingHorizontal:25,
        paddingVertical:35,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection: 'row',
        flexWrap: 'wrap',        
        backgroundColor: "#FF553F",
    },

    bottomContainer:{
        flex: 1,
        backgroundColor:"white",
        padding: padding * 3,
        shadowColor: "#000000",
        justifyContent:"center",
        alignItems:"center",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
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