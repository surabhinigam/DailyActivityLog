import React, {Component} from 'react';
import DaysContainer from '../containers/DaysContainer';
import BodyContainer from '../containers/BodyContainer';
import Footer from '../components/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  
});

export default function (props) {
  return (
  	<MuiThemeProvider muiTheme={muiTheme}>
    <div id="main" className="mainBox">
        <DaysContainer days = {props.days}/>
        <BodyContainer />
      <Footer />
    </div>
    </MuiThemeProvider>
  );
}
