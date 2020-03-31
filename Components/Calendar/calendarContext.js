import React,{createContext} from "react"

const CalendarContext =  createContext({
    date:[],
    judge:[]})

// const CalendarLayout = props => {
  
//     return (
//       <CalendarContext.Provider value={props.data}>
//         {console.debug("calendar context:", props.data ,CalendarContext)}
//       {props.children}</CalendarContext.Provider>
//     );
//   };

export default CalendarContext