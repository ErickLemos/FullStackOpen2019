import React from 'react'

const CourseTotal = ({courseParts}) => {

    const total = courseParts.reduce((a, b) => ({
        exercises: a.exercises + b.exercises
        })
    );

    return (
        <p>total of {total.exercises} exercises</p>
    )
};

export default CourseTotal
