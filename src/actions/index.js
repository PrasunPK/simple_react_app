import axios from 'axios';

export const getStore = (dispatch) => {
    return axios.get("http://localhost:3001/stores/1")
        .then((response) => {
            console.log(response);
            dispatch({
                type: "GET_STORE",
                store: response.data
            })
        });
};



