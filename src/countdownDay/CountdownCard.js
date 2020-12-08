import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';


export default class CountdownCard extends Component  {
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
                <View style={{width:360,justifyContent:"space-between" ,height:700,borderRadius:30,backgroundColor:"#6495ED",elevation:8,margin:20}}>
                    <View>
                        <Text style={{color:"#fff",fontSize:30,fontWeight:"bold"}}></Text>
                        <Text style={{color:"#B0C4DE",fontSize:15}}>2020/12/11 周五</Text>
                    </View>

                    <View>
                        <Text style={{fontSize:50,color:"#fff"}}>3</Text>
                        <Text style={{fontSize:18,color:"#fff"}}>天后</Text>
                    </View>

                    <View>
                        
                    </View>
                    
                    
                </View>
                {/* 编辑和删除按钮 */}
                <View>
                    
                </View>
               
            </View>
        );
    }}