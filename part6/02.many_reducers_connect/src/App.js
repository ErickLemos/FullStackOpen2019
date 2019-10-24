import React from 'react';
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";

const App = (props) => {

    return (
        <div>
            <AnecdoteList props={props}/>
            <AnecdoteForm props={props}/>
        </div>
    );
};

export default App
