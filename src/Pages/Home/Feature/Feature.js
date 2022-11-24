import React from 'react';
import img from '../../../assets/images/section-img.jpg'
import Button from '../../../Components/Button/Button';

const Feature = () => {
    return (
        <div className='flex items-center justify-around my-32'>
            <div className=" flex-1 mb">
                <h4 className=' text-center text-lg md:text-2xl font-semibold'>Here You get all you need<br /> for your <span className='text-primary'>Vision.</span></h4>
                <p>
                    This is platform for the camera lovers. Here you will get types of second hand camera. This site can be called as a vision fulfillment site.This is platform for the camera lovers. Here you will get types of second hand camera. This site can be called as a vision fulfillment site.
                </p>
                <Button
                    margin='mt-5'
                    to='/products'
                >
                    BUY NOW
                </Button>
            </div>
            <div className=' flex-1'>
                <img className=' rounded-lg' src={ img } alt="" />
            </div>
        </div>
    );
};

export default Feature;