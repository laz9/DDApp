import React, { Component } from 'react';
import { Text, View ,Button,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class LifeGridPage extends Component  {
    constructor(){
      super();
      this.state={

        tableData: [
            
          ]
       
      };
    }

   
    componentDidMount(){
        // console.log(1);
        var tableDataTemp=[];
        for(let i=0;i<10;i++){
            var rowData=[];
            for(let j=0;j<18;j++){
                rowData.push(" ");
            } 
            tableDataTemp.push(rowData);
        }
        // console.log(tableDataTemp);
        this.setState({tableData:tableDataTemp});
    }

    
    render(){
        return (
            // <View style={{justifyContent:"space-around",flex:1}}>
            <View>
                {/* <Text>习惯页</Text> */}
                <View style={{marginHorizontal:30,marginTop:20}}>
                            {/* <Text style={{color:"#ccc",fontSize:15}}>您已经在世界上度过</Text> */}
                            <Table borderStyle={{borderWidth: 1.5, borderColor: '#bbb'}}>
                            <Rows data={this.state.tableData} style={{height:12,opacity:0.8,backgroundColor:"#000"}}/>
                            <Rows data={this.state.tableData} style={{height:12,opacity:0.8,backgroundColor:"#000"}}/>
                            <Rows data={this.state.tableData} style={{height:12,opacity:0.8}}/>
                            <Rows data={this.state.tableData} style={{height:12,opacity:0.8}}/>
                            <Rows data={this.state.tableData} style={{height:12,opacity:0.8}}/>

                            </Table>
                        </View>
               
            </View>
        );
    }}