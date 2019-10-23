import React from 'react';
import {createAnecdote} from "../reducers/anecdoteReducer";

const AnecdoteForm = ({props}) => {

    const addAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        props.store.dispatch(createAnecdote(content));
    };

    return (
        <form onSubmit={addAnecdote}>
            <div><input id="anecdote"/></div>
            <button type="submit">create</button>
        </form>
    )
};

export default AnecdoteForm;

