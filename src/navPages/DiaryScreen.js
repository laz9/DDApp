import React, { Component } from 'react';
import { Text, View,Image, Button,ScrollView } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

var dairy = require("../data/dairy.json");



var date = new Date();
var nowyear = date.getFullYear().toString();
var nowmonth = (date.getMonth()+1).toString();
var nowday = date.getDate().toString();
// 在读取了的json数据中加入今天的数据
function getWeekDate() {
  var now = new Date();
  var day = now.getDay();
  var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  var week = weeks[day];
  return week;
}
var todaydairy={
        "day":nowday,
        "month":nowmonth,
        "year":nowyear,
        "week":getWeekDate(),
        "time":[],
        "content":[
           
        ]
}


export default class DiaryScreen extends Component  {

  // FlatList渲染
  _renderItem=({item})=>{
    var viewtimeline=[];

    console.log(item);
    if(item.time){
      // 渲染第一个内容
      viewtimeline.push(
      <View style={{flexDirection:"row",alignItems:"center"}}>
        <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>{item.time[0]}</Text>
      <Text style={{fontSize:15,marginLeft:30}}>{item.content[0]}</Text>
      </View>
      );

      for(var i=1;i<item.time.length;i++){
        // 渲染后面的数据，因为时间轴的竖线，所以和第一组数据分开
        viewtimeline.push(
        <View><Text style={{fontSize:15,marginLeft:40,color:"gray"}}>|</Text></View>
        );
        viewtimeline.push(
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={{fontSize:15,marginLeft:30,color:"gray"}}>{item.time[i]}</Text>
          <Text style={{fontSize:15,marginLeft:30}}>{item.content[i]}</Text>
          </View>
        );
      
      }
      
      viewtimeline.push(<View style={{marginBottom:20}}></View>);
      // console.log(viewtimeline);
    }
    
   
    return (

      <View style={{alignItems:"center",marginTop:20}}>
                
      <View style={{backgroundColor:'#fff', width:360,borderRadius:15}}>
        
        {/* 顶部日期和按钮区域 */}
        <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:12}}>
          <View style={{flex:1,marginLeft:10}}>
            {/* 日期和月份的样式，为了营造一大一小并错位的感觉 */}
            <View style={{flexDirection:"row"}}>
              <View>
              <Text style={{fontSize:26,fontWeight:"bold"}}>{item.day}</Text>
              </View>
              <View>
         <Text style={{fontSize:10}}>  </Text><Text style={{fontSize:15,fontWeight:"bold"}}>/{item.month}月</Text>
              </View>
            </View>
        <View style={{marginLeft:15}}><Text>{item.week}</Text></View>
          </View>
          {/* 如果item中的年月日和今天获取到的年月日相同，则渲染记录按钮 */}
          {item.year==nowyear&&item.month==nowmonth&&item.day==nowday ?
          <TouchableOpacity style={{

          }}
          >
            <Text>去记录一下吧~</Text>
          </TouchableOpacity>:<View style={{flex:1}}></View>}
          

          <View style={{flex:1}}></View>
        </View>
        {/* 时间轴区域 */}
        <View style={{marginTop:20}}>
          {viewtimeline}
        </View>
               
      </View>   
                  
    </View>

    );
}



    render(){
      getWeekDate();
        return (
            <View
              style={{
                justifyContent: "flex-start",
              }}>
                {/* 顶部区域，有日记标题和设置，搜索图标 */}
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:15}}>
                <View><Text style={{fontSize:30}}>日记</Text></View>
                <View style={{flexDirection:'row'}}>
                <View><Image style={{width:30,height:30,marginRight:10}} source={require('../../img/diarysetting.png')}></Image></View>
                <View><Image style={{width:30,height:30}} source={require('../../img/diarysearch.png')}></Image></View>
                </View>
              </View>

              {/* 列表，渲染每天的日记 */}
              <FlatList
            // data={[{key: 'a'}, {key: 'b'}]}
                keyExtractor={(item, index) => index.toString()}
                data={dairy}
                renderItem={this._renderItem}/>

              {/* <View style={{marginBottom:100,backgroundColor:"red",height:100}}><Text>底部</Text></View> */}


            </View>

          );
    }
    
  }
