import WheelPicker ,{CommonPicker,DateRangePicker,DatePicker,RegionPicker} from "@yz1311/react-native-wheel-picker";
import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';


export default class CountdownList extends Component  {
    constructor(){
      super();
      this.state={
       
      };
    }
    

    render(){
        return (
            <View style={{justifyContent:"space-around",flex:1}}>
                <DatePicker
                    mode={'date'}
                    //date值可以不填，默认是当前时间
                    date={new Date()}
                    onPickerConfirm={(value)=>{
                        //不管mode的值是哪一种, value均是一个Date对象, 需要转换为所需的值
                        //譬如: 如果mode=='year', 则可以通过`moment(value).year()`
                    }}
                    />
               
            </View>
        );
    }}