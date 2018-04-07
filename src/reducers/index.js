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
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: action.data
            };
        case 'KEY_VALUE_CHANGE':
            return {
                ...state,
                inputStoreValue: action.payload
            };
        default:
            return state
    }
};

export default stores