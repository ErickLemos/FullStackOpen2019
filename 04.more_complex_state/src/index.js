import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
);

const Statistics = (props) => {
    if(!(props.good > 0 || props.neutral > 0 || props.bad > 0)) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>All: {props.good + props.neutral + props.bad}</p>
            <p>Average: {props.good - props.bad}</p>
            <p>Positive: {props.good * 100 / (props.good + props.neutral + props.bad)}</p>
        </div>
    )


};

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
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
