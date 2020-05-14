import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

//Styling
const styles = StyleSheet.create({
    buttonProp:{
      padding:10,
      width:300,
      backgroundColor:'black',
      borderRadius:3,
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      color:'white',
      fontSize:15,
    },
    main:{
      flex:1,
      justifyContent: 'center',
      alignItems: "center",
      textAlign: "center",
   },
   center:{
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
   },
    error: {
      color: 'red',
      justifyContent: 'center',
      alignItems: "center",
      textAlign: "center",
    },
    btnTrans: {

      color:'white',
      fontSize:11,
    },
    whiteClr:{
      color:'white',
      padding:10,
      width:300,
    },
    whiteClr1:{
      color:'white',
      padding:10,
      width:300,
    },
    drawerSlideImg:{
      height:100,
      width:280,
      alignItems: "center",
    },
    loginTxt:{
      fontSize:30,
      fontFamily:"Roboto",
    },
    Nav:{
      fontSize:20,
      fontFamily:"Roboto",
      justifyContent: 'center',
      alignItems: "center",
      textAlign: "center",
    }
  });
  export default styles;