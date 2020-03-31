import React, { useContext } from "react"
import CalendarContext from './calendarContext'

import { SafeAreaView, StyleSheet, View } from 'react-native';
 

const test = (props) => {

    const calendar = useContext(CalendarContext);
    console.debug("test:",{calendar}, props.data)
    return (<SafeAreaView>

    </SafeAreaView>)
}

export default test