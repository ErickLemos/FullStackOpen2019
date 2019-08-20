import React from 'react'

const PersonForm = ({name, onChangeName, phone, onChangePhone, addPerson}) => {
    return (
        <form onSubmit={addPerson}>
            <div>name: <input value={name} onChange={onChangeName}/></div>
            <div>phone: <input value={phone} onChange={onChangePhone}/></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
};

export default PersonForm
