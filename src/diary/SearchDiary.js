import React, { Component } from 'react';
import { Text, View ,Button,Image, Alert} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default class SearchDiary extends Component  {
    constructor(){
      super();
      this.state={
          inputText:"",
          
       
      };
      this.renderHistory=this.renderHistory.bind(this)
    }

    renderHistory=({item})=>{
        return (
         <View style={{margin:12}}>
             <Text style={{fontSize:16}}>{item.text}</Text>
         </View>
        );
    }

    searchDetail(){
        Alert("详情页")
    }

    render(){
        return (
            <View style={{justifyContent:"flex-start",flex:1,backgroundColor:"#fff"}}>
                {/* 导航栏 */}
                <View style={{backgroundColor:"#B0C4DE"}}>
               <View style={{flexDirection:"row",height:40,marginVertical:10,marginHorizontal:15}}>
                   <View style={{flex:6,backgroundColor:"#fafafa",borderRadius:20,flexDirection:"row",alignItems:"center"}}>
                       <Image 
                        style={{width:20,height:20,marginLeft:18}}
                        source={require("../../img/日记搜索页搜索图标.png")}
                       ></Image>
                       <View style={{}}>
                       <TextInput
                            style={{ borderColor: '#888', borderWidth: 0,fontSize:16,width:300 }}
                            placeholder="搜索日记..."
                            maxLength={15}
                            onChangeText={(inputText)=>this.setState({inputText})}
                            // onChangeText={(text) => this.setState({text})}
                            value={this.state.inputText}
                            onSubmitEditing={}
                       /></View>

                   </View>
                   <TouchableOpacity 
                    style={{flex:1,justifyContent:"center"}}
                    onPress={()=>{this.props.navigation.navigate("diary")}}
                   >
                       <Text style={{fontSize:16,marginLeft:10,color:"#fff"}}>取消</Text></TouchableOpacity>
                       </View>
               </View>
               {/* 历史记录区域 */}
               <View>
                   {/* 历史记录和清除提示区域 */}
                    <View style={{flexDirection:"row",justifyContent:"space-between",margin:12}}>
                        <Text style={{fontSize:16,color:"#bbb"}}>历史记录</Text>
                        <TouchableOpacity
                            style={{flexDirection:"row"}}
                        >
                            <Image style={{width:18,height:18}}
                                source={require('../../img/删除.png')}
                                ></Image>
                        <Text style={{color:"#bbb"}}> 清除</Text>
                        </TouchableOpacity>
                    </View>
                    {/* 历史记录关键词显示 */}
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={[{"text":"上课"},{"text":"杭州电子科技大学"},{"text":"起床"}]}
                        renderItem={this.renderHistory}
                    />
               </View>
               <View>

               </View>
            </View>
        );
    }}