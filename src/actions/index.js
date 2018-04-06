import axios from 'axios';

export const getStore = (dispatch) => {
    return axios.get("http://localhost:3001/stores/1")
        .then((response) => {
            dispatch({
                type: "GET_STORE",
                data: response.data
            });
        });
};



