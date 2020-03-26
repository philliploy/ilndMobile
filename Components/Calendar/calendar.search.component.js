import React,{useState} from 'react';
import { SafeAreaView,StyleSheet  } from 'react-native';
import {Select,Avatar,Button, Icon,Divider, Layout, Text, TopNavigation, TopNavigationAction  } from '@ui-kitten/components';
import { Container, Header, Content, Accordion ,List, ListItem,Label } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';

 import moment from 'moment'

const ForwardIcon = (style) => (
    <Icon {...style} name='arrow-back' />
  );

  const data = [
    { text: 'Option 1..' },
    { text: 'Option 2' },
    { text: 'Option 3' },
  ];

export const CalendarSearchScreen = ({ navigation }) => {
  const useSelectChanges = (initialSelection = null) => {
    const [selectedOption, setSelectedOption] = React.useState(initialSelection);
    return {
      selectedOption,
      onSelect: setSelectedOption,
    };
  };
  const primarySelectChanges = useSelectChanges();

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
                 <Select    {...primarySelectChanges} data={data} placeholder="Select Date" />
                 </Layout>
         
           </ScrollView>
       </SafeAreaView>

    )
}

 