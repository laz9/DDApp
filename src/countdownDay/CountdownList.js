import React, { Component } from 'react';
import { Text, View ,Button,Image} from 'react-native';
import { range } from 'lodash'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

var nowmonth=false;
let countdownViewHeight=66;
var date = new Date();
var year = date.getFullYear().toString();
var month = (date.getMonth()+1).toString();
var nowday = date.getDate();
var hour =  date.getHours().toString();
var minute = date.getMinutes().toString();

function getDiffDate(year,month,day) {
  let date1 = new Date();
  let date2 = new Date();
  date1 = new Date(year, month,day);
  date2 = new Date(date2.getFullYear(), date2.getMonth()+1, date2.getDate());
  const diff = date1.getTime() - date2.getTime();
  const diffDate = diff / (24 * 60 * 60 * 1000);
  return diffDate;
}

var cdData=[
  {
      title:"讲座",
      year:2020,
      month:12,
      day:8,
  },
  {
      title:"生日",
      year:2020,
      month:12,
      day:9,
  },
  {
      title:"志愿活动",
      year:2020,
      month:12,
      day:10,

  },
  {
      
      title:"双十二",
      year:2020,
      month:12,
      day:11,
  },
  {
    title:"讲座",
    year:2020,
    month:12,
    day:12,
},
{
    title:"周日",
    year:2020,
    month:12,
    day:13,
},
{
    title:"志愿活动",
    year:2020,
    month:12,
    day:18,

},
{
    
    title:"圣诞节",
    year:2020,
    month:12,
    day:25,
},
  
];
export default class CountdownList extends Component  {

  
    constructor(){
      super();
      this.state={
        year:2020,
        month:12,
        dayDistance:12,
      };
      this.renderWeekTitle=this.renderWeekTitle.bind(this);
      this.renderWeekDays=this.renderWeekDays.bind(this);
    }
    
    
    renderWeekDays() {
      let past_month_days = range(27, 31);
      let this_month_days = range(1, 32);
     
      let days = past_month_days.concat(this_month_days);
      let grouped_days = this.getWeeksArray(days);
     
      return grouped_days.map((week_days, index) => {
        return (
          <View key={index} style={{flexDirection:"row",justifyContent:"space-around",marginVertical:5}}>
            { this.renderDays(week_days) }				
          </View>
        );
      });
    
    }

    
    
    getWeeksArray(days) {
      var weeks_r = [];
      var seven_days = [];
      var count = 0;
      console.log(days);
      days.forEach((day) => {
        count += 1;
        seven_days.push(day);
        if(count == 7){
          weeks_r.push(seven_days)
          count = 0;
          seven_days = [];
        }
      });
      console.log(weeks_r);
      return weeks_r;
    }

    press(){
      console.log("test");
    };

    
    renderDays(week_days) {

      return week_days.map((day, index) => {



        if(day===1){
          nowmonth=!nowmonth;
        }
        if(!nowmonth){
          return (
            <TouchableOpacity 
              onPress={this.press.bind(this)}
              key={index} 
              style={{width:30}}
    
            >
              <Text style={{textAlign:"center",fontSize:20,color:"#aaa",fontWeight:"bold"}}>{day.toString()}</Text>
            </TouchableOpacity>	
          );
          
        }
        else{


          if(nowday===day){
              return (
                <TouchableOpacity 
                  onPress={this.press.bind(this)}
                  key={index} 
                  style={{width:30,backgroundColor:"#00bfff",borderRadius:20}}
        
                >
                  <Text style={{textAlign:"center",fontSize:20,color:"#fff",fontWeight:"bold"}}>{day.toString()}</Text>
                </TouchableOpacity>	
              );
           }
          else{
            return (
              <TouchableOpacity 
                onPress={this.press.bind(this)}
                key={index} 
                style={{width:30}}
      
              >
                <Text style={{textAlign:"center",fontSize:20,color:"#000",fontWeight:"bold"}}>{day.toString()}</Text>
              </TouchableOpacity>	
            );

          }

        }
     
    });
    }

    renderWeekTitle() {
      let weekdays = ['日', '一', '二', '三', '四', '五', '六'];
      return weekdays.map((day) => {
          return (
              <Text key={day} style={{
                  color:"#999",
                  fontSize:12
                  }}>{day}</Text>
          );
      });
  }

    _renderItem=({item})=>{
      console.log("test");
      var cdDay=getDiffDate(item.year,item.month,item.day);
      if(cdDay<0){
        return <View></View>
      }
      var cdHaveDaysView=[<View style={{justifyContent:"center",alignItems:"center",width:100,height:countdownViewHeight ,backgroundColor:"",flexDirection:"row"}}>
      <View style={{width:40,backgroundColor:"",alignItems:"center",justifyContent:"center",height:30,marginBottom:5}}><Text style={{fontSize:24}}>{cdDay}</Text></View>
      <View style={{width:30,backgroundColor:"",height:30,justifyContent:"center"}}><Text style={{color:"#777"}}>天后</Text></View>
      </View>];
      cdHaveDaysView.push(
        <View style={{height:countdownViewHeight,justifyContent:"center",marginRight:10}}>
          <Image style={{width:20,height:20}} source={require("../../img/旗帜.png")}></Image>
        </View>
      );
      var cdIsTodayView=[
        <View style={{justifyContent:"center",alignItems:"center",width:100,height:countdownViewHeight ,backgroundColor:"",flexDirection:"row"}}>
          <View style={{width:42,backgroundColor:"",alignItems:"flex-end",justifyContent:"flex-end",height:30}}><Text style={{fontSize:20}}>今天</Text></View>
        </View>
        ];
      cdIsTodayView.push(
        <View style={{height:countdownViewHeight,justifyContent:"center",marginRight:10}}>
          <Image style={{width:20,height:20}} source={require("../../img/旗子.png")}></Image>
        </View>
      );
     
      return (
      <TouchableOpacity 
        key={item}
        onPress={() => this.props.navigation.navigate("countdowncard")}
        style={{marginVertical:5 ,justifyContent:"flex-start",alignItems:"flex-start",borderRadius:15,flexDirection:"row"}}>
         {cdDay==0?cdIsTodayView:cdHaveDaysView}
        
        <View style={{justifyContent:"center",backgroundColor:"",height:countdownViewHeight}}>
        <View style={{}}>
          <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>{item.title}</Text>
          </View>
        <View style={{flexDirection:"row"}}>
          <View style={{}}><Text style={{color:"gray"}}>倒数日</Text></View>
          <View><Text style={{color:"gray"}}> | </Text></View>
          <View><Text style={{color:"gray"}}>{item.year}年{item.month}月{item.day}日</Text></View>
        </View>
 
        </View>
        
      </TouchableOpacity>
      );
  }

    render(){
        return (
            <View style={{justifyContent:"flex-start",flex:1}}>
                {/* 日历View */}
                <View style={{elevation:2,shadowColor:"black",shadowOffset:2,backgroundColor:"",marginBottom:10}}>
                   {/* 月份标题 */}
                <View style={{flexDirection:"row",justifyContent:"flex-start",margin:10,marginTop:20 ,height:50}}>
                      {/* 返回 */}
                    <TouchableOpacity 
                      style={{justifyContent:"flex-end",marginRight:10,height:45}}
                      onPress={() => this.props.navigation.goBack()}>
                     <View style={{backgroundColor:""}}><Image style={{width:30,height:30}} 
                            source={require("../../img/返回.png")}  
                        ></Image></View>
                    </TouchableOpacity>
                        {/* 当前月份 */}
                      <View style={{justifyContent:"flex-end"}}><Text
                        style={{fontSize:28,fontWeight:"bold"}}
                      >{this.state.year}年{this.state.month}月</Text></View>
                      {/* 几天后 */}
                      <View style={{justifyContent:"flex-end"}}><Text
                        style={{fontSize:16,color:"gray"}}
                      >{this.state.dayDistance}天后</Text></View>
                    </View>

                    {/* 周几标题 */}

                    <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:10}}>
                        { this.renderWeekTitle() }
                    </View>
                    {/* 日历日期 */}
                    <View style={{flexDirection:"column",justifyContent:"space-around"}}>
                        { this.renderWeekDays() }
                    </View>
                    </View>

                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                      <View 
                       style={{backgroundColor:"#fff",width:360,borderRadius:20,marginBottom:10}}
                      >
                    <FlatList
                  // data={[{key: 'a'}, {key: 'b'}]}
                      keyExtractor={(item, index) => index.toString()}
                      data={cdData}
                      renderItem={this._renderItem}/>
                      </View>
                   {/* 添加功能的悬浮按钮 */}
                   </View>
                      <ActionButton
                          buttonColor="rgba(231,76,60,1)"
                          onPress={() => this.props.navigation.navigate("addcountdownday")}
                          
                          />
              
               
            </View>
        );
    }}