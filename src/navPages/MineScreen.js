import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,TouchableHighlight, Button,Dimensions } from 'react-native';
import showSayingList from '../sayings/ShowSayingList'
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

var bottomIconHW=30;

export default function MineScreen({navigation}){
  return (
    <View style={styles.container}>
          {/*背景图片*/}
          <Image
            style={styles.backgroundImg}
            source={require('../../img/mine_bgimg.jpg')}
            />
          {/* 个人信息卡片 */}
          <View style={styles.infocard}>
            <View style={{flex:1, flexDirection:'column'}}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems:'center',
                marginHorizontal:20,
                marginTop:30
              }}>
                <View style={{flex:1,flexDirection:'column',justifyContent:"center"}}>
                  <Text style={{fontSize:30,fontWeight:"bold"}}>晚上好，xxx</Text>
                  <Text style={{color:'gray'}}>您已经登录xx天</Text>
                </View>
                <Image
                  style={{width:80,height:80,borderRadius:40}}
                  source={require('../../img/avatar.jpg')}/>
              </View>

              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems:'center',
                margin:10,
              }}>
                <Text style={{fontSize: 20, }}>数据1</Text>
                <Text style={{fontSize: 20}}>|</Text>
                <Text style={{fontSize: 20, }}>数据3</Text>
                <Text style={{fontSize: 20}}>|</Text>
                <Text style={{fontSize: 20,}}>数据3</Text>
              </View>
            </View>
          </View>          
       
          {/* 每日日签 */}
            
          <TouchableWithoutFeedback
           onPress={()=> navigation.navigate('sayinglist')}
            > 
            <View style={{width:Dimensions.get("window").width,marginVertical:0, height:420,alignItems:"center",justifyContent:"center"}}>
            <View style={styles.sayingcard}>              
            <View style={{flexDirection:'column',alignItems:'center',marginTop:20}}>
              <Text style={{color:'#ccbbdd',fontSize:18,fontWeight:'bold'}}>每日日签</Text>
              <Text style={{color:'#efe5ed'}}>--------------------------------------------------------------------------------</Text>
            </View>
            <View style={{marginHorizontal:22,height:150}}>
            <Text style={{fontSize: 18, justifyContent:'flex-start',color:'#777'}}>离群索居者，不是野兽，便是神灵。</Text>
            </View>
            {/* <View style={{alignItems:'flex-end',marginHorizontal:30}}>
            <Text style={{fontSize: 15, alignItems:'flex-end',color:'#aaa'}}>出处</Text>
            </View> */}
            <View style={{marginHorizontal:22}}>
            <Text style={{fontSize: 15, justifyContent:'space-around',color:'#ccbbdd'}}>2020/10/27</Text>
           
            {/* <Button title="设置"  onPress={()=> navigation.navigate('sayinglist')}></Button> */}
          </View>
          </View>
          </View>
           </TouchableWithoutFeedback>
            {/* 底部按钮 */}
          <View style={styles.buttomView}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <View style={{alignItems:'center'}}><Image style={{width:bottomIconHW,height:bottomIconHW}} source={require('../../img/mine_buttomimg1.png')}></Image>
                <Text style={{color:"#888",marginTop:5}}>心愿清单</Text></View>
              <View style={{alignItems:'center'}}><Image style={{width:bottomIconHW,height:bottomIconHW}} source={require('../../img/mine_buttomimg2.png')}></Image>
                <Text style={{color:"#888",marginTop:5}}>闹钟</Text></View>
              <View style={{alignItems:'center'}}><Image style={{width:bottomIconHW,height:bottomIconHW}} source={require('../../img/mine_buttomimg3.png')}></Image>
                <Text style={{color:"#888",marginTop:5}}>心情指数</Text></View>
              <View style={{alignItems:'center'}}><Image style={{width:bottomIconHW,height:bottomIconHW}} source={require('../../img/mine_buttomimg4.png')}></Image>
                <Text style={{color:"#888",marginTop:5}}>分享</Text></View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <View style={{alignItems:'center'}}><Image style={{width:36,height:36}} source={require('../../img/mine_buttomimg5.png')}></Image>
              <Text style={{color:"#888",marginTop:5}}>设置</Text></View>
              <View style={{alignItems:'center'}}><Text>   </Text></View>
              <View style={{alignItems:'center'}}><Text>   </Text></View>
              <View style={{alignItems:'center'}}><Text>   </Text></View>
            </View>


            

          </View>
          

      
    </View>
  );
}




const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems:'center'
    },
    backgroundImg:{
      height:150,
      resizeMode:'stretch'
    },
    infocard:{
      flex:1,
      position:"absolute",
      height:180,
      width:360,
      justifyContent:'center',
      backgroundColor:'#fefcfe',
      borderRadius:30,
      margin:50,
      elevation: 5,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
      shadowColor:'#444'

    },
    sayingcard:{
      flexDirection:'column',
      height:280,
      width:360,
      justifyContent:'flex-start',
      backgroundColor:'#fff',
      borderRadius:20,
      marginTop:70,
      elevation: 10,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
      shadowColor:'#eee',
      shadowOpacity: 1,  // 阴影不透明度,改变这个值暂时看不到变化
    },
    buttomView:{
      flex:1,
      backgroundColor:'#fff',
      width:420,
      flexDirection:'column',
      justifyContent:'space-around'
    },
});
