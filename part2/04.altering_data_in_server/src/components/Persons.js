import React from 'react'
import Person from "./Person";

const Persons = ({persons, search}) => {
    const personToShow = (search === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
    const rows = () => personToShow.map(person => {
        return <Person key={person.id} person={person}/>
    });

    return(
        <div>{rows()}</div>
    )
};

export default Persons
