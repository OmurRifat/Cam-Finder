import React from 'react';

const Product = ({ camera }) => {
    const { name, imgURL, resalePrice } = camera;
    return (
        <div className="card card-compact w-80 md:w-96 bg-base-100 shadow-xl">
            <figure><img className='w-1/2' src={ imgURL } alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ name }</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>Price: { resalePrice }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;