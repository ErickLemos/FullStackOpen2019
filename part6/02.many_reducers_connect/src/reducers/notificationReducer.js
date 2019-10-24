const reducer = (state = 'Hello World', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return ''
        default:
            return state
    }
}

export default reducer