
import React, { useState, useEffect,useContext  } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Spinner, Select, Avatar, Button, Icon, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Container, Header, Content, Accordion, List, ListItem, Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'
import  Context from "../Calendar/calendarContext";

  

export const CalendarDetailScreen = ({ navigation }) => {

    const calendar = useContext(Context);

    console.debug("detailed:",calendar.judge,calendar.date)
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
    //    console.debug(calendar.selectedJudgeOption.text)
    },[])

    return (<SafeAreaView style={{ flex: 1 }}>
     <TopNavigation title='Daily Calendar' alignment='center' leftControl={BackAction()} />

    </SafeAreaView>)
}