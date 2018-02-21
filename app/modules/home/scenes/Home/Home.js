import React from 'react';
import { Text, View, TouchableOpacity, Platform, UIManager } from 'react-native';
import styles from "./styles"
import { Actions } from 'react-native-router-flux'
import Buttons from '../../components/Buttons'

class Home extends React.Component {

    constructor(){
        super()

        this.state = {
            layout: 'index'
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    // so, I need one layout for 'index,'
    // one layout for 'timer in progress',
    // and one for 'timer completed.'
    
    onTimerStart = (time) => {
        this.setState({ layout: 'timer' })
        // 1. change layout in state.
        // 2. somehow hide the buttons and display timer component.
    }

    render() {

        const topContainerHeight = () => {
            if(this.state.layout === 'index'){
                return { flex: 1, }
            } else if(this.state.layout === 'timer') {
                return { flex: 3, }
            } else if(this.state.layout === 'complete'){
                return { height: 100, }
            }
        }


        return (
          <View style={styles.container}>
              <View style={[styles.topContainer, topContainerHeight()]}>

                <Buttons onTimerStart={this.onTimerStart} />

              </View>


              <View style={styles.bottomContainer}>
                <Text>Some encouragement about writing every day,
                    or activity stats.
                </Text>
              </View>
          </View>
        );
    }
}


export default Home