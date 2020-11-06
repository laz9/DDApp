import React, { Component } from 'react';
import {FlatList, Text, View,StyleSheet,Image, Button } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import SetSaying from './SetSaying';



var sayings = require("../data/saying.json");




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
});


         

export default class showSayingList extends Component{

    // static navigationOptions = {
    //     title: (navigation) => ("日签日签"),
    //   };

    // static options: Options = {
    //     topBar: {
    //       title: {
    //         text: 'My Screen',
    //       },
    //     },
    //   };
    
    // static navigationOptions = ({ navigation}) => {
    //     const { params } = navigation.state;
    //     return {
    //         tabBarVisible: true,
    //         headerRight: (
    //             <View>
    //                 <TouchableOpacity onPress={()=>navigation.state.params.navigatePress()}>
    //                    //this.order()
    //                     <View style={{marginRight:30/1536*width}}>
    //                         <Text style={styles.hadlesub}>点餐</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //             </View>
    //         )
    //     }
    // };
    
    // 点击完成按钮
    order = ()=> {
        alert('haha');
    }
    
    componentDidMount() {
        // 处理数据源
        this.props.navigation.setParams({navigatePress:this.order})
    }
    


   render(){
        return (
            <View style={{flex:1,justifyContent:"space-between",alignItems:'center',flexDirection:'column'}}>            
            <FlatList
            // data={[{key: 'a'}, {key: 'b'}]}
                data={sayings}
                renderItem={this._renderItem}/>
                
            <View style={{marginVertical:20}}>
            <Button title="添加日签" 
                onPress={()=>this.props.navigation.navigate("setsaying")}
                style={{}}></Button>
            </View>
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