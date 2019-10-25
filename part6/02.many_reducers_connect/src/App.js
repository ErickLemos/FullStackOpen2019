import React from 'react';
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";

const App = (props) => {
    const store = props.store;

    return (
        <div>
            <Filter props={store}/>
            {/*<Notification props={store}/>*/}
            <AnecdoteForm props={store}/>
            <AnecdoteList props={store}/>
        </div>
    );
};

export default App
