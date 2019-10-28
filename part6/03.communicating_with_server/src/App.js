import React from 'react';
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
    return (
        <div>
            <Notification/>
            <Filter/>
            <AnecdoteForm/>
            <AnecdoteList/>
        </div>
    );
};

export default App

