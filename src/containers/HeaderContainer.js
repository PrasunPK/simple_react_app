import {connect} from "react-redux";
import {getProfile, getStore} from "../actions";
import Header from "../components/Header";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadProfile: getProfile(dispatch),
        loadStore: getStore(dispatch)
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;