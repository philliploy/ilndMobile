
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet,TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview'
import {

  Icon,
  TopNavigation, TopNavigationAction
} from '@ui-kitten/components';
import { Container, Header, Content, List, ListItem, Text, Thumbnail, Item, Input } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'

let time = ""

export const CalendarDetailScreen = ({ route, navigation }) => {

  const [listItemData, setListIitemData] = useState({
    list: [],
    room: "",
    time: ""
  })

  const data = []

  const renderItemIcon = (style) => (
    <Icon {...style} name='person' />
  );
  const navigateForward = (page,CaseNo) => {

    switch(page){
      case "CalendarWebView":
      navigation.navigate('CalendarWebview',{CaseNo:CaseNo});
      break;
     
    }


  };



  const BackwardIcon = () => (
    <Icon name="arrow-back" />
  );
  const navigateBack = () => {
    navigation.goBack()

  }
  const BackAction = () => (
    <TopNavigationAction title="Daily Calendar" icon={BackwardIcon} onPress={navigateBack} />
  );



  useEffect(() => {

    API.getCalendar().then(_response => {
      let newData;
      console.debug(route.params.judge)
      if (route.params.judge === "All") {
        _response.data.sort((a, b) => { return a.Lastname.localeCompare(b.Lastname) || moment(a.Time, "hh:mm a") - moment(b.Time, "hh:mm a") })

        newData = _response.data.filter(calendar => moment(route.params.date, "MM/DD/YYYY").format("YYYY-MM-DD") === calendar.Date)
      }
      else {
        _response.data.sort((a, b) => { moment(a.Time, "hh:mm a") - moment(b.Time, "hh:mm a") })
        newData = _response.data.filter(calendar => {
          //   console.debug(moment(route.params.date,"MM/DD/YYYY").format("YYYY-MM-DD"), calendar.Date)
          return route.params.judge.indexOf(calendar.Lastname) > -1 && moment(route.params.date, "MM/DD/YYYY").format("YYYY-MM-DD") === calendar.Date
        })
      }

      //   console.debug(newData)
      setListIitemData({
        list: newData,
        room: newData[0] != undefined ? newData[0].CourtroomNo : "",
        time: listItemData.time
      })
    })
  }, [])

  return (<SafeAreaView style={{ flex: 1 }}>
    <TopNavigation style={{ height: "10%" }} title={route.params.judge === "All" ? "Daily Calendar on " + route.params.date.toString() : route.params.date.indexOf("/") === -1 ? "" : route.params.judge.substring(route.params.judge.length - 1, route.params.judge.length) === "s" ? route.params.judge + "'\nDaily Calendar on " : route.params.judge + "'s\nDaily Calendar on " + route.params.date.toString() + "\n" + listItemData.room} alignment='center' leftControl={BackAction()} />
    <Item>
      <Icon active name='home' />
      <Input placeholder='Search' />
    </Item>
    <Container>

      <Content>
        <List>


          {listItemData.list.map((list, index) => {

            return (
              <Content key={index}>
                {time != moment(list.Time, "HH:mm a").format("hh:mm a") ? <Header /> : <Text></Text>}


                {time != moment(list.Time, "HH:mm a").format("hh:mm a") || index === 0 ?

                  (
                    <>
                      <ListItem style={{ backgroundColor: "#2853B0" }} itemDivider>
                        <Text style={{ color: "white", fontSize: 20 }}>{ "Judge " + list.Lastname.trim() +" - "+list.CourtroomNo }</Text>
                      </ListItem>

                      <ListItem style={{ backgroundColor: "#BAC0CB" }} itemDivider>
                        <Thumbnail square size={1} source={require('./images/gavel.png')} />
                        <Text style={{ fontSize: 20 }} >{list.Time != undefined ? time = moment(list.Time, "HH:mm a").format("hh:mm a") : ""}</Text>

                      </ListItem>

                    </>
                  )
                  : <Text></Text>}




                <ListItem >
                  {/* <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      /> */}

                  <TouchableOpacity   onPress={() => navigateForward("CalendarWebView",list.CaseNo)}>

                 
                      <Text style={{ fontSize: 20, color: "blue" }}>
                        {/* https://ecf.ilnd.uscourts.gov/cgi-bin/DktRpt.pl? */}
                        {list.CaseNo != undefined ? list.CaseNo.trim() : ""}

                      </Text>
              
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <Text style={{ fontSize: 20, textDecorationLine: true }}>{list.CaseTitle != undefined ? list.CaseTitle.trim() : ""} </Text>
                </ListItem>


              </Content>
            )
          })}

        </List>
      </Content>
    </Container>
  </SafeAreaView>)
}

// CalendarDetailScreen.navigationOptions = ({ navigation }) => ({
//   title: "test"
// });