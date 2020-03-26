import React from 'react';
import { SafeAreaView,StyleSheet  } from 'react-native';
import {Avatar,Button, Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { Container, Header, Content, Accordion ,List, ListItem } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
// import { Avatar } from 'react-native-elements';
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export const CalendarScreen = ({ navigation }) => {

   const navigateDetails = () => {
       navigation.goBack();
   };

   const BackAction = () => (
    <TopNavigationAction icon={ForwardIcon} onPress={navigateForward} />
  );
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      margin: 16 ,
      
    },
  });
  return (

   <SafeAreaView style={{ flex: 1 }}>
       
       <ScrollView style={{ flex: 1 }}>
    
 
      <Button onPress={navigateDetails}>OPEN DETAILS</Button>

      <Layout style={styles.container}>

 
        <Avatar style={styles.avatar} size='large' source={require('./images/icons8-calendar-48.png')} />
        <Avatar style={styles.avatar} size='large' source={require('./images/icons8-calendar-48.png')} />

        <Avatar style={styles.avatar} size='large' source={require('./images/icons8-calendar-48.png')} />

        <Avatar style={styles.avatar} size='large' source={require('./images/icons8-calendar-48.png')} />



     
      </Layout>   
    
    
    
     <Accordion dataArray={dataArray}  />

     <List style={{overflowY:"scroll" }}>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", height:"1%" }}>
              <Text style={{color:"white"}}> A</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", width:"100%"}}>
              <Text style={{color:"white"}}> B</Text>
            </ListItem>   
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", width:"100%"}}>
              <Text style={{color:"white"}}> A</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", width:"100%"}}>
              <Text style={{color:"white"}}> B</Text>
            </ListItem>   
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", width:"100%"}}>
              <Text style={{color:"white"}}> A</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", width:"100%"}}>
              <Text style={{color:"white"}}> B</Text>
            </ListItem>   
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", width:"100%"}}>
              <Text style={{color:"white"}}> A</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider  style={{backgroundColor:"blue", color:"white", width:"100%"}}>
              <Text style={{color:"white"}}> B</Text>
            </ListItem>   
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
            
          </List>


    
          </ScrollView>
    </SafeAreaView>

  );



}


