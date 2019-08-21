import React, {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personService from "./services/PersonService";

const App = () => {

    // USE STATES
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    // USE EFFECTS
    useEffect(() => {
        console.log('[EFFECT]: dataPerson');
        personService.getAll().then(response => setPersons(response))
    }, []);

    // HANDLES
    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
    };

    const handleSearchChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    // CRUD
    const addPerson = (event) => {
        let boolean001 = false;

        persons.forEach(function (person) {
            if (person.name === newName) {
                boolean001 = true;
            }
        });

        if (boolean001) {
            return alert(`${newName} is already added to phonebook`);
        }

        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        };

        personService.create(personObject).then(response => {
            setPersons(persons.concat(response));
            setNewName('');
            setNewNumber('');
        });
    };

    const deletePerson = (event, person) => {
        event.preventDefault();
        if (window.confirm(`delete ${person.name}`)) {
            personService.remove(person.id).then(response => {
                setNewNumber('');
                setPersons(persons.filter(personTemp => personTemp != person))
            });
        }

    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={search} onChange={handleSearchChange}/>
            <h2>add a new</h2>
            <PersonForm name={newName} phone={newNumber} onChangeName={handleNameChange} onChangePhone={handleNumberChange} addPerson={addPerson}/>
            <h2>Numbers</h2>
            <Persons persons={persons} search={search} deletePerson={deletePerson}/>
        </div>
    )
};

export default App
