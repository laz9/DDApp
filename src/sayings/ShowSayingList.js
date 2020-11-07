import React, { Component } from 'react';
import {FlatList, Text, View,StyleSheet,Image, Button,Dimensions } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import SetSaying from './SetSaying';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';


var sayings = require("../data/sayings.json");

var widthWin=Dimensions.get("window").width;
var heightWin=Dimensions.get("window").height;
var heigthBar=60;






export default class ShowSayingList extends Component{

    
    constructor(props){
        super(props);
    }
   
    


   render(){
        return (
            <View style={{flex:1,justifyContent:"space-between",alignItems:'center',flexDirection:'column'}}>   
            <View style={styles.barView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={{backgroundColor:""}}><Image style={styles.barImg} 
                            source={require("../../img/back1.png")}  
                        ></Image></View>
                </TouchableOpacity>
                <View><Text style={{fontSize:20}}>我的日签</Text></View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("setsaying")}>
                <View style={{backgroundColor:""}}><Image style={styles.barImg} 
                            source={require("../../img/add1.png")}  
                        ></Image></View>
                </TouchableOpacity>
            </View>         
            <FlatList
            // data={[{key: 'a'}, {key: 'b'}]}
                data={sayings}
                renderItem={this._renderItem}/>
                
        
            </View>
        );

   };

   

   _renderItem=({item})=>{
       return (
        <View style={styles.sayingItem}>
         <View style={{margin:15}}><Text style={{color:"gray"}}>{item.time}</Text></View>
         <View style={{marginHorizontal:10, height:50}}><Text style={{fontSize:16}}>{item.content}</Text></View>
         <View><Text>{item.author}</Text></View>
         <View style={{flex:1,alignItems:"flex-end",marginHorizontal:10}}><Text style={{color:"gray"}}>{item.mood}</Text></View>
        </View>
       );
   }

};



const styles=StyleSheet.create({
    sayingItem: {
        flex:1,
        flexDirection: 'column',
        width:360,
        height:140,
        margin:10,
        borderRadius:10,
        backgroundColor:'#FcFAF0',
        elevation:5
      },
    barView:{
        flexDirection:"row",
        backgroundColor:"white",
        height:heigthBar,
        width:widthWin,
        alignItems:"center",
        justifyContent:"space-between",
        elevation: 3,      
    },
    barImg:{
        width:30,
        height:30,
        marginHorizontal:20,

    }
});