import React, {useEffect} from 'react';
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import anecdoteService from "./services/AnecdotesService";
import {initializeAnecdotes} from "./reducers/anecdoteReducer";
import {connect} from "react-redux";

const App = (props) => {

    useEffect(() => {
        anecdoteService
            .getAll().then(anecdotes => props.initializeAnecdotes(anecdotes))
    });

    return (
        <div>
            <Notification/>
            <Filter/>
            <AnecdoteForm/>
            <AnecdoteList/>
        </div>
    );
};

export default connect(null, {initializeAnecdotes})(App)

