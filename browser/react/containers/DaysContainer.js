import React, { Component } from 'react';
import { connect } from 'react-redux';
import Days from '../components/Days';
import {updateSelectedDay, computeSelectedDayString} from '../action-creators/days';
import {idToDay, idToMonth,  getKeyByValue} from '../utils';

const mapStateToProps = state => {
  return {
    days: state.daysState.days,
    selectedDay: state.daysState.selectedDay
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedDay: day => {
      dispatch(updateSelectedDay(day));
    },
    computeSelectedDayString: (selectedDay) => {
      dispatch(computeSelectedDayString(selectedDay));
    }
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
    this.computeInitialSelectedDayString = this.computeInitialSelectedDayString.bind(this);
  }

  componentDidMount(){
    this.computeInitialSelectedDayString ();
  }

  computeInitialSelectedDayString () {
    var splitDate = this.props.selectedDay.dateString.split('/'); //date is saved as string mm/dd/yyyy in backend
    console.log('splitDate is ', splitDate);
    var resultingString = '';
    resultingString = idToDay[this.props.selectedDay.dayName];
    resultingString += ', ';
    resultingString += idToMonth[splitDate[0]-1];
    resultingString += splitDate[1];
    this.setState({
      selectedDayString: resultingString
    })
  }

  handleDayChange (dayName) {
    var newDayObject = {};
    this.props.days.map( day => {
      if(day.dayName === dayName){
        newDayObject = Object.assign({}, day);
      }
    });
    console.log('inside handleDayChange and the dayObject is: ', newDayObject);
    this.props.updateSelectedDay(newDayObject);
    this.props.computeSelectedDayString (newDayObject);
  }

//   componentWillReceiveProps(nextProps){
//     console.log('next props in componentWillReceiveProps: ', nextProps);
//     if (this.props !== nextProps) {
//       this.setState({
//         days: nextProps.days,
//         selectedDay: nextProps.selectedDay

//       });
//       //this.props.updateSelectedDay(this.state.selectedDay);
//     //this.props.computeSelectedDayString (this.state.selectedDay);
//   }
// }

// componentDidUpdate(prevProps, prevState){
//   //this.props.updateSelectedDay(prevProps.selectedDay);
//   this.props.computeSelectedDayString (prevProps.selectedDay);
// }

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
