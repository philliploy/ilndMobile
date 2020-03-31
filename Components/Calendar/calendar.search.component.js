import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Spinner, Select, Avatar, Button, Icon, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Container, Header, Content, Accordion, List, ListItem, Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'

import Test from './test'

 

const BackwardIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});





export const CalendarSearchScreen = ({ navigation }) => {


  const [selectedOption, setSelectedOption] = useState({
    date: [],
    judge: []
  })




  const refresh = (option) => {



    // console.log('state changed', selectedDateOption)
    let dataArray = []
    let dataJudge = []
    API.getCalendar().then(_response => {
      //  console.debug(_response.data)
      let prevDate = ""
      let prevFirstname = ""
      let prevLastname = ""
      for (let i = 0; i < _response.data.length; i++) {
        if (moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY") != prevDate)
          dataArray.push({
            text: moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY")
          })
        prevDate = moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY")

        if (_response.data[i].Firstname != prevFirstname && _response.data[i].Lastname != prevLastname) {
          dataJudge.push({
            text: 'Judge ' + _response.data[i].Firstname + ' ' + _response.data[i].Lastname

          })
        }
        prevFirstname = _response.data[i].Firstname
        prevLastname = _response.data[i].Lastname
      }


      if (option === "date") {
        setSelectedOption({
          judge: selectedOption.judge,
          date: dataArray
        })
      }
      else if (option === "judge") {
        setSelectedOption({
          date: selectedOption.date,
          judge: dataJudge
        })
      }
      else {
        setSelectedOption({ date: dataArray, judge: dataJudge })

      }


    })
  }
  useEffect(() => {
    refresh("")


  }, []);


  const renderLoading = () => (
    <View style={styles.loading}>
      <Spinner />
    </View>
  );
  const navigateForward = (option) => {

    setSelectedOption({ date: selectedOption.date, judge: option })



    console.debug("forward...", option, selectedOption.date)
    navigation.navigate('CalendarDetail',{date: selectedOption.date.text, judge:option.text})



  };

  const navigateBack = () => {
    navigation.goBack()

  }
  const BackAction = () => (
    <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
  );


  return (

  

      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView style={{ flex: 1 }}>
          <TopNavigation title='Daily Calendar' alignment='center' leftControl={BackAction()} />

          {console.debug("setSelectedOption----:", selectedOption.date, selectedOption.judge)}
      

          <Select data={selectedOption.date}
            selectedOption={selectedOption.date}
            onSelect={(option1) => setSelectedOption({ judge: selectedOption.judge, date: option1 })}
            placeholder="Select Date.."
            onFocus={() => { refresh("date") }}

          />

          <Select data={selectedOption.judge}
            selectedOption={selectedOption.judge}
            onSelect={(option2) => navigateForward(option2)}
            placeholder="Select judge"
            onFocus={() => { refresh("judge") }}

          />



        </ScrollView>
      </SafeAreaView>
 

  )
}

