import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,TouchableHighlight, Button,Dimensions } from 'react-native';
import showSayingList from '../sayings/ShowSayingList'
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class DiaryScreen extends Component  {
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
    }
  }
    render(){
        return (
            <View
              style={{
                flex: 1,
                justifyContent:"space-between",
                alignItems: "center",
                backgroundColor:"#fff"
              }}>
              <View style={{backgroundColor:"#fff",height:120,justifyContent:"center",alignItems:"center",width:Dimensions.get("window").width}}>
                  <Image style={{width:80,height:80,marginTop:40}} source={require('../../img/signinouttop2.png')}></Image>
              </View>
              <View style={{alignItems:"center",justifyContent:"flex-start",backgroundColor:"#fff",height:320}}>
                <TextInput
                    style={{ backgroundColor:"#f5f5f5", width:300,borderRadius:5,marginBottom:20, borderWidth: 0,fontSize:18 }}
                    placeholder="输入用户名"
                    onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                    secureTextEntry={true} 
                    style={{ backgroundColor:"#f5f5f5", width:300,borderRadius:5, borderWidth: 0,fontSize:18 }}
                    placeholder="输入密码"
                    onChangeText={(password) => this.setState({password})}
                />
                <TouchableOpacity style={{backgroundColor:"#00BFFF",width:200,height:50,borderRadius:10,marginTop:50,justifyContent:"center",alignItems:"center"}}
                  onPress={
                    ()=>{

                    }
                  }
                >
                    <Text style={{color:"#fff",fontSize:18}}>注册</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
                    <TouchableWithoutFeedback
                    onPress={()=>this.props.navigation.navigate("login")}>
                    <Text style={{color:"",borderBottomWidth:1}}>已有账号</Text>
                    </TouchableWithoutFeedback>
                    {/* <View style={{marginHorizontal:30}}><Text style={{}}>|</Text></View>
                    <TouchableWithoutFeedback
                    onPress={()=>this.props.navigation.navigate("register")}>
                        <Text>用户注册</Text>
                    </TouchableWithoutFeedback> */}

                </View>

              </View>
              <View>
              <Image style={{}} source={require('../../img/signinoutbottom2.png')}></Image>
              </View>
            </View>
          );
    }
    
  }
