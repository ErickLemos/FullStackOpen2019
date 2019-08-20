import React, {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    const dataPersons = () => {
        console.log('[EFFECT]: dataPerson');
        axios.get('http://localhost:3001/persons').then(response => {
            console.log(('[PROMISSE]: sucess!'));
            setPersons(response.data);
        })
    };

    useEffect(dataPersons, []);

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
            phone: newNumber,
            id: persons.length + 1
        };
        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('');
        console.log(persons);
    };



    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={search} onChange={handleSearchChange}/>
            <h2>add a new</h2>
            <PersonForm name={newName} phone={newNumber} onChangeName={handleNameChange} onChangePhone={handleNumberChange} addPerson={addPerson}/>
            <h2>Numbers</h2>
            <Persons persons={persons} search={search}/>
        </div>
    )
};

export default App
