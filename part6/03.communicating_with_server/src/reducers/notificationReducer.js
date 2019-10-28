const initialState = {
    display: false,
    message: 'Hello'
};

const reducer = (state = initialState, action) => {
    console.log('Notification', action);
    switch (action.type) {
        case 'DISPLAY':
            return {
                ...state,
                display: action.data.boolean
            };
        case 'VOTE':
            return {
                ...state,
                display: true,
                message: `you voted ${action.data.id}`
            };
        case 'NEW_ANECDOTE':
            return {
                display: true,
                message: 'New anecdote created'
            };
        default:
            return state
    }
};

export const notificationDisplay = (boolean) => {
    return {
        type: 'DISPLAY',
        data: {
            boolean: boolean
        }
    }
};

export default reducer
