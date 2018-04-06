import {connect} from "react-redux";
import Store from "../components/Store";
import {getStore} from "../actions";

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        store: {name: "store 2"}
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        onLoad: () => {
            console.log("came in onLoad");
            getStore(dispatch);
        }
    }
};

const PersonalizedStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(Store);

export default PersonalizedStore;