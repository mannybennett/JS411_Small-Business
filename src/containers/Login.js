import { connect } from 'react-redux';
import Login from '../components/Login';
import { updateUser } from '../redux/actions';

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (username) => dispatch(updateUser(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);