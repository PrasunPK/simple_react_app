const stores = (state = [], action) => {
    switch (action.type) {
        case 'GET_STORE':
            return {
                ...state,
                data: action.data
            };
        default:
            return state
    }
};

export default stores