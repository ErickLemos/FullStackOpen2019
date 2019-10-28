const getId = () => (100000 * Math.random()).toFixed(0);

const reducer = (state = [], action) => {
    console.log('state now: ', state);
    console.log('action', action);

    switch (action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data];
        case 'INIT_ANECDOTES':
            return action.data;
        case 'VOTE':
            const id = action.data.id;
            const anecdoteToChange = state.find(n => n.id === id);
            const anecdoteChance = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes += 1
            };
            return state.map(anecdote =>
                anecdote.id !== id ? anecdote : anecdoteChance
            ).sort((a, b) => b.votes - a.votes);

        default:
            return state;

    }
};

export const initializeAnecdotes = (anecdotes) => {
    return {
        type: 'INIT_ANECDOTES',
        data: anecdotes
    }
};

export const createAnecdote = (content) => {
    return {
        type: 'NEW_ANECDOTE',
        data: content
    }
};

export const voteAnecdote = (obj) => {
    return {
        type: 'VOTE',
        data: {
            id: obj
        }
    }
};

export default reducer
