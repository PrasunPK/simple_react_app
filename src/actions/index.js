import axios from 'axios';

export const getStore = (dispatch, storeId) => {
    if(!storeId) return;
    return axios.get(`http://localhost:3001/stores/${storeId}`)
        .then((response) => {
            dispatch({
                type: "GET_STORE",
                data: response.data
            });
        })
        .catch((err) => {});
};

export const getProfile = (dispatch) => {
    return axios.get("http://localhost:3001/profile")
        .then((response) => {
            dispatch({
                type: "GET_PROFILE",
                data: response.data
            });
            getStore(dispatch, response.data.personalizedStoreId)
        })
};



