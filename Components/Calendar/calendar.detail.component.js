
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {   Button,
    Icon,
    List,
    ListItem, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Container, Header, Content, Accordion, Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'



export const CalendarDetailScreen = ({ route, navigation }) => {

     const [listItemData, setListIitemData]=useState({
         list:[]
     })

    const data =  []
    
      const renderItemIcon = (style) => (
        <Icon {...style} name='person'/>
      );
    
      const renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.CaseNo} ${index + 1}`}
          description={`${item.CaseTitle} ${index + 1}`}
          icon={renderItemIcon}
         
        />
      );
    

    const BackwardIcon = (style) => (
        <Icon {...style} name='arrow-back' />
    );
    const navigateBack = () => {
        navigation.goBack()

    }
    const BackAction = () => (
        <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
    );
   

    
    useEffect(() => {
        //   console.debug("route detailed...:", route.params.date, route.params.judge)

        API.getCalendar().then(_response => {


            let newData = _response.data.filter(calendar => {
                //   console.debug(moment(route.params.date,"MM/DD/YYYY").format("YYYY-MM-DD"), calendar.Date)
                return route.params.judge.indexOf(calendar.Lastname) > -1 && moment(route.params.date, "MM/DD/YYYY").format("YYYY-MM-DD") === calendar.Date
            })
            console.debug(newData)
            setListIitemData({
                list:newData
            })
        })
    }, [])

    return (<SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title='Daily Calendar' alignment='center' leftControl={BackAction()} />
       
        <List
      data={listItemData.list}
      renderItem={renderItem}
    />
       
    </SafeAreaView>)
}