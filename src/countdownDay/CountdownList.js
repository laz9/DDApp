import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';


export default class CountdownList extends Component  {

    

    constructor(){
      super();
      this.state={
        year:2020,
        month:12,
        dayDistance:12
      };
      this.renderWeekDays=this.renderWeekDays.bind(this);
    }
    
    
    renderWeekDays() {
        let weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        return weekdays.map((day) => {
            return (
                <Text key={day} style={{
                    color:"#999"
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

                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        { this.renderWeekDays() }
                       
                    </View>


               
               
            </View>
        );
    }}