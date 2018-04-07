import axios from 'axios';

export const getStore = (dispatch, storeId) => {
    if (!storeId) return;
    return axios.get(`http://localhost:3001/stores/${storeId}`)
        .then((response) => {
            dispatch({
                type: "GET_STORE",
                data: response.data
            });
        })
        .catch((err) => {
        });
};

export const getProfile = (dispatch) => {
    return axios.get("http://localhost:3001/profile")
        .then((response) => {
            if (dispatch) {
                dispatch({
                    type: "GET_PROFILE",
                    data: response.data
                });
                getStore(dispatch, response.data.personalizedStoreId)
            } else {
                return response.data
            }
        })
        .catch((err) => {
        });
};

export const saveStore = (dispatch, storeId) => {
    return getProfile().then((profile) => {
        const newProfile = {
            firstName: profile.firstName,
            lastName: profile.lastName,
            personalizedStoreId: storeId
        };
        return axios.post("http://localhost:3001/profile", newProfile)
            .then((response) => {
                dispatch({
                    type: "UPDATE_PROFILE",
                    data: newProfile
                });
                getStore(dispatch, storeId)
            })
            .catch((err) => {
            });
    });


};



