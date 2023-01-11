import React from 'react';
import './PageNotFound.css'
import { Link } from 'react-router-dom';

const PageNotFound = () => {

    return (
        <div className='not-found min-h-screen relative'>
            <Link to='/'><button className='btn btn-primary absolute bottom-1/2 right-1/4'>Back to Home Screen</button></Link>
        </div>
    );
};

export default PageNotFound;