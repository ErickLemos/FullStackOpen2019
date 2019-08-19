import React from 'react'
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import CourseTotal from "./CourseTotal";

const Course = ({course}) => {
    return (
        <div>
            <CourseHeader courseHeader={course.name}/>
            <CourseContent course={course.parts}/>
            <CourseTotal courseParts={course.parts}/>
        </div>
    )
};

export default Course
