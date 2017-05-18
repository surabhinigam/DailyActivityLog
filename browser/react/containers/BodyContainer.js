import React, { Component } from 'react';
import Body from '../components/Body';
import { connect } from 'react-redux';
import { updateLoggedHabit} from '../action-creators/days';

const mapStateToProps = (state) => {
  return {
    days: state.daysState.days,
    selectedDayName: state.daysState.selectedDay.dayName

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
      totalLoggedDays: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.days.map( day => {
      if(day.name === this.props.selectedDayId){
        this.setState({
          logged: day.logged
        })
      }
    })

  }

  computeNumberOfLoggedDays (){
    var result = 0;
    this.props.days.map(day => {
      if(day.logged){
        result++;
      }
    });
    this.setState({
      totalLoggedDays: result,
    })
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

