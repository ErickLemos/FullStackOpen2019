import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
};

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
);

const App = () => {
    const name = 'Peter';
    const age = 10;

    const setToValue = (value) => () => setCounter(value);
    const [counter, setCounter] = useState(0);
    // setTimeout(() => setCounter(counter + 1), 1000);

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10}/>
            <Hello name={name} age={age}/>
            <Display counter={counter}/>
            <button onClick={setToValue(counter + 1)}>
                plus
            </button>

            <button onClick={setToValue(0)}>
                zero
            </button>

            {/*<Button*/}
            {/*    onClick={() => setToValue(counter + 1)}*/}
            {/*    text='plus'*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    onClick={() => setToValue(counter - 1)}*/}
            {/*    text='minus'*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    onClick={() => setToValue(0)}*/}
            {/*    text='zero'*/}
            {/*/>*/}

        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

