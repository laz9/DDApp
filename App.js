import * as React from 'react';
import { Button, Text, View,StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomScreen from './src/navPages/CustomScreen';
import DiaryScreen from './src/navPages/DiaryScreen';
import MineScreen from './src/navPages/MineScreen';
import StatiScreen from './src/navPages/StatiScreen';
import showSayingList from './src/sayings/ShowSayingList'
import setSaying from './src/sayings/SetSaying'
import testPage from './testPage'
import Login from './src/loginRegister/Login'
import Register from './src/loginRegister/Register'
import Profile from './src/loginRegister/Profile'

const Tab = createBottomTabNavigator();

const MineStack=createStackNavigator();
function MineStackScreen(){
  return (
    <MineStack.Navigator>
      <MineStack.Screen name="mine"
      component={MineScreen} options={{headerShown:false}}/>
      <MineStack.Screen name="sayinglist"
      component={showSayingList} 
      options={{ headerShown: false }}
      />
      <MineStack.Screen name="setsaying"
      component={setSaying} options={{ headerShown:false }}/>
       <MineStack.Screen name="login"
      component={Login} 
      options={{ 
        headerTitle:(
          <Text style={{flex:1,textAlign:'center'}}>登录</Text>
        ),
        // headerRight: (
        // <View><Text></Text></View>
        // )
        
       }}
      />
      <MineStack.Screen name="register"
      component={Register} options={{ 
        headerTitle:(
          <Text style={{flex:1,textAlign:'center'}}>注册</Text>
        ),
      }}
      />
      <MineStack.Screen name="profile"
      component={Profile} options={{ 
        headerTitle:(
          <Text style={{flex:1,textAlign:'center'}}>个人资料</Text>
        ),
      }}
      />
    </MineStack.Navigator>
    
  );
}


const LoginRegisterStack=createStackNavigator();
function LoginRegisterStackScreen(){
  return (
    <LoginRegisterStack.Navigator>
      <LoginRegisterStack.Screen name="infocard"
      component={MineScreen} options={{headerShown:false}}/>
      <LoginRegisterStack.Screen name="login"
      component={Login} 
      options={{  }}
      />
      <LoginRegisterStack.Screen name="register"
      component={Register} options={{ }}/>
    </LoginRegisterStack.Navigator>
  );
}



const testStack=createStackNavigator();
function testStackScreen(){
  return (
    <testStack.Navigator>
      <testStack.Screen name="home"
      component={StatiScreen} />
      <testStack.Screen name="test"
      component={testPage} />
    </testStack.Navigator>
  );
}

export default function App() {
    console.log("aaaaaaaaaaaaaaaaaaaaa");
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '习惯') {
                if(focused){
                 return (
                    <Image style={styles.tabBarIcon} source={require('./img/page1_2.png')}/>
                );
                }else{
                     return (
                    <Image style={styles.tabBarIcon} source={require('./img/page1_1.png')}/>
                );
                }
              
            } else if (route.name === '统计') {
                if(focused){
                return (
                    <Image style={styles.tabBarIcon} source={require('./img/page2_2.png')}/>
                );
                }else{
                     return (
                    <Image style={styles.tabBarIcon} source={require('./img/page2_1.png')}/>
                );
                }
             
            }else if (route.name === '日记') {
              if(focused){
              return (
                  <Image style={styles.tabBarIcon} source={require('./img/page3_2.png')}/>
              );
              }else{
                   return (
                  <Image style={styles.tabBarIcon} source={require('./img/page3_1.png')}/>
              );
              }
           
          }else if (route.name === '我的') {
            if(focused){
            return (
                <Image style={styles.tabBarIcon} source={require('./img/page4_2.png')}/>
            );
            }else{
                 return (
                <Image style={styles.tabBarIcon} source={require('./img/page4_1.png')}/>
            );
            }
         
        }

            // You can return any component that you like here!
            
          },
        })}
        tabBarOptions={{
          activeTintColor: '#33cc99',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 54,
           // borderTopColor: '#ccc',
            borderTopWidth:1,
            padding: 2,
        },
          labelStyle:{ //标签文字大小
            fontSize: 12
          },  
        }}
      >
        <Tab.Screen name="习惯" component={CustomScreen} options={{ headerShown: false }} />
        <Tab.Screen name="统计" component={testStackScreen}  options={{ headerShown: false }}/>
        <Tab.Screen name="日记" component={DiaryScreen}  options={{ headerShown: false }} />
        <Tab.Screen name="我的" component={MineStackScreen}  options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 30,
        height: 30,
    }
});