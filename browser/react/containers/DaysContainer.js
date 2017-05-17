import React, { Component } from 'react';
import { connect } from 'react-redux';
import Days from '../components/Days';
import {updateSelectedDay} from '../action-creators/days';
import {idToDay, idToMonth,  getKeyByValue} from '../utils';

const mapStateToProps = state => {
  return {
    days: state.daysState.days,
    //selectedDay: state.dayState.selectedDay
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedDay: dayName => {
      dispatch(updateSelectedDay(dayName));
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
      selectedDayString: '',
      days: this.props.days,
      selectedDay: this.props.selectedDay,
      error: false
    }
    this.handleDayChange = this.handleDayChange.bind(this);
    this.computeSelectedDayString = this.computeSelectedDayString.bind(this);
  }

  componentDidMount(){
    this.computeSelectedDayString ();
  }

  computeSelectedDayString () {
    var splitDate = this.props.selectedDay.dateString.split('-'); //date is saved as string mm/dd/yyyy in backend
    var resultingString = '';
    // const idToDay = { 
    //     Su: 'Sunday', 
    //     Mo: 'Monday', 
    //     Tu: 'Tuesday', 
    //     We: 'Wednesday', 
    //     Th: 'Thursday', 
    //     Fr: 'Friday', 
    //     Sa: 'Saturday'};
    //const idToDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //const idToMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    resultingString = idToDay[this.props.selectedDay.dayName];
    resultingString += ', ';
    resultingString += idToMonth[splitDate[0]];
    resultingString += idToDay[splitDate[1]];
    this.setState({
      selectedDayString: resultingString
    })
  }

  handleDayChange (dayName) {
    var newDayObject = {};
    props.days.map( day => {
      if(day[dayName] === dayName){
        newDayObject = Object.assign({}, day);
      }
    });
    this.props.updateSelectedDay(newDayObject);
    //this.computeSelectedDayString ();
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps) {
      this.setState({
        days: nextProps.daysState.days,
        selectedDay: nextProps.dayState.selectedDay

      });
    this.computeSelectedDayString ();
  }
}

  render () {
    return (
      <Days
        {...this.state}
        {...this.props}
        handleChange={this.handleDayChange}
      />
    );
  }
});
