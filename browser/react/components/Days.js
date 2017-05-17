import React from 'react';
import {Link} from 'react-router';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/text-format';
import WeekdayPicker from "react-weekday-picker";
import CalendarComponent from 'react-day-calendar';

export default function (props) {

  //const days = props.days;
  // const dayChips = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  // const days = [{
  //   name: 'Su',
  //   logged: true,
  // },
  // {
  //   name: 'Mo',
  //   logged: true,
  // },
  // {
  //   name: 'Tu',
  //   logged: false,
  // },
  // {
  //   name: 'We',
  //   logged: false,
  // },
  // {
  //   name: 'Th',
  //   logged: true,
  // },
  // {
  //   name: 'Sa',
  //   logged: false
  // }];
  // const selectedDayId = props.selectedDayId;
  // const idToDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
console.log('props is: ', props);
console.log('props.days is: ', days);

function handleTouchTap() {
  props.updateSelectedDay();
}

var curr = new Date();
var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));


  return (
    <div className = "well well-lg days">

      <span className="currentDay">{props.selectedDayString}</span>

      <div style={styles.wrapper}>
      {props.days.map( day => (
        (day.logged) ? <Chip style={styles.chip1} onTouchTap={handleTouchTap}> {day.dayName} </Chip> :
         <Chip style={styles.chip2} onTouchTap={handleTouchTap}> {day.dayName} </Chip>
      ))
    }
      
    
      </div>
    </div>
   
  );
};
