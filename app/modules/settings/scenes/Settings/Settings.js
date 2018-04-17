import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation
} from "react-native";
import styles from "./styles";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

import { connect } from "react-redux";

import { updateSettings } from "../../actions.js";

import { Actions } from "react-native-router-flux";
import { FormLabel, FormInput, Text, Button } from "react-native-elements";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length1: this.props.settings.length1.toString(),
      length2: this.props.settings.length2.toString(),
      length3: this.props.settings.length3.toString(),
      length4: this.props.settings.length4.toString(),
      length5: this.props.settings.length5.toString()
    };
  }

  onSave = () => {
    this.props.updateSettings(this.state, Actions.Main, Actions.Main);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />

        <ScrollView style={styles.main}>
          <Text h3>Enter time in minutes</Text>

          <FormLabel>Timer Preset #1</FormLabel>
          <FormInput
            onChangeText={length1 => this.setState({ length1 })}
            value={this.state.length1}
          />

          <FormLabel>Timer Preset #2</FormLabel>
          <FormInput
            onChangeText={length2 => this.setState({ length2 })}
            value={this.state.length2}
          />

          <FormLabel>Timer Preset #3</FormLabel>
          <FormInput
            onChangeText={length3 => this.setState({ length3 })}
            value={this.state.length3}
          />

          <FormLabel>Timer Preset #4</FormLabel>
          <FormInput
            onChangeText={length4 => this.setState({ length4 })}
            value={this.state.length4}
          />

          <FormLabel>Timer Preset #5</FormLabel>
          <FormInput
            onChangeText={length5 => this.setState({ length5 })}
            value={this.state.length5}
          />

          <Button title="Save" onPress={this.onSave} />
        </ScrollView>

        <Footer />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { settings: state.authReducer.user };
};

export default connect(mapStateToProps, { updateSettings })(Settings);
