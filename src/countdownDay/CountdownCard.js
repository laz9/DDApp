import React, { Component } from 'react';
import { Text, View ,Button,TouchableOpacity,Image,ImageBackground} from 'react-native';


export default class CountdownCard extends Component  {
    constructor(){
      super();
      this.state={
       
      };
    }

    render(){
        return (
            <View style={{justifyContent:"space-between",flex:1}}>
                {/* 顶部返回 */}
                <View>
                <TouchableOpacity 
                      style={{justifyContent:"flex-end",marginLeft:30,height:45,marginTop:40}}
                      onPress={() => this.props.navigation.goBack()}>
                     <View style={{backgroundColor:""}}><Image style={{width:30,height:30}} 
                            source={require("../../img/返回.png")}  
                        ></Image></View>
                    </TouchableOpacity>
                </View>
                {/* 卡片 */}
{/* backgroundColor:"#6495ED" */}
                <View style={{flex:1,alignItems:"center",height:630,borderRadius:24}}> 
                <ImageBackground 
                    source={require("../../img/bluebg2.jpg")} 
                    style={{width:330,flex:1,justifyContent:"space-between",marginTop:30,borderRadius:20,elevation:8}}
                    imageStyle={{borderRadius:20}}
                    >
                        <View style={{margin:20,marginTop:40}}>
                        <Text style={{color:"#fff",fontSize:20,fontWeight:"bold"}}>志愿活动</Text>
                        <Text style={{color:"#AFEEEE",fontSize:12}}>2020/12/11 周五</Text>
                    </View>

                    <View style={{marginLeft:36,flexDirection:"row"}}>
                        <View style={{height:100,justifyContent:"flex-end",alignItems:"center"}}>
                        <Text style={{fontSize:80,fontWeight:"bold",color:"#fff"}}>3</Text></View>
                        <View style={{height:80,justifyContent:"flex-end"}}>
                        <Text style={{fontSize:18,color:"#fff"}}>天后</Text></View>
                    </View>
                    
                    <View style={{height:260}}></View>

                    <View style={{alignItems:"flex-end"}}>
                        <View style={{
                            width:160,height:40,marginBottom:10,marginRight:10,
                            alignItems:"center",justifyContent:"center",flexDirection:"row",
                            borderRadius:40,backgroundColor:"#B0E0E6"
                            
                            }}>
                            <Image 
                                source={require("../../img/闹钟.png")}
                                style={{width:16,height:16}}
                            ></Image>
                            <Text style={{color:"#fff"}}> 启用闹钟提醒</Text>
                        </View>
                    </View>
                </ImageBackground>     
                
                {/* <View style={{width:330,flex:1,justifyContent:"space-between",marginTop:30,height:630,borderRadius:24,backgroundColor:"#6495ED",elevation:8}}>
                    <View style={{margin:20,marginTop:40}}>
                        <Text style={{color:"#fff",fontSize:20,fontWeight:"bold"}}>志愿活动</Text>
                        <Text style={{color:"#B0C4DE",fontSize:12}}>2020/12/11 周五</Text>
                    </View>

                    <View style={{marginLeft:36,flexDirection:"row"}}>
                        <View style={{height:100,justifyContent:"flex-end",alignItems:"center"}}>
                        <Text style={{fontSize:80,fontWeight:"bold",color:"#fff"}}>3</Text></View>
                        <View style={{height:80,justifyContent:"flex-end"}}>
                        <Text style={{fontSize:18,color:"#fff"}}>天后</Text></View>
                    </View>
                    
                    <View style={{height:260}}></View>

                    <View style={{alignItems:"flex-end"}}>
                        <View style={{
                            width:160,height:40,marginBottom:10,marginRight:10,
                            alignItems:"center",justifyContent:"center",flexDirection:"row",
                            borderRadius:40,backgroundColor:"#B0C4DE"
                            
                            }}>
                            <Image 
                                source={require("../../img/闹钟.png")}
                                style={{width:16,height:16}}
                            ></Image>
                            <Text style={{color:"#fff"}}> 启用闹钟提醒</Text>
                        </View>
                    </View>
                                     
                </View> */}
                </View >

                {/* 编辑和删除按钮 */}
                <View style={{flexDirection:"row",justifyContent:"space-evenly",marginVertical:15}}>
                    <View style={{backgroundColor:"#fff",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:40,width:48,height:48}}>
                    <Image
                        source={require("../../img/编辑.png")}
                        style={{width:20,height:20}}
                    ></Image></View>
                     <View style={{backgroundColor:"#fff",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:40,width:48,height:48}}>
                    <Image
                        source={require("../../img/删除card.png")}
                        style={{width:20,height:20}}
                    ></Image></View>
                    
                </View>
               
            </View>
        );
    }}