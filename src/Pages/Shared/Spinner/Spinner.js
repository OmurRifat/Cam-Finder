import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <progress className="progress w-56 progress-primary"></progress>
        </div>
    );
};

export default Spinner;