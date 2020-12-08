import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class testPage extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: ""}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton
            buttonColor="rgba(231,76,60,1)"
            onPress={() => { console.log("hi")}}
            />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});