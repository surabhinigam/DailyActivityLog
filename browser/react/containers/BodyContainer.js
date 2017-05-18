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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
   console.log('componentDidMount in bodyContainer number of days is: ', this.props.numberOfLoggedDays);
    this.props.days.map( day => {
      if(day.name === this.props.selectedDay.dayName){
        this.setState({
          logged: day.logged
        })
      }
    });
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps) {
      this.setState({
        totalLoggedDays: nextProps.numberOfLoggedDays,
        selectedDay: nextProps.selectedDay,
        days: nextProps.days,
        isLogged: nextProps.isLogged,
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

