import React from 'react'
import Person from "./Person";

const Persons = ({persons, search, deletePerson}) => {
    const personToShow = (search === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
    console.log(personToShow);
    const rows = () => personToShow.map(person => {
        return (
            <p key={person.name}>
                <Person person={person}/>
                <button onClick={(event) => deletePerson(event, person)}>delete</button>
            </p>
        )
    });

    return(
        <div>{rows()}</div>
    )
};

export default Persons
