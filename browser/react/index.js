import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();

// const muiTheme = getMuiTheme({
  
// });

ReactDOM.render(
  //<MuiThemeProvider muiTheme={muiTheme}>
  	<Routes />,
  document.getElementById('app')
  //</MuiThemeProvider>
);
