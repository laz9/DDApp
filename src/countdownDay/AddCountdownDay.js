
import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';


export default class AddCountdownDay extends Component  {
    constructor(){
      super();
      this.state={
       
      };
    }

    render(){
        return (
            <View style={{justifyContent:"space-around",flex:1}}>
                {/* 顶部返回 */}
                <View>
                <TouchableOpacity 
                      style={{justifyContent:"flex-end",marginRight:10,height:45}}
                      onPress={() => this.props.navigation.goBack()}>
                     <View style={{backgroundColor:""}}><Image style={{width:30,height:30}} 
                            source={require("../../img/返回.png")}  
                        ></Image></View>
                    </TouchableOpacity>
                </View>
                {/* 卡片 */}
                <View>
                    
                </View>
                {/* 编辑和删除按钮 */}
                <View>
                    
                </View>
               
            </View>
        );
    }}