import AnecdotesService from "../services/AnecdotesService";

const reducer = (state = [], action) => {
    console.log('state now: ', state);
    console.log('action', action);

    switch (action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data];
        case 'INIT_ANECDOTES':
            return action.data;
        case 'VOTE':
            return state.sort((a, b) => b.votes - a.votes);

        default:
            return state;

    }
};

export const initializeAnecdotes = (anecdotes) => {
    return async dispatch => {
        const anecdotes = await AnecdotesService.getAll();
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
};

export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await AnecdotesService.createNew(content);
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote
        })
    }
};

export const voteAnecdote = (obj) => {
    return async dispatch => {
        const changedAnecdote = await AnecdotesService.vote(obj);
        dispatch({
            type: 'VOTE',
            data: changedAnecdote
        })
    }
};

export default reducer
