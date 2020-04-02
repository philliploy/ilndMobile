import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Icon,Spinner, Select,  TopNavigation, TopNavigationAction } from '@ui-kitten/components';
 
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'

 


const BackwardIcon = () => (
  <Icon  name='arrow-back' />
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
    judge: [],
    allJudges:[] 
  })




  const refresh = (option) => {



    // console.log('state changed', selectedDateOption)
    let dataArray = []
    let dataJudge = []
 
    API.getCalendar().then(_response => {
      //
      let prevDate = ""
      let prevFirstname = ""
      let prevLastname = ""
      for (let i = 0; i < _response.data.length; i++) {
        if (moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY") != prevDate)
        
        dataArray.push({
            text: moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY")
          })
        prevDate = moment(_response.data[i].Date, "YYYY-MM-DD").format("MM/DD/YYYY")
  
      }
      dataJudge.push({text:"All"})
      _response.data.sort((a, b) => { return a.Lastname.localeCompare(b.Lastname) })
      for (let i = 0; i < _response.data.length; i++) {

        if (_response.data[i].Firstname != prevFirstname && _response.data[i].Lastname != prevLastname) {
          
          dataJudge.push({
            text: 'Judge ' + _response.data[i].Firstname + ' ' + _response.data[i].Lastname

          })
        }
        prevFirstname = _response.data[i].Firstname
        prevLastname = _response.data[i].Lastname
      }



      if (option === "date") {
        //dataArray.sort((a,b)=>{ return  a.Date.localeCompare(b.Date)  })
        setSelectedOption({
          judge: selectedOption.judge,
          date: dataArray,
          allJudges: _response.data
        })
      }
      else if (option === "judge") {

        setSelectedOption({
          date: selectedOption.date,
          judge: dataJudge ,
          allJudges: _response.data
        })
      }
      else {

        setSelectedOption({ date: dataArray, judge: dataJudge,
          allJudges: _response.data })

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

    setSelectedOption({ date: selectedOption.date, judge: option,allJudges:selectedOption.allJudges })



    //console.debug("forward...", option, selectedOption.date)
    navigation.navigate('CalendarDetail', { date: selectedOption.date.text, judge: option.text,allJudges:selectedOption.allJudges })



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

        {/* {console.debug("setSelectedOption----:", selectedOption.date, selectedOption.judge)} */}


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

