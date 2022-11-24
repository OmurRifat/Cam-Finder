import React from 'react';
import './Banner.css'
import Button from '../../../Components/Button/Button';


const Banner = () => {
    return (
        <div className='banner-section my-4'>
            {/* <div className='banner-img'>
                <img className="h-auto" src={ img1 } alt="" />
            </div> */}
            <div className=' relative  text-white'>
                <div className=' absolute top-10 left-10 md:left-28'>
                    <div className='text-lg md:text-4xl font-semibold '>
                        <h4 className='my-1 md:my-4'>Record Your Click </h4>
                        <h3>with <span className=' font-extrabold text-primary'>CAMFINDER</span></h3>
                    </div>
                    <Button
                        margin="mt-2 md:mt-10"
                        to='/products'
                    >
                        SHOP NOW
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Banner;