import React, {Component} from 'react';
import {
  StyleSheet, 
  View
} from 'react-native';

import { HcdWaveView } from '../utils/HcdWaveView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HcdWaveView
          surfaceWidth = {230} 
          surfaceHeigth ={230}
          powerPercent = {80}
          type="dc"
          style = {{backgroundColor:'#FF7800'}}></HcdWaveView>
        {/* <HcdWaveView
          surfaceWidth = {230} 
          surfaceHeigth ={230}
          powerPercent = {10}
          type="ac"
          style = {{backgroundColor:'#FF7800'}}></HcdWaveView> */}
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



// import React, { Component } from 'react';
// import { Text, View ,Button} from 'react-native';


// export default class LifePowerPage extends Component  {
//     constructor(){
//       super();
//       this.state={
       
//       };
//     }

//     render(){
//         return (
//             <View style={{justifyContent:"space-around",flex:1}}>
//                 <Text>习惯页</Text>
               
//             </View>
//         );
//     }}