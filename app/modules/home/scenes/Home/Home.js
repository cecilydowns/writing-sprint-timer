import React from 'react';
import { Text, View, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native';
import styles from "./styles"
import Buttons from '../../components/Buttons'

class Home extends React.Component {

    constructor(){
        super()

        this.state = {
            layout: 'index',
            time: 0
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    // so, I need one layout for 'index,'
    // one layout for 'timer in progress',
    // and one for 'timer completed.'
    
    onTimerStart = (time) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ 
            layout: 'timer',
            time: time
        })
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

        const timerArea = () => {
            if(this.state.time === 0){
               return <Buttons onTimerStart={this.onTimerStart} />
            } else {
               return <Text>A great timer is in place!!!! {this.state.time}</Text>
            }
        }


        return (
          <View style={styles.container}>
              <View style={[styles.topContainer, topContainerHeight()]}>
                {timerArea()}
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