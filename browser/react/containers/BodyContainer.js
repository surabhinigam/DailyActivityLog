import React, { Component } from 'react';
import Body from '../components/Body';
import { connect } from 'react-redux';
import { updateLoggedHabit} from '../action-creators/days';

const mapStateToProps = (state) => {
  return {
    days: state.daysState.days,
    selectedDay: state.daysState.selectedDay,
    numberOfLoggedDays: state.bodyState.numberOfLoggedDays,
    isLogged: state.bodyState.isLogged,
  };  
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoggedHabit: (selectedDayName, loggedInfo) => {
      dispatch(updateLoggedHabit(selectedDayName, loggedInfo));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends Component {

  constructor (props) {
    super(props);
    this.state = {
      logged: false,
      totalLoggedDays: props.numberOfLoggedDays,
      selectedDay: props.selectedDay,
      days: props.days,
      isLogged: props.isLogged,
      loggedMessage: 'Great!',
      notLoggedMessage: 'Not Logged!',
      notLoggedTodayMessage: 'Did you meditate today?'

    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.days.map( day => {
      if(day.name === this.props.selectedDay.dayName){
        this.setState({
          logged: day.logged
        })
      }
    });
  }

  componentWillReceiveProps(nextProps){
    console.log('inside componentWillReceiveProps in bodycontainer!!!!!!!');
    console.log('next props in body container are: ', nextProps);
    if (this.props !== nextProps) {
      this.setState({
        totalLoggedDays: nextProps.numberOfLoggedDays,
        selectedDay: nextProps.selectedDay,
        days: nextProps.days,
        isLogged: nextProps.selectedDay.logged,
      });
    }
  }

  handleClick (evt) {
    this.setState({
      logged: true
    });
    this.props.updateLoggedHabit(this.props.selectedDayName, {logged: this.state.logged});
  }

  render () {
    return (
      <Body
        {...this.state}
        {...this.props}
        handleClick={this.handleClick}
      />
    );
  }
});

