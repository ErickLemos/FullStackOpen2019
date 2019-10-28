import React, {useEffect} from 'react';
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import {initializeAnecdotes} from "./reducers/anecdoteReducer";
import {connect} from "react-redux";

const App = (props) => {

    useEffect(() => {
        props.initializeAnecdotes()
    }, []);

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

