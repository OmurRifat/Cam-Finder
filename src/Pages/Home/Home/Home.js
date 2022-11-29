
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import Advertisements from '../Advertisements/Advertisements';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Products from '../Products/Products';

const Home = () => {
    // const date = new Date();
    // const newDate = format(date, ("PP"));
    // console.log(JSON.stringify(newDate))
    // axios.get('products.json')
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    const { user } = useContext(AuthContext)
    return (
        <div className=' min-h-screen w-4/5 mx-auto'>
            <Banner></Banner>
            {
                user?.uid && <Advertisements></Advertisements>
            }
            <Products></Products>
            <Feature></Feature>
        </div>
    );
};

export default Home;