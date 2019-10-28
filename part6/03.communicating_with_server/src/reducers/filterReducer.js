const reducer = (state = '', action) => {
    console.log('Filter', action);
    switch (action.type) {
        case 'SET_FILTER':
            return action.data;
        default:
            return state
    }
};

export const setFilter = (value) => {
    return {
        type: 'SET_FILTER',
        data: value
    }
};

export default reducer
