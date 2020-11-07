import React, { Component } from 'react';
import { Text, View,Image, Button } from 'react-native';


export default class DiaryScreen extends Component  {
    render(){
        return (
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                // alignItems: "center"
              }}>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:15}}>
                <View><Text style={{fontSize:30}}>日记</Text></View>
                <View style={{flexDirection:'row'}}>
                <View><Image style={{width:30,height:30,marginRight:10}} source={require('../../img/diarysetting.png')}></Image></View>
                <View><Image style={{width:30,height:30}} source={require('../../img/diarysearch.png')}></Image></View>
                </View>

              </View>
              <View></View>
              <View style={{alignItems:"center"}}>
                <View style={{backgroundColor:'#fff', width:360,alignItems:"center",borderLeftColor:"#00bfff",borderRightColor:"#00bfff",borderLeftWidth:1,borderRightWidth:1}}>
                  {/* 顶部日期和按钮区域 */}
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{}}>
                      <Text>10/10月</Text>
                      <Text>星期日</Text>
                    </View>
                    <View style={{}}><Button title="    记录一下吧    "></Button></View>
                    <View></View>
                  </View>
                  {/* 时间轴区域 */}
                  <View style={{marginTop:20}}>
                  <View><Text style={{fontSize:22}}>12:34  |  去吃饭</Text></View>
                  <View><Text style={{fontSize:22}}>12:34  |  去吃饭</Text></View>
                  <View><Text style={{fontSize:22}}>12:34  |  去吃饭</Text></View>
                  <View><Text style={{fontSize:22}}>12:34  |  去吃饭</Text></View>
                  <View><Text style={{fontSize:22}}>12:34  |  去吃饭</Text></View>
                  </View>
                </View>

                

              </View>
            </View>
          );
    }
    
  }
