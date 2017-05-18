import React from 'react';
import {Link} from 'react-router';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/text-format';
import WeekdayPicker from "react-weekday-picker";
import CalendarComponent from 'react-day-calendar';

export default function (props) {
  const styles = {
  chip1: {
    margin: 4,
    backgroundColor: 'limegreen',
  },
  chip2: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
// console.log('props is: ', props);
// console.log('props.days is: ', props.days);

function handleTouchTap(dayName) {
  console.log('event is: ', dayName);
  props.handleChange(dayName);
}

var curr = new Date();
var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));


  return (
    <div className = "well well-lg days">

      <span className="currentDay">{props.selectedDayString}</span>

      <div style={styles.wrapper}>
      {props.days.map( day => (
        <div key={day.dayName}>
        {(day.logged) ? <Chip style={styles.chip1} onTouchTap={()=> handleTouchTap(day.dayName)}> {day.dayName} </Chip> :
         <Chip style={styles.chip2} onTouchTap={()=> handleTouchTap(day.dayName)}> {day.dayName} </Chip>}
         </div>
      ))
    }
      
    
      </div>
    </div>
   
  );
};
