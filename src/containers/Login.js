import { connect } from 'react-redux';
import Login from '../components/Login';
import { updateUser } from '../redux/actions';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (username) => dispatch(updateUser(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);