import React,{Component} from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native';
import {ListItem,Icon} from 'react-native-elements';
import firebase from 'firebase';
import Myheader from '../Components/MyHeader';
import db from '../config.js';

export default class NotificationScreen extends Compoment{
render(){
return(
    <View>
        <Text> NotificationScreen</Text>
        </View>
)
}
}