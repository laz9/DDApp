import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,TouchableHighlight, Button,Dimensions,TextInput, LogBox, Alert,TouchableOpacity  } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import CustomAlertDialog from "./CustomAlertDialog";
import StorageUtil from '../utils/StorageUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';



const USER_1 = {
    name: 'Tom',
    age: 20,
    traits: {
      hair: 'black',
      eyes: 'blue'
    }
  }
  
  const USER_2 = {
    name: 'Sarah',
    age: 21,
    hobby: 'cars',
    traits: {
      eyes: 'green',
    }
  }
//也可以在这里先取出屏幕的宽高
var widthWin = Dimensions.get('window').width;
var heightWin = Dimensions.get('window').Height;
var labelcolor='#777';

var randomSaying = require("../data/randomsaying.json");

var heigthBar=60;

const typeArr = ["平静","开心", "焦虑", "无聊","悲伤","恐惧","生气","激动","期待"];


export default class SetSaying extends Component{
    constructor(props){
        super(props);
        this.state={
            inputText:"",
            mind:"心情",
            type:0,
            showMindPop:false,
        }
    }

    setObjectValue = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@key', jsonValue)
        } catch(e) {
          // save error
        }
      
        console.log('setDone.')
      }

      


    getMyObject = async () => {
        // console.log(1);
        try {
            console.log(2);
            await AsyncStorage.setItem('@MyApp_user', JSON.stringify(USER_1))
            console.log(a);
            // merge USER_2 into saved USER_1
            await AsyncStorage.mergeItem('@MyApp_user', JSON.stringify(USER_2))
            console.log(b);
            // read merged item
            const currentUser = await AsyncStorage.getItem('@MyApp_user')
            console.log(c);
            console.log(currentUser)
        //   console.log(4);
        //   console.log(StorageUtil.get("sayingkey"));
        //   const jsonValue = await AsyncStorage.getItem('@key');
        //   console.log(2);

        //   console.log(JSON.parse(jsonValue));
        //   return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch(e) {
            console.log(3);
          // read error
        }
        console.log('getDone.')
      }

      componentDidMount(){
        //   this.setObjectValue([{"1":"2"}]).then(
        //     this.getMyObject()
        //   );
        //   const sayings=this.getMyObject();
         this.getMyObject();

      }

    _openTypeDialog() {
        this.setState({showMindPop: !this.state.showMindPop})
    }

    onChangeText(text){
        
    }

    render(){
        return (
            <View >
                <View style={styles.barView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={{backgroundColor:""}}><Image style={styles.barImg} 
                            source={require("../../img/back1.png")}  
                        ></Image></View>
                </TouchableOpacity>
                <View><Text style={{fontSize:20}}>我的日签</Text></View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("setsaying")}>
                <View style={{backgroundColor:""}}><Image style={styles.barImg} 
                            source={require("../../img/send1.png")}>  
                        </Image></View>
                </TouchableOpacity>
                </View> 

                <View style={{height:320,width:widthWin,backgroundColor:"#fff", elevation: 2,shadowColor:'#444'}}>
                <View style={{alignItems:"flex-start",marginHorizontal:10}}><Text style={{fontSize:60,color:"#00BFFF"}}>“</Text></View>
                <View style={{height:100,marginHorizontal:10}}>
                <TextInput
                    style={{ borderColor: '#888', borderWidth: 0,fontSize:18 }}
                    placeholder="在此输入日签内容,不可超过50个字"
                    maxLength={50}
                    multiline = {true}
                    onChangeText={(inputText)=>this.setState({inputText})}
                    // onChangeText={(text) => this.setState({text})}
                    value={this.state.inputText}
                    // value="在此输入日签内容"
                />
                </View>
        <View style={{alignItems:"flex-end",marginRight:12}}><Text style={{fontSize:16,color:"#bbb"}}>{this.state.inputText.length}/50</Text></View>
                <View style={{alignItems:"flex-end",marginHorizontal:10,}}><Text style={{fontSize:60,color:"#00BFFF"}}>”</Text></View>
                <View style={{flex:1,flexDirection:"row",marginLeft:10}}>
                {/* <View style={styles.label}><Text style={{fontSize:16,color:labelcolor}}>{this.state.origin}</Text></View> */}
                <TouchableHighlight onPress={() => this._openTypeDialog()} style={styles.label} underlayColor="#a5a5a5"><Text style={{fontSize:16,color:labelcolor}}>#{this.state.mind}</Text></TouchableHighlight>
                

                <CustomAlertDialog entityList={typeArr} callback={(i) => {
                    this.setState({
                            type:i,                        
                            mind: typeArr[i],
                    })
                }} show={this.state.showMindPop} closeModal={(show) => {
                    this.setState({
                        showMindPop: show
                    })
                }}/>

                </View>
                </View>
                

                <View style={{margin:20,alignItems:"center",borderRadius:8}}>
                    <Button style={{  }} title="  随机生成  " onPress={this.randomChange.bind(this)}></Button>
                </View>


                
            </View>
        );
    }
    

    randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };

    randomChange(){
        const randomId=this.randomNum(1,30);
        console.log(randomSaying[randomId].content);
        this.setState({inputText:randomSaying[randomId].content});
        // alert(this.state.inputText);
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