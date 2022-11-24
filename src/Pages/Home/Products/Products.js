import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [cameras, setCameras] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/home-cameras')
            .then(res => setCameras(res.data))
    }, [])
    return (
        <>
            <div className='my-20'>
                <h4 className='text-2xl text-center mb-10 font-semibold'>All <span className='text-primary '>Products</span></h4>
                <div className=' grid grid-cols-1 md:grid-cols-3'>
                    {
                        cameras?.map(camera => <Product
                            key={ camera._id }
                            camera={ camera }
                        ></Product>)
                    }
                </div>
            </div>
        </>
    );
};

export default Products;