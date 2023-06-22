import { connect } from 'react-redux';
import Login from '../components/Login';
import { setLoginStatus } from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  setLoginStatus: (status) => dispatch(setLoginStatus(status)),
});

export default connect(null, mapDispatchToProps)(Login);