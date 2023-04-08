import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='text-center flex items-center justify-center'>
            <div className=''>
                <p className='text-7xl font-bold text-blue-900'>{status}</p>
                <h1 className='text-2xl font-bold text-orange-700'>{error.message}</h1>
            </div>
        </div>
    );
};

export default ErrorPage;