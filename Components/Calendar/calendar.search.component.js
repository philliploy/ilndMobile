import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet ,View} from 'react-native';
import {   Spinner,Select, Avatar, Button, Icon, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Container, Header, Content, Accordion, List, ListItem, Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'
 

const ForwardIcon = (style) => (
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


  const [selectedDateOption, setSelectedDateOption] = useState([]);


  const [selectedJudgeOption, setSelectedJudgeOption] = useState([]);

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
        setSelectedDateOption(dataArray)
      }
      else if (option === "judge") {
        setSelectedJudgeOption(dataJudge)
      }
      else {
        setSelectedDateOption(dataArray)
        setSelectedJudgeOption(dataJudge)
      }


    })
  }
  useEffect(() => {
  refresh("")
  

  }, []);

  
  const renderLoading = () => (
    <View style={styles.loading}>
      <Spinner/>
    </View>
  );
  const navigateForward = (option) => {
    console.debug(option)
    setSelectedJudgeOption(option)
    navigation.navigate('CalendarDetail');

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
            selectedOption={selectedDateOption}
            onSelect={(option1) => setSelectedDateOption(option1)}
            placeholder="Select Date.."
            onFocus={() => { refresh("date") }}
            
          />
           
             
        </Layout>


        <Layout  >
          <Select data={selectedJudgeOption}
            selectedOption={selectedJudgeOption}
            onSelect={(option2) => navigateForward(option2)}
            placeholder="Select judge"
            onFocus={() => { refresh("judge") }}

          />

        </Layout>

      </ScrollView>
    </SafeAreaView>

  )
}

