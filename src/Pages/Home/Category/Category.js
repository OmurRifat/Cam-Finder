import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Category = ({ data }) => {
    const [booking, setBooking] = useState(false)
    const { name, imgURL, condition, location, originalPrice, postedTime, resalePrice, sellerName, sellerNumber, YearOfPurchase, yearOfUse } = data
    return (
        <div className='card card-compact w-80 md:w-96 bg-base-100 shadow-xl'>
            { booking && <Modal
                data={ data }
                setBooking={ setBooking }
            ></Modal> }
            <figure><img className='w-1/2' src={ imgURL } alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ name }</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className='font-semibold text-accent'>Resale Price: { resalePrice }</p>
                <p>Original Price: { originalPrice }</p>
                <p>Location: { location }</p>
                <p>Year of Use: { yearOfUse }</p>
                <p>Seller Name: { sellerName }</p>
                <p>Post time: { postedTime }</p>
                <div className="card-actions justify-end">
                    <label htmlFor="booking-data" className="btn btn-primary" onClick={ () => setBooking(true) }>Book now</label>
                </div>
            </div>
        </div>
    );
};

export default Category;