import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props);
    return(<h1>{props.course}</h1>)
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

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    };

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    };

    const part3 = {
        name: 'State of component',
        exercises: 14
    };

    return(
        <div>
            <Header course={course}/>
            <Content
                part1={part1.name}
                part1exercise={part1.exercises}

                part2={part2.name}
                part2exercise={part2.exercises}

                part3={part3.name}
                part3exercise={part2.exercises}
            />

            <Footer valueOne={part1.exercises} valueTwo={part2.exercises} valueThree={part3.exercises}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

