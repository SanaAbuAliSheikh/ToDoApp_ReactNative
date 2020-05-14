import React, { Component } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import * as firebase from 'firebase';


var configuration={
        apiKey: "AIzaSyAlgJcSqdopzp2zg02resbayy_lx_97f5w",
        authDomain: "sampledb-db05b.firebaseapp.com",
        databaseURL: "https://sampledb-db05b.firebaseio.com",
        projectId: "sampledb-db05b",
        storageBucket: "sampledb-db05b.appspot.com",
        messagingSenderId: "122036678713",
        appId: "1:122036678713:web:f44fbf0574a5862a0edde8",
        measurementId: "G-CN72P2X8W2",
    }
const FirebaseConfig=firebase.initializeApp(configuration);  
export default FirebaseConfig;
