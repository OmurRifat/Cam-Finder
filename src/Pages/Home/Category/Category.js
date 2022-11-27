import React from 'react';

const Category = ({ data }) => {
    console.log(data);
    const { name, imgURL, condition, location, originalPrice, postedTime, resalePrice, sellerName, sellerNumber, YearOfPurchase, yearOfUse } = data
    return (
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
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
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;