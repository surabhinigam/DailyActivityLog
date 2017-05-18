import React from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionCheck from 'material-ui/svg-icons/action/check-circle';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionEvent from 'material-ui/svg-icons/action/event';
import {blue500, red500, greenA200, orange600} from 'material-ui/styles/colors';



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
	}

  return (
    <div className="check">
    <div className="status">
    <ActionEvent style={iconStyles} color={orange600}/>
    <p className="greyText">This week <br />  {props.numberOfLoggedDays}/4 </p>
    </div>

    <div>
    <p> Did you meditate today? </p>
    </div>
    
    <div className="actionCheck">
    {(props.isLogged) ? <FloatingActionButton backgroundColor={greenA200} style={iconStyles}>
      <ActionCheck />
    </FloatingActionButton> :
         <FloatingActionButton disabled={true} style={styles.large}>
      <ActionCheck />
    </FloatingActionButton>}
    </div>
     
    </div>
    
  );
};
