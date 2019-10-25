import React from 'react';
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification"
import Filter from "./components/Filter";

const App = (props) => {
    const store = props.store;

    return (
        <div>
            <Filter props={store}/>
            <Notification props={store}/>
            <AnecdoteList props={store}/>
            <AnecdoteForm props={store}/>
        </div>
    );
};

export default App
