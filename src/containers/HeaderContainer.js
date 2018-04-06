import {connect} from "react-redux";
import {getProfile} from "../actions";
import Header from "../components/Header";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadProfile: getProfile(dispatch)
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;