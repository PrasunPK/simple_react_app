const stores = (state = [], action) => {
    switch (action.type) {
        case 'GET_STORE':
            return [
                ...state,
                {
                    store: null
                }
            ];
        default:
            return state
    }
};

export default stores