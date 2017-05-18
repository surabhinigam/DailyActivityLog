//======Actions=======//
import { RECEIVE_DAYS, UPDATE_DAY, UPDATE_SELECTED_DAY_STRING } from '../constants';


//======Files, Libraries========//
import axios from 'axios';
import {idToDay, idToMonth,  getKeyByValue} from '../utils';

//======Action Creators========//

export const receiveDays = days => ({
    type: RECEIVE_DAYS,
    days
});

export const updateSelectedDay = day => ({
  type: UPDATE_DAY,
  day
});

export const updateSelectedDayString = selectedDayString => ({
  type: UPDATE_SELECTED_DAY_STRING,
  selectedDayString
});

//========Dispatchers===========//

// export const getDaysByUserId = userId => {
//   return dispatch => {
//     axios.get(`/api/users/${userId}/days`)
//       .then(response => {
//         dispatch(receiveDays(response.data));
//       });
//   };
// };

export const updateDay = (name) => {

}

// export const updateLoggedHabit = (dayName, data) => {
//   return dispatch => {
//     return axios.put(`/api/users/${dayName}`, data)
//       .then(res => {
//         console.log("updating logged info about the habit: ", res.data);
//       });
//   };
// }

export const computeInitialSelectedDay = () => {
  var todayObject = new Date();
  var todayString = todayObject.toDateString();
  var dayName = todayString.slice(0,2);
  var dateString = todayObject.getMonth()+1 + '/' + todayObject.getDate().toString() + '/' + todayObject.getYear().toString();//mm/dd/yyyy
  var logged = false;
  var day = {
    dayName,
    dateString,
    logged
  }
  return dispatch => {
    dispatch(updateSelectedDay(day));
  };
}

export const computeSelectedDayString = (selectedDay) => {
    var splitDate = selectedDay.dateString.split('/'); //date is saved as string mm/dd/yyyy in backend
    console.log('splitDate is ', splitDate);
    var resultingString = '';
    resultingString = idToDay[selectedDay.dayName];
    resultingString += ', ';
    resultingString += idToMonth[splitDate[0]-1];
    resultingString += splitDate[1];
    return dispatch => {
      dispatch(updateSelectedDayString(resultingString));
    };
  }

// export const computeSelectedDayString () {
//     var splitDate = this.props.selectedDay.dateString.split('/'); //date is saved as string mm/dd/yyyy in backend
//     console.log('splitDate is ', splitDate);
//     var resultingString = '';
//     resultingString = idToDay[this.props.selectedDay.dayName];
//     resultingString += ', ';
//     resultingString += idToMonth[splitDate[0]-1];
//     resultingString += splitDate[1];
    
//   }


export const getUserDays = () => {
  console.log('inside the action creator: ');
  return dispatch => {
    axios.get(`/api/users/days`)
      .then(response => {
        console.log('response is:', response.data);
        dispatch(receiveDays(response.data));
      });
  };
};
