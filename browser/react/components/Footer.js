import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionStar from 'material-ui/svg-icons/action/stars';
import ActionPayment from 'material-ui/svg-icons/action/payment';
import ActionCheck from 'material-ui/svg-icons/action/check-circle';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionLanguage from 'material-ui/svg-icons/action/language';
import ActionPets from 'material-ui/svg-icons/action/pets';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {blue500, red500, greenA200, orange600} from 'material-ui/styles/colors';

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
export default function (props) {
  return (
      <div className="footer">
      <IconButton disabled={true}>
      <ActionStar />
    </IconButton>
    <IconButton disabled={true}>
      <ActionPayment />
    </IconButton>
    <IconButton disabled={true}>
      <ActionFeedback />
    </IconButton>
    <IconButton disabled={true}>
      <ActionHistory />
    </IconButton>
    <IconButton disabled={true}>
      <ActionFavorite />
    </IconButton>
    <IconButton disabled={true}>
      <ActionLanguage />
    </IconButton>
    <IconButton disabled={true}>
      <ActionPets />
    </IconButton>
    <IconButton disabled={true}>
      <ActionSearch />
    </IconButton>
    </div>
  );
}

