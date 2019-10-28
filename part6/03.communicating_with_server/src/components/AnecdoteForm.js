import React from 'react';
import {createAnecdote} from "../reducers/anecdoteReducer";
import {connect} from "react-redux";

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        props.createAnecdote(content);
    };

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input id="anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </>
    )
};

export default connect(
    null,
    {createAnecdote}
)(AnecdoteForm);

