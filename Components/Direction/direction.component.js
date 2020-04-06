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
import MapView from "react-native-maps"
import MapViewDirections from 'react-native-maps-directions';

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyC1zYXzqjM9M5smGo_O0eUvV7uypDg4gPg';

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
    

    return (
        <SafeAreaView style={{ flex: 1 }}>

         <TopNavigation title={'\t\t\t\tDirections'} leftControl={BackAction()} />
{/*   
            <MapView   initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}> 
                <MapView.Marker coordinate={origin} />
                <MapView.Marker coordinate={destination} />
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                />
              
            </MapView>  */}

        </SafeAreaView>
    )
}