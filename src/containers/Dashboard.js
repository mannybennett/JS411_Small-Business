import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { removeListing } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        login: state.login,
        listings: state.listings
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeListing:(index) => dispatch(removeListing(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);