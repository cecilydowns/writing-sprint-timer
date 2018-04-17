import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles"
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'

import { connect } from 'react-redux';
import { getProjects } from '../../actions'

import { Actions } from 'react-native-router-flux';


class Home extends React.Component {

    constructor(props){
        super(props)

    }

    // componentDidMount = () => {
    //     this.props.getProjects()
    // }

    render() {

        return (
          <View style={styles.container}>

              <Header />

            <View style={styles.projectContainer}>
                <Text>So I probably want to list projects and have a link to a 'new project' page??</Text>
                <Button title="New" onPress={Actions.NewProject} />
                <Text>Here are the current projects...</Text>
            </View>

              <Footer />

          </View>
        );
    }
}


export default connect(null, { getProjects })(Home)