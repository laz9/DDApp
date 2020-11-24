import React, { Component } from 'react';
import { Text, View ,Button,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class StatisticScreen extends Component  {
    constructor(){
      super();
      this.state={
          dateSet:false,
          birth:"2000年11月11日",
          tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
          tableData: [
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '456\n789'],
            ['a', 'b', 'c', 'd']
          ]
       
      };
    }

    render(){
        // 选择出生日期前渲染的页面
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
        // 选择出生日期后渲染的页面
        else{
            return (
                <View style={[styles.container,{justifyContent:"space-around"}]}>
                    <View style={{flex:1,backgroundColor:"#fff"}}>
                        <Text style={{width:50,textAlign:"center",fontSize:28,color:"#888",marginTop:100}}>你出生于</Text>
                    </View>
                    <Text style={{color:"gray", fontSize:18}}>{this.state.birth}</Text>
                    <TouchableOpacity
                        style={{borderColor:"#ccc", borderWidth:1,borderRadius:5,width:120,height:36,alignItems:"center",justifyContent:"center"}}
                        onPress={()=>this.setState({dateSet:false})}
                    >
                        <Text style={{color:"#BC8F8F", fontSize:18}}>清除日期</Text>
                    </TouchableOpacity>
                    <View style={{flex:1,backgroundColor:"#fff"}}>
                    {/* <Text style={{width:50,textAlign:"center",fontSize:28,color:"#888",marginTop:100}}>你出生于</Text> */}
                        <View style={styles.tablecontainer}>
                            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                            <Rows data={this.state.tableData} textStyle={styles.text}/>
                            </Table>
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