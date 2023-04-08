import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourseDetails = () => {
    const countryData = useLoaderData()
    // const {name, flags, startOfWeek, currencies, continents} = countryData[0];
    console.log(countryData[0])
    return (
        <div>
            <h1>welcome my boy</h1>
            <p>Name: {countryData[0].name.common}</p>
        </div>
    );
};

export default SingleCourseDetails;