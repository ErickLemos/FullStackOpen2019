import React from 'react'

const CourseTotal = ({course}) => {

    let total = 0;
    course.map(course => {
        total += course.exercises
    });

    return (
        <p>total of {total} exercises</p>
    )
};

export default CourseTotal
