import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
};

export default connect(mapStateToProps, null)(Navigation);