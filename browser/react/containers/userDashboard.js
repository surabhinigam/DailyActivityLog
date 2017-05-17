// Required libraries
import { connect } from 'react-redux';
import UserDashboard from '../components/UserDashboard';

// Required files
import { getDaysByUserId } from '../action-creators/days';

const mapState = (state) => {
  return {
    user: state.auth,
    days: state.days,
    selectedDay: state.selectedDayId
    
  };
};

const mapDispatch = (dispatch) => {
  return {
  };
};

export default connect(mapState, mapDispatch)(UserDashboard);