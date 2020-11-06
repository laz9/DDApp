import React, { Component } from 'react';
import { Text, View,StyleSheet,Image, Button,Dimensions,TextInput, LogBox, Alert } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


//也可以在这里先取出屏幕的宽高
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').Height;
var labelcolor='#777';


export default class setSaying extends Component{
    constructor(props){
        super(props);
        this.state={
            inputText:"",
            origin:"出处",
            mind:"#心情"
        }
    }

    onChangeText(text){
        
    }

    render(){
        return (
            <View >
                <View style={{height:320,width:windowWidth,backgroundColor:"#fff", elevation: 2,shadowColor:'#444'}}>
                <View style={{alignItems:"flex-start",marginHorizontal:10}}><Text style={{fontSize:60,color:"#00BFFF"}}>“</Text></View>
                <View style={{height:100}}>
                <TextInput
                    style={{ borderColor: '#888', borderWidth: 0,fontSize:18 }}
                    placeholder="在此输入日签内容,不可超过50个字"
                    maxLength={50}
                    multiline = {true}
                    onChangeText={(inputText)=>this.setState({inputText})}
                    // onChangeText={(text) => this.setState({text})}
                    // value={this.state.inputText}
                    // value="在此输入日签内容"
                />
                </View>
        <View style={{alignItems:"flex-end",marginRight:12}}><Text style={{fontSize:16,color:"#bbb"}}>{this.state.inputText.length}/50</Text></View>
                <View style={{alignItems:"flex-end",marginHorizontal:10,}}><Text style={{fontSize:60,color:"#00BFFF"}}>”</Text></View>
                <View style={{flex:1,flexDirection:"row",marginLeft:10}}>
                {/* <View style={styles.label}><Text style={{fontSize:16,color:labelcolor}}>{this.state.origin}</Text></View> */}
                <View style={styles.label}><Text style={{fontSize:16,color:labelcolor}}>{this.state.mind}</Text></View>
                </View>
                </View>
                

                <View style={{margin:20,alignItems:"center",borderRadius:8}}>
                    <Button style={{  }} title="  随机生成  " onPress={this.logs.bind(this)}></Button>
                </View>


                
            </View>
        );
    }
    logs(){
        alert("您输入的内容是"+this.state.inputText);
    }

}




const styles=StyleSheet.create({
    label:{
        height:30,
        marginHorizontal:10,
        marginTop:-20,
        width:75,
        alignItems:"center",
        justifyContent:"center",
        // backgroundColor:"red",
        borderWidth:1,
        borderRadius:5,
        borderColor:labelcolor,
        
    }
});