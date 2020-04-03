import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,

  SafeAreaView,
} from "react-native";
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { WebView } from 'react-native-webview'

const BackwardIcon = () => (
  <Icon name='arrow-back' />
);



export const NewsWebviewScreen = ({ route,navigation }) => {


  const navigateBack = () => {
    navigation.navigate("News");
  
  }
  const BackAction = () => (
    <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
  );
  


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <TopNavigation title='ILND Document' alignment='center' leftControl={BackAction()} />

      <WebView source={{ uri: route.params.pdf}} />





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