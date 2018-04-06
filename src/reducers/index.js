const stores = (state = [], action) => {
    switch (action.type) {
        case 'GET_STORE':
            return {
                ...state,
                store: action.data
            };
        case 'GET_PROFILE':
            return {
                ...state,
                profile: action.data
            };
        default:
            return state
    }
};

export default stores