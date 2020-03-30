import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Select, Avatar, Button, Icon, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Container, Header, Content, Accordion, List, ListItem, Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'

const ForwardIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);


export const CalendarSearchScreen = ({ navigation }) => {


  const [selectedDateOption, setSelectedDateOption] = useState([]);

   
  const [selectedJudgeOption, setSelectedJudgeOption] = useState([]);


  useEffect(() => {
   // console.log('state changed', selectedDateOption)
    let dataArray = []
    let dataJudge = []
    API.getCalendar().then(_response => {
    //  console.debug(_response.data)
      let prevDate = ""
      let prevFirstname = ""
      let prevLastname=""
      for (let i = 0; i < _response.data.length; i++) {
        if (moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY") != prevDate)
          dataArray.push({
            text: moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY")
          })
           prevDate = moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY")
    
         if(_response.data[i].Firstname != prevFirstname && _response.data[i].Lastname != prevLastname){
           dataJudge.push({
            text:'Judge '+_response.data[i].Firstname +' '+_response.data[i].Lastname
            
           })
         }
        prevFirstname = _response.data[i].Firstname
        prevLastname=_response.data[i].Lastname
      }

     // console.debug(dataArray)
     // console.debug( dataJudge)
      setSelectedDateOption(dataArray)

      setSelectedJudgeOption(dataJudge)
    })
    // write your callback function here
  },[] );


  const navigateForward = () => {

    navigation.navigate('Calendar');

  };

  const navigateBack = () => {
    navigation.goBack()

  }
  const BackAction = () => (
    <TopNavigationAction icon={ForwardIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView style={{ flex: 1 }}>
        <TopNavigation title='Daily Calendar' alignment='center' leftControl={BackAction()} />

        <Layout  >
          <Select data={selectedDateOption}
       
           onSelect={()=>setSelectedDateOption}
            placeholder="Select Date.." />
        </Layout>

 
         <Layout  >
           <Select data={selectedJudgeOption}
            selectedOption={selectedJudgeOption}
             onSelect={()=>setSelectedJudgeOption}
             placeholder="Select judge" />
         </Layout>   

      </ScrollView>
    </SafeAreaView>

  )
}

