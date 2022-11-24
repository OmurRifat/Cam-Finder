import React from 'react';
import Advertisements from '../Advertisements/Advertisements';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className=' min-h-screen w-4/5 mx-auto'>
            <Banner></Banner>
            <Advertisements></Advertisements>
            <Products></Products>
            <Feature></Feature>
        </div>
    );
};

export default Home;