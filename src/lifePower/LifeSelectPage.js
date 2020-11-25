import React, { Component } from 'react';
import { Text, View ,Button,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class LifeSelectPage extends Component  {
    constructor(){
      super();
      this.state={
          dateSet:true,
          birth:{
              year:2000,
              month:1,
              day:1
          },
          tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
          tableData: [
            ['20年', '251月', '7633天'],
            ['1090周', '183211时', '10992660分'],
          ]
       
      };
    }

    _changeDate(){
        this.setState({dateSet:false});

    }

    render(){
        // 设置出生日期前渲染的页面
        if(!this.state.dateSet){
        return (
            <View style={[styles.container,{justifyContent:"space-around"}]}>
                <View style={{flex:1,backgroundColor:"#fff"}}>
                    <Text style={{width:50,textAlign:"center",fontSize:28,color:"#888",marginTop:100}}>你出生于</Text>
                </View>
                <TouchableOpacity
                    style={{borderColor:"#ccc", borderWidth:1,borderRadius:50,width:120,height:36,alignItems:"center",justifyContent:"center"}}
                    onPress={()=>this.setState({dateSet:true})}
                >
                    <Text style={{color:"gray", fontSize:18}}>选择日期</Text>
                </TouchableOpacity>
                <View style={{flex:1,backgroundColor:"#fff"}}></View>
            </View>
        );}
        // 设置出生日期后渲染的页面
        else{
            return (
                <View style={[styles.container,{justifyContent:"space-around"}]}>
                    <View style={{flex:1,backgroundColor:"#fff"}}>
                        <Text style={{width:50,textAlign:"center",fontSize:28,color:"#888",marginTop:100}}>你出生于</Text>
                    </View>
                    <Text style={{color:"gray", fontSize:18}}>{this.state.birth.year}年{this.state.birth.month}月{this.state.birth.day}日</Text>
                    <TouchableOpacity
                        style={{borderColor:"#ccc", borderWidth:1,borderRadius:10,width:120,height:36,alignItems:"center",justifyContent:"center"}}
                        onPress={()=>this._changeDate()}
                    >
                        <Text style={{color:"#BC8F8F", fontSize:18}}>清除日期</Text>
                    </TouchableOpacity>
                    <View style={{flex:1,backgroundColor:"#fff"}}>
                    {/* <Text style={{width:50,textAlign:"center",fontSize:28,color:"#888",marginTop:100}}>你出生于</Text> */}
                        {/* <View style={styles.tablecontainer}>
                            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                            <Rows data={this.state.tableData} textStyle={styles.text}/>
                            </Table>
                        </View> */}
                        <View style={{width:400}}>
                        <View style={{marginHorizontal:30,marginTop:40}}>
                            <Text style={{color:"#ccc",fontSize:15}}>您已经在世界上度过</Text>
                            <Table borderStyle={{borderWidth: 1.5, borderColor: '#bbb'}}>
                            <Rows data={this.state.tableData} style={{height:40,opacity:0.8}} textStyle={styles.text}/>
                            </Table>
                        </View>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
                        <TouchableOpacity
                            style={{backgroundColor:"#B0C4DE",elevation:3, borderColor:"#fff",borderRadius:5,width:120,height:36,alignItems:"center",justifyContent:"center"}}
                            onPress={()=>this.props.navigation.navigate("lifepower")}
                        >
                            <Text style={{color:"#fff", fontSize:18}}>人生电量</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{backgroundColor:"#B0C4DE",elevation:3,marginTop:20,borderRadius:5,width:120,height:36,alignItems:"center",justifyContent:"center"}}
                            onPress={()=>this.props.navigation.navigate("lifegrid")}
                        >
                            <Text style={{color:"#fff", fontSize:18}}>人生格子</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
            
        }
    }}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center"
    },
    tablecontainer: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});


// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';

// export default class ExampleOne extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
//       tableData: [
//         ['1', '2', '3', '4'],
//         ['a', 'b', 'c', 'd'],
//         ['1', '2', '3', '456\n789'],
//         ['a', 'b', 'c', 'd']
//       ]
//     }
//   }

//   render() {
//     const state = this.state;
//     return (
//       <View style={styles.container}>
//         <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//           <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//           <Rows data={state.tableData} textStyle={styles.text}/>
//         </Table>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { margin: 6 }
// });