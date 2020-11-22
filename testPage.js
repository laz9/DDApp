import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, View,TextInput,PermissionsAndroid} from 'react-native';
import CustomAlertDialog from "./src/sayings/CustomAlertDialog";
import StorageUtil from './src/utils/StorageUtil'
import { init, Geolocation ,setLocatingWithReGeocode} from "react-native-amap-geolocation";



export default class TestCustomAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1:"",
            text2:"",
            text3:"",
            provinceName: "data.province",
            cityName: "data.city",
            areaName: "data.district",
        }
    }


  async componentDidMount() {
        if (Platform.OS === "android") {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
        }else{
            setLocatingWithReGeocode(true)
        }
        await init({
            ios: "9bd6c82e77583020a73ef35f59d0c759",
            android: "ade5ca7ede1c4d37a2ad89372b1c01b7"
        });
        this.getCurrentPosition()
    }

        getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => this.updateLocationState(position),
            error => this.updateLocationState(error)
        );
    };

    updateLocationState(location) {
        if (location) {
            location.updateTime = new Date().toLocaleString();
            let data = location.location
            // console.log(data);
            this.setState({
                provinceName: data.province,
                cityName: data.city,
                areaName: data.district,
            });
            console.log(this.state.areaName+this.state.cityName+this.state.provinceName);
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