import React from 'react'

const CourseContent = ({course}) => {

    console.log(course);

    const rows = () => course.map(
        course =>
            <li key={course.id}>
                {course.name}: {course.exercises}
            </li>
    );

    return (
        <ul>
            {rows()}
        </ul>
    )
};

export default CourseContent
