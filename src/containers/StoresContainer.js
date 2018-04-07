import {connect} from "react-redux";
import container from "../components/Container";
import {getStore, saveStore} from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadStore: getStore(dispatch),
        handleChange: (event) => {
            dispatch({type: "KEY_VALUE_CHANGE", payload: event.target.value})
        },
        handleSave: () => {
            let storeId = document.querySelector("#personalized-store-id").value;
            saveStore(dispatch, storeId)
        }
    }
};

const StoresContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(container);

export default StoresContainer;