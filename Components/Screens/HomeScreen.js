import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native';

import Styles from '../Styling/Styles';
import BackImg from '../Images/SAMPLE3.png'

class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
        }
        
    }
    render(){
        
      return(
            
            <ImageBackground source={BackImg} style={Styles.main}> 
                <TouchableOpacity >
                    <Text style={Styles.buttonProp} >Welcome</Text>
                </TouchableOpacity>
            </ImageBackground>

        );
    }
    
}
export default HomeScreen;