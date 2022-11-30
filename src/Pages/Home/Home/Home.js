
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Product from '../Product/Product';

const Home = () => {
    // const date = new Date();
    // const newDate = format(date, ("PP"));
    // console.log(JSON.stringify(newDate))
    // axios.get('products.json')
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    const [cameras, setCameras] = useState([]);
    useEffect(() => {
        axios.get('https://cam-finder-server.vercel.app/home-cameras')
            .then(res => setCameras(res.data))
    }, [])
    return (
        <div className=' min-h-screen w-4/5 mx-auto'>
            <Banner></Banner>
            <div className='my-20'>
                <h4 className='text-2xl text-center mb-10 font-semibold'>All <span className='text-primary '>Products</span></h4>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        cameras?.map(camera => <Product
                            key={ camera._id }
                            camera={ camera }
                        ></Product>)
                    }
                </div>
            </div>
            <Feature></Feature>
        </div>
    );
};

export default Home;