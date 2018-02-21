import React from 'react';
import { Text, View, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native';
import styles from "./styles"
import Buttons from '../../components/Buttons'
import Timer from '../../components/Timer'
import TimerComplete from '../../components/TimerComplete'


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


    onTimerComplete = (time) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ 
            layout: 'complete',
            time: time
        })
        // 1. change layout in state.
        // 2. somehow hide the buttons and display timer component.
    }


    onTimerSave = (time) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ 
            layout: 'index',
            time: 0
        })
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
            if(this.state.layout === 'index'){
               return <Buttons onTimerStart={this.onTimerStart} />
            } else if(this.state.layout === 'timer') {
               return <Timer time={this.state.time} onTimerComplete={this.onTimerComplete} />
            } else if(this.state.layout === 'complete') {
                return <TimerComplete time={this.state.time} onTimerSave={this.onTimerSave} />
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