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
            <table>
                <Statistic text={'Good'} value={props.good}/>
                <Statistic text={'Neutral'} value={props.neutral}/>
                <Statistic text={'Bad'} value={props.bad}/>
                <Statistic text={'All'} value={props.good + props.neutral + props.bad}/>
                <Statistic text={'Average'} value={props.good - props.bad}/>
                <Statistic text={'Positive'} value={props.good * 100 / (props.good + props.neutral + props.bad)}/>
            </table>
        </div>
    )
};

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
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
