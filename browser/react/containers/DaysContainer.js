import React, { Component } from 'react';
import { connect } from 'react-redux';
import Days from '../components/Days';
import {updateSelectedDay} from '../action-creators/days';
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
    this.computeSelectedDayString ();
  }

  componentWillReceiveProps(nextProps){
    console.log('next props in componentWillReceiveProps: ', nextProps);
    this.computeSelectedDayString ();
    if (this.props !== nextProps) {
      this.setState({
        days: nextProps.days,
        selectedDay: nextProps.selectedDay

      });
    //this.computeSelectedDayString ();
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
