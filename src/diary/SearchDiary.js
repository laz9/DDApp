import React, { Component } from 'react';
import { Text, View ,Button,Image, Alert} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';



var detailData=[
    {
        "day":10,
        "month":11,
        "year":2020,
        "time":["08:04","09:59","16:12","18:01"],
        "content":[
            "去食堂吃早饭",
            "要上课了",
            "阳光长跑",
            "做PPT"
        ]

    },
    {

        "day":10,
        "month":11,
        "year":2020,
        "time":["08:04","09:59","16:12","18:01"],
        "content":[
            "去食堂吃早饭",
            "要上课了",
            "阳光长跑",
            "做PPT"
        ]

    },
    {

        "day":10,
        "month":11,
        "year":2020,
        "time":["08:04","09:59","16:12","18:01"],
        "content":[
            "去食堂吃早饭",
            "要上课了",
            "阳光长跑",
            "做PPT"
        ]

    },
]
var showView=[];

export default class SearchDiary extends Component  {
    constructor(){
      super();
      this.state={
          inputText:"",
          history:[{"text":"上课"},{"text":"杭州电子科技大学"},{"text":"起床"}],
        //   
          showMode:1,          
       
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


    renderDetail=({item})=>{
        var moreDetailView=[];
        for(var i=1;i<item.time.length;i++){
            moreDetailView.push(
                <View>
                    <View style={{alignItems:"center"}}>
                    <View style={{borderBottomWidth:1,width:330,borderBottomColor:"#E6E6FA"}}></View>
                    </View>
                    <View>
                    <View style={{flexDirection:"row",marginLeft:10,marginVertical:20}}>
                        <Text style={{color:"#aaa"}}>{item.time[i]}</Text>
                        <Text style={{color:"red",fontSize:16,marginLeft:10}}>{item.content[i]}</Text>
                    </View>
                    </View>
                </View>
            );
        }
        // console.log(moreDetailView);


        return (
            <View style={{width:360,backgroundColor:"#F5F5Fa",borderRadius:10,marginTop:20}}>
                <View style={{margin:10}}>
                    <Text>{item.year}年{item.month}月{item.day}日</Text></View>
                <View>
                    <View style={{flexDirection:"row",marginLeft:10,marginVertical:20}}>
                        <Text style={{color:"#aaa"}}>{item.time[0]}</Text>
                        <Text style={{color:"red",fontSize:16,marginLeft:10}}>{item.content[0]}</Text>
                    </View>
                    {moreDetailView}

                </View>
            </View>
        );
    }

    searchDetail(){
        Alert("详情页")
    }

    UNSAFE_componentWillMount(){
        console.log(this.state.showMode);
        if(this.state.showMode===1){
            console.log(this.state.showMode+2);

            showView=<View>
            {/* 历史记录和清除提示区域 */}
             <View style={{flexDirection:"row",justifyContent:"space-between",margin:12}}>
                 <Text style={{fontSize:16,color:"#bbb"}}>历史记录</Text>
                 <TouchableOpacity
                     style={{flexDirection:"row"}}
                     onPress={()=>{this.setState({history:[]})}}
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
                 data={this.state.history}
                 renderItem={this.renderHistory}
             />
        </View>

        }
        else if(this.state.showMode===2){
            showView=<View style={{alignItems:"center"}}>
            <FlatList
                     keyExtractor={(item, index) => index.toString()}
                     data={detailData}
                     renderItem={this.renderDetail}
                 />

            </View>
        }
    }

    // componentDidMount(){
    //     console.log(this.state.showMode);
    //     if(this.state.showMode===1){
    //         console.log(this.state.showMode+7);

    //         showView=<View>
    //         {/* 历史记录和清除提示区域 */}
    //          <View style={{flexDirection:"row",justifyContent:"space-between",margin:12}}>
    //              <Text style={{fontSize:16,color:"#bbb"}}>历史记录</Text>
    //              <TouchableOpacity
    //                  style={{flexDirection:"row"}}
    //                  onPress={()=>{this.setState({history:[]})}}
    //              >
    //                  <Image style={{width:18,height:18}}
    //                      source={require('../../img/删除.png')}
    //                      ></Image>
    //              <Text style={{color:"#bbb"}}> 清除</Text>
    //              </TouchableOpacity>
    //          </View>
    //          {/* 历史记录关键词显示 */}
    //          <FlatList
    //              keyExtractor={(item, index) => index.toString()}
    //              data={this.state.history}
    //              renderItem={this.renderHistory}
    //          />
    //     </View>

    //     }
    //     else if(this.state.showMode===2){
    //         showView=<View style={{alignItems:"center"}}>
    //         <FlatList
    //                  keyExtractor={(item, index) => index.toString()}
    //                  data={detailData}
    //                  renderItem={this.renderDetail}
    //              />

    //         </View>
    //     }

    // }

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
                            onSubmitEditing={
                                ()=>
                                this.setState({showMode:2})
                            }
                       /></View>

                   </View>
                   <TouchableOpacity 
                    style={{flex:1,justifyContent:"center"}}
                    onPress={()=>{this.props.navigation.navigate("diary")}}
                    
                   >
                       <Text style={{fontSize:16,marginLeft:10,color:"#fff"}}>取消</Text></TouchableOpacity>
                       </View>
               </View>
               {showView}
               
              
               
            </View>
        );
    }}