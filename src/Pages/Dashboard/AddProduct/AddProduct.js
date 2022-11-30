import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();


    const handleAddProduct = (data, e) => {
        const date = new Date();
        const postedTime = format(date, "PP");
        const image = data.imgURL[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=2d04212c49adf357600821c10c5e3dd0`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    data.imgURL = `${imgData.data.url}`;
                    data.postedTime = postedTime;


                    axios.post('http://localhost:5000/products', data)
                        .then(res => {
                            if (res.status === 200)
                                toast.success("Product Added Sucessfully")
                        })
                        .catch(err => toast.error(err.message))

                }
            })
        e.target.reset();
    }
    return (
        <div className=' bg-white m-6 rounded-lg px-6 py-10'>
            <h4 className='text-lg text-primary font-bold text-center mb-4'>Add a Product</h4>
            <form onSubmit={ handleSubmit(handleAddProduct) }>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" { ...register('name') } placeholder="Product Name" className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="file" { ...register('imgURL') } className="file-input file-input-bordered file-input-primary w-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-1 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <select { ...register('categoryId') } className="select select-primary w-full ">
                            <option disabled selected>Category</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" { ...register('location') } placeholder="Location" className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="number" { ...register('resalePrice') } placeholder="Resale Price" className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="number" { ...register('originalPrice') } placeholder="Original Price" className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="number" { ...register('yearOfUse') } placeholder="Year of Use" className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" { ...register('sellerName') } placeholder="Seller Name" className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" { ...register('condition') } placeholder="Condition" className="input input-bordered input-primary w-full" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" { ...register('sellerNumber') } placeholder="Seller Number" className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" { ...register('yearOfPurchase') } placeholder="Year of Purchase" className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <textarea className="textarea textarea-primary w-full" { ...register('description') } placeholder="Write down the description of the Product."></textarea>
                </div>
                <input type="submit" value="Add" className='btn btn-primary' />
            </form>
        </div>
    );
};

export default AddProduct;