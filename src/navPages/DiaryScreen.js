import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class DiaryScreen extends Component  {
    render(){
        return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Text>日记页</Text>
            </View>
          );
    }
    
  }
