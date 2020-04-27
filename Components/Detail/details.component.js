import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Image, View, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Divider, Icon , Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import FitImage from 'react-native-fit-image';
import ResponsiveImage from "react-native-responsive-image";
 
  
import { isAndroid } from 'react-native-device-detection';
import { ScrollView } from 'react-native-gesture-handler';

import { CalendarSearch } from '../Calendar/calendar.search.component'
import { ILNDWeb } from '../ILNDWeb/ILNDWeb.component'
import {News} from '../News/news.component'
import {Direction} from '../Direction/direction.component'

import {Question} from '../Question/question.component'

const ForwardIcon = (style) => (
  <Icon name='arrow-forward' />
);

export const DetailsScreen = ({ navigation }) => {

  const navigateForward = (page) => {

    switch(page){
      case "Calendar":
      navigation.navigate('CalendarSearch');
      break;
      case "ILNDWeb":
      navigation.navigate('ILNDWeb');
      break;
      case "News":
      navigation.navigate('News');
      break;
      case "Direction":
      navigation.navigate('Direction');
      break;
      case "Question":
      navigation.navigate('Question');
      break;
    }


  };

  const BackAction = () => (
    <TopNavigationAction icon={ForwardIcon} onPress={navigateForward} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>



      <Divider />

      <View style={styles.container}>

        <View style={styles.backgroundContainer}>
          <FitImage source={require('./images/blueabstract.jpg')} style={styles.fitImage} />
        </View>



        <View style={styles.overlay}>
          <Text style={styles.headline}>United States Federal District for the Northern District of Illinois</Text>

        </View>



        <View style={styles.overlay}>
          <View
            style={{
              borderRadius: 4,
              borderWidth: 0.5,


              alignItems: "center",

              position: "absolute",
              shadowOpacity: 0.75,
              shadowRadius: 5,
              shadowColor: 'black',
              shadowOffset: { height: 0, width: 0 },

              width: "100%"
            }}
          >
            {
              isAndroid === false ? (
                <Image style={styles.logo} width={Dimensions.get("window").width < Dimensions.get("window").height ? wp("100%") : wp("84%")}
                  marginTop={Dimensions.get("window").width < Dimensions.get("window").height ? hp('20') : hp('1')}
                  height={Dimensions.get("window").width < Dimensions.get("window").height ? hp("44") : hp("90")} source={require('./images/BW_ILNDSEAL.png')} />

              ) :
                <Image style={styles.logo} width={Dimensions.get("window").width < Dimensions.get("window").height ? wp("100%") : wp("84%")}
                  marginTop={Dimensions.get("window").width < Dimensions.get("window").height ? hp('20') : hp('1')}
                  height={Dimensions.get("window").width < Dimensions.get("window").height ? hp("60") : hp("90")} source={require('./images/BW_ILNDSEAL.png')} />


            }
          </View>



        </View>


        <ScrollView style={{ flex: 1 }}>

          <View style={styles.overlay}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                position: "absolute",
                shadowOpacity: 0.75,
                shadowRadius: 5,
                shadowColor: 'black',
                shadowOffset: { height: 0, width: 0 },
                marginTop: "36.21%",

              }}
            >


              <Text style={{ margin: "6.6%" }}>Daily Calendar</Text>
              {
                isAndroid === false ?
                  <Text style={{ margin: "8.2%" }}>Home Page</Text>
                  :
                  <Text style={{ margin: "1.2%" }}>Home Page</Text>
              }
              <Text style={{ margin: "7.6%" }}>News</Text>

            </View>
          </View>


          <View style={styles.overlay}>
            <View marginTop={"76.1%"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                position: "absolute",
                shadowOpacity: 0.75,
                shadowRadius: 5,
                shadowColor: 'black',
                shadowOffset: { height: 0, width: 0 },
                width: "100%"

              }}
            >
              <Text style={{ margin: "9.6%" }}>Directions</Text>

              <Text style={{ margin: "9.6%" }}>Ask Questions</Text>

              <Text style={{ margin: "11.6%" }}> </Text>

            </View>
          </View>


          <View style={styles.overlay}>
            <View
              style={{
               

                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",

                shadowOpacity: 0.75,
                shadowRadius: 5,
                shadowColor: 'black',
                shadowOffset: { height: 0, width: 0 },
                marginTop: "21%",


                width: "100%"
              }}
            >
              <TouchableOpacity style={{ margin: "10%" }} onPress={() => navigateForward("Calendar")} >

                <View    >
                  <ResponsiveImage
                    source={require("./images/iso_icons8-calendar-96.png")}
                    initWidth="60"
                    initHeight="60"


                  />
                </View>

              </TouchableOpacity>

              <TouchableOpacity style={{ margin: "10%" }} onPress={() => navigateForward("ILNDWeb")}>
                <View   >
                  <ResponsiveImage
                    source={require("./images/iso_icons8-home-96.png")}
                    initWidth="60"
                    initHeight="60"

                  />
                </View>

              </TouchableOpacity>
              <TouchableOpacity style={{ margin: "10%" }} onPress={() => navigateForward("News")}>
                <View   >
                  <ResponsiveImage
                    source={require("./images/iso_icons8-us-news-96.png")}
                    initWidth="60"
                    initHeight="60"

                  />
                </View>
              </TouchableOpacity>



            </View>


          </View>


          <View style={styles.overlay}>
            <View
              style={{
               

                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",

                shadowOpacity: 0.75,
                shadowRadius: 5,
                shadowColor: 'black',
                shadowOffset: { height: 0, width: 0 },
                marginTop: "3%",

                width: "100%"
              }}
            >
              <TouchableOpacity style={{ margin: "10%" }}  onPress={() => navigateForward("Direction")}  >

                <View    >
                  <ResponsiveImage
                    source={require("./images/ios-icons8-google-maps-96.png")}
                    initWidth="60"
                    initHeight="60"


                  />
                </View>

              </TouchableOpacity>

              <TouchableOpacity style={{ margin: "10%" }} onPress={() => navigateForward("Question")}  >
                <View   >
                  <ResponsiveImage
                    source={require("./images/iso_icons8-ask-question-96.png")}
                    initWidth="60"
                    initHeight="60"

                  />
                </View>

              </TouchableOpacity>

              <View style={{ margin: "17%" }} >

              </View>


            </View>

          </View>



        </ScrollView>

      </View>




    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {



    width: "100%"
  },
  logo: {

    alignSelf: 'center',
    position: "absolute",
    opacity: 0.5

  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',

    position: "absolute",
    color: "black",
    marginTop: "10%"

  }, fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
});