const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0;
    return maxId + 1
};

let persons = [
    {
        "name": "a",
        "number": "123",
        "id": 1
    },
    {
        "name": "b",
        "number": "12",
        "id": 2
    },
    {
        "name": "c",
        "number": "123213",
        "id": 3
    },
    {
        "name": "v",
        "number": "123",
        "id": 4
    },
    {
        "name": "ab",
        "number": "asd",
        "id": 5
    },
    {
        "name": "banana",
        "number": "12",
        "id": 6
    }
];

app.get('/info', (req, res) => {
    var date = Date(Date.now()).toString();
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`);
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
     const id = Number(req.params.id);
     const person = persons.find(person => person.id === id);


     if (person) {
         res.json(person)
     } else {
         res.status(404).end()
     }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);

    res.status(204).end();
});

app.post('/api/persons', (req, res) => {
    const body = req.body;

    if (!body.name) {
        return res.status(400).json({
           error: 'name missing '
        });
    }

    if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    };

    persons = persons.concat(person);
    res.json(person);
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
