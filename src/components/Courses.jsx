import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses)
    return (
        <div className='grid grid-cols-3 gap-8'>
            {
                courses.map(course => <Course
                    course ={course}
                    key ={course.ccn3}
                ></Course>)
            }
        </div>
    );
};

export default Courses;