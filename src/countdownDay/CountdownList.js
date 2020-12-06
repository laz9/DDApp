import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';
import { range } from 'lodash'
import { TouchableOpacity } from 'react-native-gesture-handler';


var nowmonth=false;
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

    render(){
        return (
            <View style={{justifyContent:"flex-start",flex:1}}>
                {/* 日历View */}
                <View style={{flexDirection:"row",justifyContent:"flex-start",margin:20,height:50}}>
                    {/* 月份标题 */}
                      <View style={{justifyContent:"flex-end"}}><Text
                        style={{fontSize:28,fontWeight:"bold"}}
                      >{this.state.year}年{this.state.month}月</Text></View>
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
        );
    }}