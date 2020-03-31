
import React, { useState, useEffect,useContext  } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Spinner, Select, Avatar, Button, Icon, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Container, Header, Content, Accordion, List, ListItem, Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'
 

  

export const CalendarDetailScreen = ({ route,navigation }) => {

 


    const BackwardIcon = (style) => (
        <Icon {...style} name='arrow-back' />
    );
    const navigateBack = () => {
        navigation.goBack()

    }
    const BackAction = () => (
        <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
    );

    useEffect(()=>{
        console.debug("route detailed...:",route.params.date, route.params.judge)
    },[])

    return (<SafeAreaView style={{ flex: 1 }}>
     <TopNavigation title='Daily Calendar' alignment='center' leftControl={BackAction()} />

    </SafeAreaView>)
}