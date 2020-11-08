import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,TouchableHighlight, Button,Dimensions } from 'react-native';
import showSayingList from '../sayings/ShowSayingList'
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

var bottomIconHW=30;

var date = new Date();
var year = date.getFullYear().toString();
var month = (date.getMonth()+1).toString();
var day = date.getDate().toString();
var hour =  date.getHours().toString();
var minute = date.getMinutes().toString();
console.log(year+" "+month+" "+day);
 

function getDiffDate(year,month,day) {
  let date1 = new Date();
  let date2 = new Date();
  date1 = new Date(year, month,day);
  date2 = new Date(date2.getFullYear(), date2.getMonth()+1, date2.getDate());
  const diff = date2.getTime() - date1.getTime();
  const diffDate = diff / (24 * 60 * 60 * 1000);
  return diffDate;
}
var logindays=getDiffDate(2020,10,20);

export default class MineScreen extends Component{
  constructor(props) {
    super(props);
    this.state={
      infocardhint:"",
      islogin:true,
      username:"wsy",
      sayingcardcontent:"大风吹着我和山岗，我的面前有一万座村庄，我的身后有一万座村庄，千灯万盏，我只有一轮月亮。"
    }

    this.init=this.init.bind(this);
    this.changeInfoCardHint=this.changeInfoCardHint.bind(this);
    
  
  }

  changeInfoCardHint(){
    console.log("1");
    console.log(this.state.islogin);
    if(!this.state.islogin){
      console.log("4");
      this.setState({infocardhint:"您还未登录"});
    }
    else if(hour>=4&&hour<8){
      this.setState({infocardhint:"早上好,"+this.state.username});
    }
    else if(hour>=8&&hour<12){
      this.setState({infocardhint:"上午好,"+this.state.username});
    }
    else if(hour>=12&&hour<18){
      this.setState({infocardhint:"下午好,"+this.state.username});
    }
    else {
      this.setState({infocardhint:"晚上好,"+this.state.username});
    }
  }

  UNSAFE_componentWillMount(){
    this.changeInfoCardHint();
  }

  init(){
    this.setState({islogin:!this.state.islogin},
      function(){
        this.changeInfoCardHint();
      });
    
  
  }


  render(){
    console.log(this.state.islogin);


  return (
    <View style={styles.container}>
          {/*背景图片*/}
          <Image
            style={styles.backgroundImg}
            source={require('../../img/mine_bgimg.jpg')}
            />
          {/* 个人信息卡片 */}


          
          <TouchableHighlight
            style={styles.infocard}
           onPress={()=> 
            // this.setState({islogin:!this.state.islogin})||
            this.state.islogin?
            this.props.navigation.navigate('profile',{
              refresh:()=>this.init()
            }
            )
            :this.props.navigation.navigate('login')}
           underlayColor="#c5c5c5"
            > 
          <View>
            <View style={{flexDirection:'column'}}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems:'center',
                marginHorizontal:20,
                marginTop:10
              }}>
                <View style={{flex:1,flexDirection:'column',justifyContent:"center"}}>
                <Text style={{fontSize:30,fontWeight:"bold"}}>{this.state.infocardhint}</Text>
                  {
                    this.state.islogin&&<Text style={{color:'gray'}}>您已经登录{logindays}天</Text>
                  }
                  
                </View>
                <Image
                  style={{width:70,height:70,borderRadius:40,marginBottom:20}}
                  source={require('../../img/avatar.jpg')}/>
              </View>

              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: "space-around",
                // alignItems:'center',
                // width:360,
                backgroundColor:"red",
                marginTop:40,

              }}>
                <View style={{}}>
                  <Text style={{fontSize: 16,color:"#555"}}>习惯</Text>
                  <Text style={{fontSize: 20,textAlign:"center" }}>00 个</Text>
                </View>
                <View><Text style={{fontSize: 30}}>|</Text></View>
                <View style={{}}>
                  <Text style={{fontSize: 16,color:"#555" }}>习惯完成</Text>
                  <Text style={{fontSize: 20,textAlign:"center" }}>00 个</Text>
                </View>
                <View><Text style={{fontSize: 30}}>|</Text></View>
                <View style={{}}>
                  <Text style={{fontSize: 16,color:"#555"}}>日记</Text>
                  <Text style={{fontSize: 20,textAlign:"center" }}>00 篇</Text>
                </View>
              </View>
            </View>

          </View>  
          </TouchableHighlight>      
       
          {/* 每日日签 */}
            
          <TouchableWithoutFeedback
           onPress={()=> this.props.navigation.navigate('sayinglist')}
           style={{marginTop:15}}
            > 
            <View style={{width:Dimensions.get("window").width,marginVertical:0, height:300,alignItems:"center",justifyContent:"center"}}>
            <View style={styles.sayingcard}>              
            <View style={{flexDirection:'column',alignItems:'center',marginTop:20}}>
              <Text style={{color:'#ccbbdd',fontSize:18,fontWeight:'bold'}}>每日日签</Text>
              <Text style={{color:'#efe5ed'}}>--------------------------------------------------------------------------------</Text>
            </View>
            <View style={{marginHorizontal:22,height:150}}>
            <Text style={{fontSize: 18, justifyContent:'flex-start',color:'#777'}}>{this.state.sayingcardcontent}</Text>
            </View>
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
      // backgroundColor:"red",
      height:160,
      width:360,
      justifyContent:'center',
      backgroundColor:'#fefcfe',
      borderRadius:30,
      marginTop:-80,
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
      elevation: 10,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
      shadowColor:'#eee',
      shadowOpacity: 1,  // 阴影不透明度,改变这个值暂时看不到变化
    },
    buttomView:{
      flex:1,
      backgroundColor:'#fff',
      width:420,
      marginTop:10,
      flexDirection:'column',
      justifyContent:'space-around'
    },
});
