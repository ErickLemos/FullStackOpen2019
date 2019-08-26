

if(personName !== null || personNumber !== null) {
    const person = new Person({
        name: personName,
        number: personNumber
    })

    person.save().then(response => {
        console.log('person saved!')
    }).then(() => {
        Person.find().then(response => {
            console.log('Phonebook:')
            response.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        })
    })
} else {
    Person.find({id: 222}).then(res => {
        res.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    });
}


    





// const person = new Person({
//   name: 'Erick B. Lemos',
//   number: '91829382193',
//   id: 222
// })

// person.save().then(response => {
//   console.log('person saved!')
//   mongoose.connection.close()
// })