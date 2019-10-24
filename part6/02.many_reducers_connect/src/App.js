import React from 'react';
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification"

const App = (props) => {
    const store = props.store

    return (
        <div>
            <Notification props={store}/>
            <AnecdoteList props={store}/>
            <AnecdoteForm props={store}/>
        </div>
    );
};

export default App
