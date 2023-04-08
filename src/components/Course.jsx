import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    console.log(course)
    const name = course.name.common
    const flag = course.flags.png
    return (
        <div className='border-2 border-black text-center p-5 font-bold'>
            <p>{name}</p>
            <img className='w-96 my-5' src={flag} alt="" />
            <p> </p>
            <Link to= {`/courses/${name}`}><button className="border border-blue-700 hover:bg-blue-600 px-2 rounded my-2">Show Details</button></Link>
        </div>
    );
};

export default Course;