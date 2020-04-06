import React, { Component, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
   Button,
    SafeAreaView,
} from "react-native";
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { WebView } from 'react-native-webview'
import getDirections from 'react-native-google-maps-directions'
 

const BackwardIcon = () => (
    <Icon name='arrow-back' />
);


export const DirectionScreen = ({ navigation }) => {
    const BackAction = () => (
        <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
    );
  
    const navigateBack = () => {
        navigation.navigate("Details");
    
      }
    
    const  handleGetDirections = () => {
        const data = {
           source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: 41.992342,
            longitude: -87.730934
          },
          params: [
            {
              key: "travelmode",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ],
          waypoints: [
            {
              latitude: -33.8600025,
              longitude: 18.697452
            },
            {
              latitude: -33.8600026,
              longitude: 18.697453
            },
               {
              latitude: -33.8600036,
              longitude: 18.697493
            }
          ]
        }
     
        getDirections(data)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

         <TopNavigation title={'\t\t\t\tDirections'} leftControl={BackAction()} />
   
         <View  >
        <Button onPress={handleGetDirections} title="Get Directions" />
      </View>
        </SafeAreaView>
    )
}