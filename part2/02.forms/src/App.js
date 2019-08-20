import React, {useState} from 'react'
import Person from "./components/Person";

const App = () => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', id: 1}]);
    const [newName, setNewName] = useState('');

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
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
            id: persons.length + 1
        };
        setPersons(persons.concat(personObject));
        setNewName('');
        console.log(persons);
    };

    const rows = () => persons.map(person => {
        return <Person key={person.id} person={person}/>
    });

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {rows()}
        </div>
    )
};

export default App
