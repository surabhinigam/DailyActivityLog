//======Actions=======//
import { RECEIVE_LOGGED_DAYS, RECEIVE_LOGGED_INFO } from '../constants';


//======Files, Libraries========//
import axios from 'axios';
import {idToDay, idToMonth,  getKeyByValue} from '../utils';

//======Action Creators========//

export const receiveNumberOfLoggedDays = numberOfLoggedDays => ({
    type: RECEIVE_LOGGED_DAYS,
    numberOfLoggedDays
});

export const getDayLoggedStatus = isLogged => ({
    type: RECEIVE_LOGGED_INFO,
    isLogged
})


//========Dispatchers===========//

export const updateLoggedHabit = (dayName, data) => {
  return dispatch => {
    return axios.put(`/api/users/${dayName}`, data)
      .then(res => {
        console.log("updating logged info about the habit: ", res.data);
      });
  };
}

export const computeNumberOfLoggedDays  = () => {
    var result = 0;
    var isSelectedDayLogged = false;
    var todayObject = new Date();
    return dispatch => {
    axios.get(`/api/users/days`)
      .then(response => {
        console.log('response in computeNumberOfLoggedDays: ', response.data);
        response.data.map(day => {
          if(day.logged){
          result++;
          }
          if(day.dayName === todayObject.toDateString().slice(0,2)){
            isSelectedDayLogged = day.logged;
          }
        });
        console.log('total days is: ', result);
        dispatch(receiveNumberOfLoggedDays(result));
        dispatch(getDayLoggedStatus(isSelectedDayLogged));
      });
  };
}

export const isSelectedDayLogged = () => {

}

