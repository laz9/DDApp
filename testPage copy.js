import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, View,TextInput} from 'react-native';
import CustomAlertDialog from "./src/sayings/CustomAlertDialog";
import StorageUtil from './src/utils/StorageUtil'

const typeArr = ["平静","开心", "焦虑", "无聊","悲伤","恐惧","生气","激动","期待"];

export default class TestCustomAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1:"",
            text2:"",
            text3:""
        }
    }
    
    

    _saveData(){

        const texts={
            text1:this.state.text1,
            text2:this.state.text2,
            text3:this.state.text3,
    }
        let key="ts"
        

        StorageUtil.save(key,texts);
        alert("保存成功");


    }

    _openDialog() {

        let key="ts"

        var getdata= StorageUtil.get(key).then((row)=>{
            if(row){
               
                alert("您保存的数据是"+row["text1"]);

            }
            else{
                console.log("null")
            }
        }).then(
            console.log(getdata)&&
        alert("您保存的数据是"+getdata["text1"]));
    }

    render() {

        return (
            <View style={{}}>
                <View style={{alignItems:"center",justifyContent:"center"}}>

                <TextInput
                    style={{ backgroundColor:"#fff", width:300,borderRadius:5,marginBottom:20, borderWidth: 0,fontSize:18 }}
                    placeholder="text1"
                    onChangeText={(text1) => this.setState({text1})}

                />
                <TextInput
                    style={{ backgroundColor:"#fff", width:300,borderRadius:5,marginBottom:20, borderWidth: 0,fontSize:18 }}
                    placeholder="text2"
                    onChangeText={(text2) => this.setState({text2})}

                />
                <TextInput
                    style={{ backgroundColor:"#fff", width:300,borderRadius:5,marginBottom:20, borderWidth: 0,fontSize:18 }}
                    placeholder="text3"
                    onChangeText={(text3) => this.setState({text3})}

                />
               
                </View>


                <TouchableHighlight onPress={() => this._saveData()} style={styles.button}
                                    underlayColor="#a5a5a5">
                    <Text>保存</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._openDialog()} style={styles.button}
                                    underlayColor="#a5a5a5">
                    <Text>查询</Text>
                </TouchableHighlight>

               
            </View>
        );

    }
}

const styles = StyleSheet.create({
    button: {
        margin: 3,
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd'
    },
});