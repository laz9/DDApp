import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';


export default class StatisticScreen extends Component  {
    constructor(){
      super();
      this.state={
       
      };
    }

    render(){
        return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Text>统计页</Text>
              <Button title="跳转" onPress={()=>this.props.navigation.navigate("test")}></Button>
            </View>
          );
    }
    
  }
