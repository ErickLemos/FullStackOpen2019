import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h2>Give feedback</h2>

            <Button handleClick={() => setGood(good + 1)} text={'Good'}/>
            <Button handleClick={() => setNeutral(neutral + 1)} text={'Neutral'}/>
            <Button handleClick={() => setBad(bad + 1)} text={'Bad'}/>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
