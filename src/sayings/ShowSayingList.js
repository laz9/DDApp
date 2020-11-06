import React, { Component } from 'react';
import {FlatList, Text, View,StyleSheet,Image, Button,Dimensions } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import SetSaying from './SetSaying';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';



var sayings = require("../data/sayings.json");

var widthWin=Dimensions.get("window").width;
var heightWin=Dimensions.get("window").height;
var heigthBar=60;



const styles=StyleSheet.create({
    sayingItem: {
        flex:1,
        flexDirection: 'column',
        width:360,
        height:120,
        margin:10,
        borderRadius:10,
        backgroundColor:'#fefecc'
      },
    barView:{
        flexDirection:"row",
        backgroundColor:"white",
        height:heigthBar,
        width:widthWin,
        alignItems:"center",
        justifyContent:"space-between",
        elevation: 3,      
    },
    barImg:{
        width:30,
        height:30,
        marginHorizontal:20,

    }
});



// export default function showSayingList(){

//     // static navigationOptions = {
//     //     title: (navigation) => ("日签日签"),
//     //   };

//     React.useLayoutEffect(()=>{
//         navigation.setOptions({
//             headerRight:()=>(
//                 <View>
//                     <TouchableOpacity onPress={()=>this.props.navigation.navigate("setsaying")}>
//                         <View style={{marginRight:10}}>
//                             <Text style={{}}>添加</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             ),
//         });

//     },[navigation]);
   
//     // static navigationOptions = ({ navigation}) => {
//     //     const { params } = navigation.state;
//     //     return {
//     //         tabBarVisible: true,
//     //         headerRight: (
//     //             <View>
//     //                 <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}>
//     //                    //this.order()
//     //                     <View style={{marginRight:30/1536*width}}>
//     //                         <Text style={styles.hadlesub}>点餐</Text>
//     //                     </View>
//     //                 </TouchableOpacity>
//     //             </View>
//     //         )
//     //     }
//     // };
    
//     // 点击完成按钮
//     // order = ()=> {
//     //     alert('haha');
//     // }
    
//     // componentDidMount() {
//     //     // 处理数据源
//     //     this.props.navigation.setParams({navigatePress:this.order})
//     // }
    

//         return (
//             <View style={{flex:1,justifyContent:"space-between",alignItems:'center',flexDirection:'column'}}>            
//             <FlatList
//             // data={[{key: 'a'}, {key: 'b'}]}
//                 data={sayings}
//                 renderItem={this._renderItem}/>
                
//             <View style={{marginVertical:20}}>
//             <Button title="添加日签" 
//                 onPress={()=>this.props.navigation.navigate("setsaying")}
//                 style={{}}></Button>
//             </View>
//             </View>
//         );



   

//    _renderItem=({item})=>{
//        return (
//         <View style={styles.sayingItem}>
//          <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",margin:15}}><Text style={{color:"gray"}}>{item.time}</Text></View>
//          <View style={{marginHorizontal:10}}><Text style={{fontSize:16}}>{item.content}</Text></View>
//          <View><Text>{item.author}</Text></View>
//          <View style={{flex:1,alignItems:"flex-end",marginHorizontal:10}}><Text style={{color:"gray"}}>{item.mood}</Text></View>
//         </View>
//        );

//    }

// };
         

export default class ShowSayingList extends Component{

    // static navigationOptions = {
    //     title: (navigation) => ("日签日签"),
    //   };
    constructor(props){
        super(props);
    }
   
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: '阅读历史',
          headerTintColor: '#222',
          headerRight: <Text 
                          style={ styles.textManager } 
                           onPress={ navigation.getParam('handleManager') }
                          >
                              { navigation.getParam('isInSelect') ? '选择' : '管理' }
                          </Text>
        };
      };
    


   render(){
        return (
            <View style={{flex:1,justifyContent:"space-between",alignItems:'center',flexDirection:'column'}}>   
            <View style={styles.barView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={{backgroundColor:""}}><Image style={styles.barImg} 
                            source={require("../../img/back1.png")}  
                        ></Image></View>
                </TouchableOpacity>
                <View><Text style={{fontSize:20}}>我的日签</Text></View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("setsaying")}>
                <View style={{backgroundColor:""}}><Image style={styles.barImg} 
                            source={require("../../img/add2.png")}  
                        ></Image></View>
                </TouchableOpacity>
            </View>         
            <FlatList
            // data={[{key: 'a'}, {key: 'b'}]}
                data={sayings}
                renderItem={this._renderItem}/>
                
        
            </View>
        );

   };

   

   _renderItem=({item})=>{
       return (
        <View style={styles.sayingItem}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",margin:15}}><Text style={{color:"gray"}}>{item.time}</Text></View>
         <View style={{marginHorizontal:10}}><Text style={{fontSize:16}}>{item.content}</Text></View>
         <View><Text>{item.author}</Text></View>
         <View style={{flex:1,alignItems:"flex-end",marginHorizontal:10}}><Text style={{color:"gray"}}>{item.mood}</Text></View>
        </View>
       );

   }

};

// export default function showSayingList({navigation}){
   

//         return (
//             <View style={{flex:1,justifyContent:"space-between",alignItems:'center',flexDirection:'column'}}>
//                <FlatList
                
//                />
//                 <Button title="添加日签" onPress={()=>navigation.navigate("setsaying")}></Button>
//             </View>
//         );
    
// };