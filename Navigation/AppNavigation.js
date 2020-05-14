import React from 'react';

import BackImg from '../Components/Images/SAMPLE3.png'

import Styles from '../Components/Styling/Styles';

import { NavigationContainer,TabActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../Components/Screens/HomeScreen';
import SignInScreen from '../Components/Screens/SignInScreen';
import SignUpScreen from '../Components/Screens/SignUpScreen';
import { View,Image,Text,StyleSheet,TouchableOpacity } from 'react-native';


//Screen Navigation
function AppStack(){
    const Stack=createDrawerNavigator();
    return(
        <Stack.Navigator initialRouteName='Sign In' drawerContent={customDrawerComponent} drawerOpenRoute="DrawerOpen" DrawerCloseRoute="DrawerClose" DrawerToggleRoute="DrawerToggle" >
            
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Sign In" component={SignInScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </Stack.Navigator>
    );
}
//Custom Drawer Navigation
const customDrawerComponent =(props)=>(
   <View><Image source={BackImg} style={Styles.drawerSlideImg}>
    </Image>
    <TouchableOpacity style={{marginTop:60}} onPress={()=> props.navigation.navigate('Home')}>
            <Text style={Styles.Nav}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:60}} onPress={()=> props.navigation.navigate('Sign In')}>
                <Text style={Styles.Nav}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:60}} onPress={()=> props.navigation.navigate('Sign Up')}>
                <Text style={Styles.Nav}>Sign Up</Text>
            </TouchableOpacity></View>
    )

export default function AppNavigation(){
    return(
      <NavigationContainer>
          <AppStack />
      </NavigationContainer>  
    );
}
