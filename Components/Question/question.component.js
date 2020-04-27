import React, { Component, useState, useEffect, ActivityIndicator } from "react";
import {
  StyleSheet,


  SafeAreaView,
} from "react-native";
import { Button, Label, Item, Input, Textarea, Form, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { WebView } from 'react-native-webview'
import HTML from 'react-native-render-html'
import API from '../../utils/api'
import moment from 'moment'



const BackwardIcon = () => (
  <Icon name='arrow-back' />
);


export const QuestionScreen = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [comment, setComment] = useState("")

  const handleSumbit = () => {
    console.debug(email)
    console.debug(subject)
    console.debug(comment)
const message ="https://www.ilnd.uscourts.gov/MobileEmail.aspx?name=phil&email=ploy3_98@yahoo.com&questionto=phillip_loy@ilnd.uscourts.gov&subject=test email&comment=this is an email test"  


navigateForward("QuestionWebview",message)

// if (check1.IsChecked == true)
// {
//     DisplayList("https://www.ilnd.uscourts.gov/web/api/judgestaff/");
// }
// else
//     DisplayList("https://www.ilnd.uscourts.gov/web/api/StaffContacts/");
  }
  const navigateBack = () => {
    navigation.navigate("Details");

  }

  const navigateForward = (page,message) => {
    navigation.navigate(page,{message:"https://www.ilnd.uscourts.gov/MobileEmail.aspx?"+message});
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackwardIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <TopNavigation title='Ask a question?' alignment='center' leftControl={BackAction()} />
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Your Email Address</Label>
            <Input name="email" onChangeText={email => setEmail(email)} />
          </Item>
          <Item floatingLabel last>
            <Label>Subject</Label>
            <Input name="subject" onChangeText={subject => setSubject(subject)} />
          </Item>




          <Textarea name="comment" floatingLabel last rowSpan={5} bordered placeholder="Comment" onChangeText={comment => setComment(comment)} />


          <Button full light onPress={() => handleSumbit()}>
            <Text>Send Email</Text>

          </Button>

        </Form>


      </Content>

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  input: {
    margin: 8,
  },
});
