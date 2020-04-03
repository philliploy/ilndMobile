import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,

  ScrollView,
  TouchableOpacity,

  SafeAreaView,
} from "react-native";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { WebView } from 'react-native-webview'
import HTML from 'react-native-render-html'
import API from '../../utils/api'
import moment from 'moment'


const BackwardIcon = () => (
  <Icon name='arrow-back' />
);



export const NewsScreen = ({ navigation }) => {

  const [newsState, setNewsState] = useState({
    news: []
  })


  useEffect(() => {
    API.getNews().then(_response => {
      console.debug(_response.data)
      setNewsState({
        news: _response.data
      })
    })
  }, []);

  const navigateBack = () => {
    navigation.goBack()

  }
  const BackAction = () => (
    <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
  );



  return (
    <SafeAreaView style={{ flex: 1 }}>

      <TopNavigation title='Back to Menu Icons' leftControl={BackAction()} />

      <Container>
        <Header />

        <Content>
          <List>
            {
              newsState.news.map(news => {
                return (
                  <Content>
                     
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{ uri: 'https://www.ilnd.uscourts.gov/'+news.image }} />
                      </Left>
                      <Body>
                        <HTML html={news.postedDate+"\n"+news.headline} />  
                     
                      </Body>
                      
                    </ListItem>
                  </Content>
                )
              })
            }

          </List>
        </Content>
      </Container>



    </SafeAreaView>
  );


}


const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#0c084c"
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  icon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0c084c"
  }
});