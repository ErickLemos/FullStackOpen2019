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

const App = (props) => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(0);

    const nextAnecdote = () => {
        setSelected(Math.floor(Math.random() * 5));
        setVote(0)
    };

    return (
        <div>
            <h2>Give feedback</h2>

            <Button handleClick={() => setGood(good + 1)} text={'Good'}/>
            <Button handleClick={() => setNeutral(neutral + 1)} text={'Neutral'}/>
            <Button handleClick={() => setBad(bad + 1)} text={'Bad'}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>

            <h2>Anecdote</h2>
            <p>{props.anecdotes[selected]}</p>
            <p>anecdote votes: {vote}</p>
            <div>
                <Button handleClick={() => setVote(vote + 1)} text={'Vote'}/>
                <Button handleClick={() => nextAnecdote()} text={'next anecdote'}/>
            </div>
        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
