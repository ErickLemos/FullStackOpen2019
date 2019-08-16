import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
};

const Content = (props) => {
    return(
        <div>
            <Part part={props.part1} exercise={props.part1exercise}/>
            <Part part={props.part2} exercise={props.part2exercise}/>
            <Part part={props.part3} exercise={props.part3exercise}/>
        </div>
    )
};

const Part = (props) => {
    return(
        <p>{props.part} {props.exercise}</p>
    )
};

const Footer = (props) => {
    return(
        <p>Number of exercises {props.valueOne + props.valueTwo + props.valueThree}</p>
    )
};

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return(
        <div>
            <Header course={course}/>
            <Content
                part1={part1}
                part1exercise={exercises1}

                part2={part2}
                part2exercise={exercises2}

                part3={part3}
                part3exercise={exercises3}
            />

            <Footer valueOne={exercises1} valueTwo={exercises2} valueThree={exercises3}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

