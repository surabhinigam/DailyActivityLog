import React from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionCheck from 'material-ui/svg-icons/action/check-circle';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionEvent from 'material-ui/svg-icons/action/event';
import {blue500, red500, greenA200, orange600} from 'material-ui/styles/colors';
import FontAwesome from'react-fontawesome';



export default function (props) {
	const iconStyles = {
  	marginRight: 24,
}
	const styles = {
	large: {
    width: 120,
    height: 120,
    padding: 30,
    
  },
  large2 : {
  	width: 120,
    height: 120,
    padding: 30,
    backgroundColor: greenA200,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  successCheck: {
    color: '#0dd261',
    fontSize: '18em',
  },
  notLoggedCheck:{
    fontSize: '18em',
    color: 'grey',
  }
	}

  return (
    <div className="check">
    <div className="status">
    <ActionEvent style={iconStyles} color={orange600}/>
    <p className="greyText">This week <br />  {props.numberOfLoggedDays}/4 </p>
    </div>

    <div>
    {(props.selectedDay.logged) ? <p>Great!</p> : <p>Did you meditate today?</p>}
    </div>  
    
    <div className="actionCheck">
    {(props.selectedDay.logged) ? <i className="fa fa-check-circle fa-5x" style={styles.successCheck} aria-hidden="true"></i> :
         <i className="fa fa-check-circle-o fa-5x" style={styles.notLoggedCheck} aria-hidden="true"></i>}
    </div>
     
    </div>
    
  );
};
