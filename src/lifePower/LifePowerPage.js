import React, {Component} from 'react';
import {
  StyleSheet, 
  View
} from 'react-native';

import { HcdWaveView } from '../utils/HcdWaveView'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HcdWaveView
          surfaceWidth = {230} 
          surfaceHeigth ={230}
          powerPercent = {76}
          type="dc"
          style = {{backgroundColor:'#FF7800'}}></HcdWaveView>


  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});


