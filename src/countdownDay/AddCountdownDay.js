import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from "react-native";
import React, { Component } from 'react';
import { color } from "react-native-reanimated";

const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };

export default class CountdownCard extends Component  {
    constructor(){
      super();
      this.state={
       title:"",
       textInputBorderColor:"#fff",
      };
    }

    render(){
        return (
            <View style={styles.container}>
              {/* 标题栏 */}
                <View style={{flexDirection:"row",justifyContent:"space-between"}}> 
                <TouchableOpacity 
                      style={{justifyContent:"flex-end",marginLeft:20,height:45,marginTop:20}}
                      onPress={() => this.props.navigation.goBack()}>
                     <View style={{backgroundColor:""}}><Image style={{width:24,height:24}} 
                            source={require("../../img/错.png")}  
                        ></Image></View>
                    </TouchableOpacity>
                  <View style={{justifyContent:"flex-end"}}>
                    <Text style={{fontSize:20,fontWeight:"900"}}>创建倒数日</Text>
                  </View>

                <TouchableOpacity 
                  style={{justifyContent:"flex-end",height:45,marginTop:20,marginRight:20}}
                  onPress={() => this.props.navigation.goBack()}>
                  <View style={{backgroundColor:""}}><Image style={{width:24,height:24}} 
                        source={require("../../img/对.png")}  
                    ></Image></View>
                </TouchableOpacity>

                </View>
              {/* 创建内容 */}
                <View>
                  {/* 标题输入框 */}
                  <View style={{justifyContent:"center",alignItems:"center",marginVertical:20}}>
                  <TextInput
                    style={{ backgroundColor:"#eee", width:360,borderRadius:12,borderColor:this.state.textInputBorderColor,borderWidth:2,fontSize:18 }}
                    placeholder="请输入倒数内容"
                    // selectionColor={"#000"} 没效果
                    onFocus={()=>this.setState({textInputBorderColor:"#6495ED"})}
                    onBlur={()=>this.setState({textInputWidth:"#fff"})}
                    onChangeText={(title) => this.setState({title})}

                />
                  </View>
                  {/* 时间和重复选择 */}
                  <View>
                    {/* 设置时间 */}
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20}}>
                      {/* 左边 */}
                        <View>
                          <Text style={{fontSize:18}}>时间</Text>
                        </View>
                        {/* 右边 */}
                        <View style={{flexDirection:"row"}}>
                          <View style={{backgroundColor:"",justifyContent:"center"}}>
                            <Text style={{fontSize:16,color:"#888"}}>2020年12月09日</Text>
                          </View>
                          <View style={{justifyContent:"center",backgroundColor:""}}>
                          <Image style={{width:28,height:28}} 
                              source={require("../../img/右.png")}  
                          ></Image>
                          </View>
                        </View>
                    </TouchableOpacity>

                    {/* 设置是否重复 */}
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:30}}>
                      {/* 左边 */}
                        <View>
                          <Text style={{fontSize:18}}>重复</Text>
                        </View>
                        {/* 右边 */}
                        <View style={{flexDirection:"row"}}>
                          <View style={{backgroundColor:"",justifyContent:"center"}}>
                            <Text style={{fontSize:16,color:"#888"}}>仅一次</Text>
                          </View>
                          <View style={{justifyContent:"center",backgroundColor:""}}>
                          <Image style={{width:28,height:28}} 
                              source={require("../../img/右.png")}  
                          ></Image>
                          </View>
                        </View>
                    </TouchableOpacity>

                  </View>

                  {/* 横线分割 */}
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <View style={{borderBottomWidth:0.6,width:350,height:1,borderBottomColor:"#eee"}}></View>
                  </View>

                  {/* 设置提醒区 */}
                  <View>
                    {/* 设置提醒时间 */}
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:30}}>
                      {/* 左边 */}
                        <View>
                          <Text style={{fontSize:18}}>提醒</Text>
                        </View>
                        {/* 右边 */}
                        <View style={{flexDirection:"row"}}>
                          <View style={{backgroundColor:"",justifyContent:"center"}}>
                            <Text style={{fontSize:16,color:"#888"}}>当天上午8点</Text>
                          </View>
                          <View style={{justifyContent:"center",backgroundColor:""}}>
                          <Image style={{width:28,height:28}} 
                              source={require("../../img/右.png")}  
                          ></Image>
                          </View>
                        </View>
                    </TouchableOpacity>
                      {/* 设置闹钟提醒 */}
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20}}>
                      {/* 左边 */}
                        <View>
                          <Text style={{fontSize:18}}>闹钟提醒</Text>
                        </View>
                        {/* 右边 */}
                        <View style={{flexDirection:"row"}}>
                          <View style={{backgroundColor:"",justifyContent:"center"}}>
                            <Text style={{fontSize:16,color:"#888"}}>2020年12月09日</Text>
                          </View>
                          <View style={{justifyContent:"center",backgroundColor:""}}>
                          <Image style={{width:28,height:28}} 
                              source={require("../../img/右.png")}  
                          ></Image>
                          </View>
                        </View>
                    </TouchableOpacity>

                  </View>

                </View>
            </View>
        );
    
    }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#fff"
  },
  
});

