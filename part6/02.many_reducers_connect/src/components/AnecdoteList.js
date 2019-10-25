import React from 'react';
import {voteAnecdote} from "../reducers/anecdoteReducer";
import {connect} from "react-redux";

const AnecdoteList = (props) => {


    const vote = (id) => {
        console.log('vote', id);
        props.dispatch(voteAnecdote(id))
    };

    return (
        <>
            <h2>Anecdotes</h2>
            {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
};

const ConnectedAnecdoteList = connect(
    mapStateToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;
