
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  Icon,

  TopNavigation, TopNavigationAction
} from '@ui-kitten/components';
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
import moment from 'moment'



export const CalendarDetailScreen = ({ route, navigation }) => {

  const [listItemData, setListIitemData] = useState({
    list: [],
    room:""
  })

  const data = []

  const renderItemIcon = (style) => (
    <Icon {...style} name='person' />
  );

  // const renderItem = ({ item, index }) => (
  //   <ListItem
  //     title={`${item.CaseNo} ${index + 1}`}
  //     description={`${item.CaseTitle} ${index + 1}`}
  //     icon={renderItemIcon}

  //   />
  // );


  const BackwardIcon = (style) => (
    <Icon {...style} name='arrow-back' />
  );
  const navigateBack = () => {
    navigation.goBack()

  }
  const BackAction = () => (
    <TopNavigationAction title="Daily Calendar" icon={BackwardIcon} onPress={navigateBack} />
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
        list: newData,
        room:  newData[0] != undefined? newData[0].CourtroomNo :""
      })
    })
  }, [])

  return (<SafeAreaView style={{ flex: 1 }}>
    <TopNavigation style={{ height: "10%" }} title={ route.params.judge==="All"?"Daily Calendar on " + route.params.date.toString(): route.params.date.indexOf("/") === -1 ? "" : route.params.judge.substring(route.params.judge.length - 1, route.params.judge.length) === "s" ? route.params.judge + "'\nDaily Calendar on " : route.params.judge + "'s\nDaily Calendar on " + route.params.date.toString()+"\n"+listItemData.room } alignment='center' leftControl={BackAction()} />
 
    <Container>
      <Header />
      <Content>
        <List>
          {listItemData.list.map(list => {
             
            return (
              <Content>
                <ListItem style={{backgroundColor:"#2853B0"}} itemDivider>
                     <Text style={{color:"white"}}>{list.Time != undefined ? moment(list.Time, "HH:mm a").format("hh:mm a") : ""}</Text>

                </ListItem>
                <ListItem >
                     <Text>{list.CaseNo!= undefined ? list.CaseNo.trim() : ""} 
                   
                     </Text>
 
                </ListItem>
                <ListItem>
                  <Text>{list.CaseTitle != undefined ? list.CaseTitle.trim() : ""}</Text>
                </ListItem>


              </Content>
            )
          })}

        </List>
      </Content>
    </Container>
  </SafeAreaView>)
}