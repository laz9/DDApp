import React, { Component } from 'react';
import { Text, View,Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class DiaryScreen extends Component  {
    render(){
        return (
            <View
              style={{
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
              
              
              <View style={{alignItems:"center"}}>
                
                <View style={{backgroundColor:'#fff', width:360,borderRadius:15}}>
                  
                  {/* 顶部日期和按钮区域 */}
                  <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:12}}>
                    <View style={{flex:1,marginLeft:10}}>
                      {/* 日期和月份的样式，为了营造一大一小并错位的感觉 */}
                      <View style={{flexDirection:"row"}}>
                        <View>
                        <Text style={{fontSize:26,fontWeight:"bold"}}>10</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:10}}>  </Text><Text style={{fontSize:15,fontWeight:"bold"}}>/11月</Text>
                        </View>
                        {/* <Text>/11月</Text> */}
                      </View>
                      <View style={{marginLeft:15}}><Text>星期二</Text></View>
                    </View>
                    <View style={{flex:2,justifyContent:"center"}}>
                      <TouchableOpacity 
                        style={{borderWidth:2,width:180,height:40,borderColor:"#00bfff",borderRadius:8,alignItems:"center",justifyContent:"center"}}
                      >
                        <Text style={{color:"#00bfff",fontSize:18}}>记录一下吧~</Text>
                      </TouchableOpacity></View>
                    <View style={{flex:1}}></View>
                  </View>
                  {/* 时间轴区域 */}
                  <View style={{marginTop:20}}>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>08：04</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>去食堂吃早饭</Text>
                  </View>
                  <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>09：59</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>要上课了</Text>
                  </View>
                  <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>16：12</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>阳光长跑</Text>
                  </View>
                  <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>18：01</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>做PPT</Text>
                  </View>
                  <View style={{marginBottom:20}}></View>
                  </View>
                </View>
            
              </View>



              <View style={{alignItems:"center",marginTop:20}}>
                
                <View style={{backgroundColor:'#fff', width:360,borderRadius:15}}>
                  
                  {/* 顶部日期和按钮区域 */}
                  <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:12}}>
                    <View style={{flex:1,marginLeft:10}}>
                      {/* 日期和月份的样式，为了营造一大一小并错位的感觉 */}
                      <View style={{flexDirection:"row"}}>
                        <View>
                        <Text style={{fontSize:26,fontWeight:"bold"}}>08</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:10}}>  </Text><Text style={{fontSize:15,fontWeight:"bold"}}>/11月</Text>
                        </View>
                        {/* <Text>/11月</Text> */}
                      </View>
                      <View style={{marginLeft:15}}><Text>星期日</Text></View>
                    </View>
                    
                    {/* <View style={{flex:1}}></View> */}
                  </View>
                  {/* 时间轴区域 */}
                  <View style={{marginTop:20}}>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>07：04</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>起床</Text>
                  </View>
                  <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>08：12</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>去了图书馆</Text>
                  </View>
                  {/* <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:18,marginLeft:30,color:"gray"}}>12:34</Text>
                    <Text style={{fontSize:20,marginLeft:30}}>吃饭</Text>
                  </View>
                  <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:18,marginLeft:30,color:"gray"}}>12:34</Text>
                    <Text style={{fontSize:20,marginLeft:30}}>吃饭</Text>
                  </View> */}
                  <View style={{marginBottom:20}}></View>
                  </View>
                </View>            
              
              </View>

              <View style={{alignItems:"center",marginTop:20}}>
                
                <View style={{backgroundColor:'#fff', width:360,borderRadius:15}}>
                  
                  {/* 顶部日期和按钮区域 */}
                  <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:12}}>
                    <View style={{flex:1,marginLeft:10}}>
                      {/* 日期和月份的样式，为了营造一大一小并错位的感觉 */}
                      <View style={{flexDirection:"row"}}>
                        <View>
                        <Text style={{fontSize:26,fontWeight:"bold"}}>06</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:10}}>  </Text><Text style={{fontSize:15,fontWeight:"bold"}}>/11月</Text>
                        </View>
                        {/* <Text>/11月</Text> */}
                      </View>
                      <View style={{marginLeft:15}}><Text>星期五</Text></View>
                    </View>
                    
                    {/* <View style={{flex:1}}></View> */}
                  </View>
                  {/* 时间轴区域 */}
                  <View style={{marginTop:20}}>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>12：12</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>出门吃午饭</Text>
                  </View>
                  <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>17：32</Text>
                    <Text style={{fontSize:15,marginLeft:30}}>阳光长跑</Text>
                  </View>
                  {/* <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:18,marginLeft:30,color:"gray"}}>12:34</Text>
                    <Text style={{fontSize:20,marginLeft:30}}>吃饭</Text>
                  </View>
                  <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:18,marginLeft:30,color:"gray"}}>12:34</Text>
                    <Text style={{fontSize:20,marginLeft:30}}>吃饭</Text>
                  </View> */}
                  <View style={{marginBottom:20}}></View>
                  </View>
                </View>            
              
              </View>


            </View>
          );
    }
    
  }
