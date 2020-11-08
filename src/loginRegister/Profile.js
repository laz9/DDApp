import React, { Component } from 'react';
import { Text, View,Dimensions,Image,TouchableWithoutFeedback } from 'react-native';


export default class Profile extends Component  {
    render(){
        return (
            <View
              style={{
                flex: 1,
                justifyContent:"flex-start",
                alignItems: "center"
                
              }}>
              

              <View style={{backgroundColor:"#fff",width:Dimensions.get("window").width,alignItems:"center"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", width:350,height:60,borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Text>昵称</Text><Image style={{width:16,height:16}} source={require('../../img/inright.png')}></Image>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", width:350,height:60,borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Text>生日</Text><Image style={{width:16,height:16}} source={require('../../img/inright.png')}></Image>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", width:350,height:60,borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Text>性别</Text><Image style={{width:16,height:16}} source={require('../../img/inright.png')}></Image>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", width:350,height:60,borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Text>简介</Text><Image style={{width:16,height:16}} source={require('../../img/inright.png')}></Image>
                </View>
                <TouchableWithoutFeedback
                    onPress={()=>{
                    this.props.route.params.refresh();
                    this.props.navigation.navigate('mine')
                  }}    

                >
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", width:350,height:60}}>
                    <Text style={{color:"#DC143C",fontSize:20}}>退出登录</Text>
                </View>
                </TouchableWithoutFeedback>
                <View></View>
                <View></View>
                
              </View>
            </View>
          );
    }
    
  }
