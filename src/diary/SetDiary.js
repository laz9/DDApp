import React, { Component } from 'react';
import { Text, View ,Button,TextInput,StyleSheet,TouchableOpacity,Image,Dimensions,KeyboardAvoidingView} from 'react-native';

var widthWin = Dimensions.get('window').width;
var heightWin = Dimensions.get('window').Height;
var contentheight=heightWin-80;

var date = new Date();
var nowyear = date.getFullYear().toString();
var nowmonth = (date.getMonth()+1).toString();
var nowday = date.getDate().toString();

export default class SetDiary extends Component  {
    constructor(){
      super();
      this.state={
        inputText:""
       
      };
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:"space-between",backgroundColor:"#fff"}}>
                {/* 标题导航栏 */}
                <View style={styles.barView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={{backgroundColor:""}}><Image style={styles.barImg} 
                            source={require("../../img/back1.png")}  
                        ></Image></View>
                </TouchableOpacity>
                <View><Text style={{fontSize:15,}}>{nowyear}年{nowmonth}月{nowday}日</Text></View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("setsaying")}>
                <View style={{backgroundColor:""}}> 
                <TouchableOpacity
                onPress={() =>this.props.navigation.navigate("diary")}
                style={{marginRight:15,backgroundColor:"#00bfff",height:28,width:55,borderRadius:15,alignItems:"center",justifyContent:"center"}}
                >
                    <Text style={{color:"#fff"}}>完成</Text>

               </TouchableOpacity></View>
                </TouchableOpacity>
                </View> 
                
                <View style={{height:560,marginLeft:12}}>
                <TextInput
                    style={{ borderColor: '#888', borderWidth: 0,fontSize:18 }}
                    placeholder="写点什么吧..."
                    maxLength={50}
                    multiline = {true}
                    onChangeText={(inputText)=>this.setState({inputText})}
                    // onChangeText={(text) => this.setState({text})}
                    value={this.state.inputText}
                    // value="在此输入日签内容"
                />
                </View>
                <KeyboardAvoidingView ref={'KeyboardAvoidingView'}
                                      behavior={'position'}
                                      keyboardVerticalOffset={20}
                                     >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row",margin:10,borderWidth:1,borderRadius:20,borderColor:"#00bfff",padding:5}}>
                        <Image style={{width:20,height:20}} source={require('../../img/定位.png')}></Image>
                        <Text numberOfLines={1} style={{width:100,color:"#00bfff"}}>杭州电子科技大学</Text>
                    </View>
                    
                    <View style={{justifyContent:"center",marginRight:15}}>
                        <Text style={{fontSize:16,color:"gray"}}>0/20字</Text>
                    </View>
                </View>
                </KeyboardAvoidingView>
              
            </View>
        );
    }}


    const styles=StyleSheet.create({
        
        barView:{
            flexDirection:"row",
            backgroundColor:"white",
            height:60,
            width:widthWin,
            alignItems:"center",
            justifyContent:"space-between",
            elevation: 3,      
        },
        barImg:{
            width:25,
            height:25,
            marginHorizontal:20,
    
        }
    });   