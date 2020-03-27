import React,{useState,useEffect} from 'react';
import { SafeAreaView,StyleSheet  } from 'react-native';
import {Select,Avatar,Button, Icon,Divider, Layout, Text, TopNavigation, TopNavigationAction  } from '@ui-kitten/components';
import { Container, Header, Content, Accordion ,List, ListItem,Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../utils/api'
 import moment from 'moment'

const ForwardIcon = (style) => (
    <Icon {...style} name='arrow-back' />
  );

  
export const CalendarSearchScreen = ({ navigation }) => {
  const data = {
    text:"option1",
    text:"option2",
    text:"option3"
  };

 

  const [selectedOption, setSelectedOption] = useState(data[0]);
  useEffect(() => {
    console.log('state changed', selectedOption)

    API.getCalendar().then(response=>{
      console.debug(response)
       
    })
    // write your callback function here
  }, [selectedOption]);
   

    const navigateForward = () => {

        navigation.navigate('Calendar');
        
      };

      const navigateBack= () => {
          navigation.goBack()

      }
      const BackAction = () => (
        <TopNavigationAction icon={ForwardIcon} onPress={navigateBack} />
      );

    return(
        <SafeAreaView style={{ flex: 1 }}>
       
           <ScrollView style={{ flex: 1 }}>
              <TopNavigation title='Daily Calendar' alignment='center' leftControl={BackAction()} />
              
                 <Layout  >
                 <Select   data={data}
        selectedOption={selectedOption}
        onSelect={setSelectedOption} 
        placeholder="Select Date" />
                 </Layout>
         
           </ScrollView>
       </SafeAreaView>

    )
}

 