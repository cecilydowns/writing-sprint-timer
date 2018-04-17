import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'

import { connect } from 'react-redux';
import { createProject } from '../../actions'

import { Actions } from 'react-native-router-flux';

import { FormLabel, FormInput, Button } from 'react-native-elements';


class Home extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            genre: '',
            type: ''
        }

    }

    onSubmit = () => {
        this.props.createProject({
            title: this.state.title,
            description: this.state.description
        }, Actions.Projects, Actions.Projects)

        this.setState({ 
            title: '',
            description: '',
            genre: '',
            type: ''
        })
    }





    render() {

        return (
          <View style={styles.container}>

              <Header />

            <View style={styles.projectContainer}>
                <Text>NEW PROJECT PAGE!</Text>

           <FormLabel>Project title</FormLabel>
            <FormInput
                autoCapitalize='none'
                clearButtonMode='while-editing'
                underlineColorAndroid={"#fff"}
                onChangeText={(text) => this.setState({title: text})}
                value={this.state.title}/>

            <FormLabel>Description</FormLabel>
            <FormInput
                autoCapitalize='none'
                clearButtonMode='while-editing'
                underlineColorAndroid={"#fff"}
                onChangeText={(text) => this.setState({description: text})}
                value={this.state.description}/>

            <FormLabel>Genre</FormLabel>
            <FormInput
                autoCapitalize='none'
                clearButtonMode='while-editing'
                underlineColorAndroid={"#fff"}
                onChangeText={(text) => this.setState({genre: text})}
                value={this.state.genre}/>

            <FormLabel>Type</FormLabel>
            <FormInput
                autoCapitalize='none'
                clearButtonMode='while-editing'
                underlineColorAndroid={"#fff"}
                onChangeText={(text) => this.setState({type: text})}
                value={this.state.type}/>


            <Button title="SUBMIT" onPress={this.onSubmit} />

            </View>

              <Footer />

          </View>
        );
    }
}



export default connect(null, { createProject })(Home)