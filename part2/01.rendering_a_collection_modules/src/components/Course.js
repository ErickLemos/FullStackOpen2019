import React from 'react'
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";

const Course = ({course}) => {
    console.log('Course iniciado');
    return (
        <div>
            <CourseHeader courseHeader={course.name}/>
            <CourseContent course={course.parts}/>
        </div>
    )
};

export default Course
