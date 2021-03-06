import React from 'react';
import { StyleSheet, View } from "react-native";
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';

//Splash Component
import Splash from '../components/Splash/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome';
import Register from '../modules/auth/scenes/Register';
import Login from '../modules/auth/scenes/Login';
import ForgotPassword from '../modules/auth/scenes/ForgotPassword';

// Home scenes
import Home from '../modules/home/scenes/Home';
import Settings from '../modules/settings/scenes/Settings'
import Projects from '../modules/projects/scenes/Home'
import NewProject from '../modules/projects/scenes/New'

//Import Store, actions
import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";

import { fontFamily, normalize } from "../styles/theme";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({isReady: true, isLoggedIn});
        }));
    }

    render() {
        if (!this.state.isReady)
            return <Splash/>

        return (
            <Router>
                <Scene key="root" hideNavBar
                       navigationBarStyle={styles.navBar}
                       titleStyle={styles.title}
                       backButtonTintColor={"rgba(0,0,0,.84)"}>
                    <Stack key="Auth" initial={!this.state.isLoggedIn}>
                        <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
                        <Scene key="Register" component={Register} title="" back/>
                        {/* <Scene key="CompleteProfile" component={CompleteProfile} title="Select Username"
                                   back={false}/> */}
                        <Scene key="Login" component={Login} title="Login"/>
                        <Scene key="ForgotPassword" component={ForgotPassword} title="ForgotPassword"/>
                    </Stack>

                    <Stack key="Main" initial={this.state.isLoggedIn} hideNavBar>
                        <Scene key="Home" component={Home} title="Home" initial={true} type={ActionConst.REPLACE}/>
                        <Scene key="Settings" component={Settings} title="Settings" />
                        <Scene key="Projects" component={Projects} title="Projects" />
                        <Scene key="NewProject" component={NewProject} title="NewProject" />
                    </Stack>



                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    navBar:{
        backgroundColor:"#fff",
        borderBottomWidth:0
    },

    title:{
        fontSize: normalize(16),
        lineHeight: normalize(19),
        fontFamily: fontFamily.bold,
        color: "rgba(0,0,0,.84)"
    }
});
