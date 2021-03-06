import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
    return(<h1>{props.course}</h1>)
};

const Content = (props) => {
    return(
        <div>
            <Part part={props.parts.part1}/>
            <Part part={props.parts.part2}/>
            <Part part={props.parts.part3}/>
        </div>
    )
};

const Part = (props) => {
    return(
        <p>{props.part.name} {props.part.exercises}</p>
    )
};

const Footer = (props) => {
    console.log();
    return(
        <p>Number of exercises {props.parts.part1.exercises + props.parts.part2.exercises + props.parts.part3.exercises}</p>
    )
};


const App = () => {
    const course = 'Half Stack application development';
    const parts = {
        part1: {
            name: 'Fundamentals of React',
            exercises: 10
        },

        part2: {
            name: 'Using props to pass data',
            exercises: 7
        },

        part3: {
            name: 'State of component',
            exercises: 14
        }
    };



    return(
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Footer parts={parts}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

