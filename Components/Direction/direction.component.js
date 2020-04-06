import React, { Component, useState, useEffect } from "react";
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

import Geolocation from '@react-native-community/geolocation';

const BackwardIcon = () => (
    <Icon name='arrow-back' />
);


export const DirectionScreen = ({ navigation }) => {

    const [ locationState, setLocationState ] = useState({
        location: {}
    })

    useEffect(()=>{
        findCoordinates()
    },[])
    const BackAction = () => (
        <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
    );

    const navigateBack = () => {
        navigation.navigate("Details");

    }
  
    const findCoordinates = () => {

        Geolocation.getCurrentPosition(info => {
 
        
                    console.debug(info)
                   setLocationState({ location: info });
                   console.debug("location:",locationState.location)
        });



       
    };

    const handleGetDirections = () => {
       var lat=  locationState.location.coords !=undefined? locationState.location.coords.latitude :0  
       var long=  locationState.location.coords !=undefined? locationState.location.coords.longitude :0  

   
        const data = {
            source: {
                latitude:lat ,
                longitude: long
            },
            destination: {
                latitude: 41.8787033,
                longitude: -87.6289318
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
                    latitude: 41.8787033,
                    longitude: -87.6289318
                }

            ]
        }

        getDirections(data)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
 
            

            <TopNavigation title='Back to Menu Icons'   leftControl={BackAction()} />

             <WebView source={{ uri: `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=41.8787033%2C-87.6289318&origin=${locationState.location.coords !=undefined? locationState.location.coords.latitude :"0" }%2C${ locationState.location.coords !=undefined?    locationState.location.coords.longitude :"0" }&waypoints=41.8787033,-87.6289318` }} />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});