import React from 'react';
import {Link} from 'react-router';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/text-format';
import WeekdayPicker from "react-weekday-picker";
import CalendarComponent from 'react-day-calendar';
import FontAwesome from'react-fontawesome';

export default function (props) {
  const styles = {
  chip1: {
    margin: 4,
    backgroundColor: '#0dd261',
  },
  chip2: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  wrapper2: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  selected: {
    color: 'black',
    fontSize: '.5em',
  },
  notSelected:{
    fontSize: '1.5em',
    color: 'white',
  }

};

function handleTouchTap(dayName) {
  console.log('event is: ', dayName);
  props.handleChange(dayName);
}

var curr = new Date();
var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));

  return (
    <div className = "well well-lg days">
    <div style={styles.wrapper2}>
      <i className="fa fa-angle-left" aria-hidden="true"></i>
      <span className="currentDay">{props.selectedDayString}</span>
      <i className="fa fa-angle-right" aria-hidden="true"></i>
    </div>

      <div style={styles.wrapper}>
      {
        props.days.map( day => (
        <div key={day.dayName} className="weekdays">
        {
          (day.logged) ? <Chip style={styles.chip1} onTouchTap={()=> handleTouchTap(day.dayName)}> {day.dayName} </Chip> :
         <Chip style={styles.chip2} onTouchTap={()=> handleTouchTap(day.dayName)}> {day.dayName} </Chip>
        }
         </div>
        ))
      }
     </div>

      <div style={styles.wrapper2}>
      {
        props.days.map( (day, id) => (
        <div className="activeDot" key={id}>
        {
          (day.dayName === props.selectedDay.dayName) ? <i className="fa fa-circle fa-lg" style={styles.selected} aria-hidden="true"></i>  :
         <i className="fa fa-window-minimize fa-lg" style={styles.notSelected} aria-hidden="true"></i>
       }
         </div>
      ))
    }
    
      </div>

    </div>
   
  );
};
