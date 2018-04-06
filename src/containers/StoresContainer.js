import {connect} from "react-redux";
import container from "../components/Container";
import {getStore} from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadStore: getStore(dispatch)
    }
};

const StoresContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(container);

export default StoresContainer;