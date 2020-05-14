import React, { Component } from 'react';
import {View, Text, Button, TextInput, ImageBackground} from 'react-native';

import Styles from '../Styling/Styles';
import BackImg from '../Images/SAMPLE3.png'

import FirebaseConfig from '../Firebase/FirebaseFile';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignInScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:'',
            isAuthenticated:false,
        }


        // Handling Events with Binding
        this.signInUser=this.signInUser.bind(this);
        
    }

    signInUser(){
        const {email,password}= this.state; // Destructuring
        
        FirebaseConfig.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.setState({
                isAuthenticated:true,
                email:'',
                password:'',
                },
            );
            this.props.navigation.navigate('Home',{
                status:2,
            });
        })
        .catch((err)=>{
            this.setState({
                error:err['message'],
                email:'',
                password:'',
                },
            );
            console.log(err);
        })
    }
    render(){
        return(
            
            <ImageBackground source={BackImg} style={Styles.main} >
                <Text style={Styles.loginTxt}>Sign In</Text>
                <TextInput placeholderTextColor="rgba(255,255,255,0.7)" style={Styles.whiteClr1} underlineColorAndroid="rgba(255,255,255,0.5)" keyboardType="email-address" placeholder='email' value={this.state.email} onChangeText={(email)=>this.setState({email})} />
                <TextInput placeholderTextColor="rgba(255,255,255,0.7)" style={Styles.whiteClr} secureTextEntry underlineColorAndroid="rgba(255,255,255,0.5)" placeholder='password' value={this.state.password} onChangeText={(password)=>this.setState({password})} />
                
                <TouchableOpacity onPress={this.signInUser}>
                    <Text style={Styles.buttonProp} >Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sign Up')} >
                    <Text style={Styles.btnTrans}>Don't have a account? Sign Up</Text>
                </TouchableOpacity>

                <Text style={Styles.error}>{this.state.error}</Text>
            </ImageBackground>
        );
    }
}
export default SignInScreen;