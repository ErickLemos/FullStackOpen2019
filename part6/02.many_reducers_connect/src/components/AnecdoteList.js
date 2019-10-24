import React from 'react';
import {voteAnecdote} from "../reducers/anecdoteReducer";

const AnecdoteList = ({props}) => {


    const vote = (id) => {
        console.log('vote', id);
        props.dispatch(voteAnecdote(id))
    };

    const anecdotes = props.getState().anecdotes;
    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
};

export default AnecdoteList;
