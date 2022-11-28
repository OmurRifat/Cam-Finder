import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Modal = ({ data, setBooking }) => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    const { name, resalePrice } = data;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formSubmit = (data) => {
        setBooking([data]);
    }
    return (
        <div>
            <input type="checkbox" id="booking-data" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{ name }</h3>
                    {
                        user?.uid && <form onSubmit={ handleSubmit(formSubmit) }>
                            <input type="text" disabled value={ user?.displayName } { ...register("userName", { value: user?.displayName }) } className="input input-bordered input-warning w-full mt-4 mb-1" />
                            <input type="text" { ...register("userEmail", { value: user?.email }) } value={ user?.email } disabled className="input input-bordered input-warning w-full mt-4 mb-1" />
                            <input type="text" { ...register("productName", { value: name }) } value={ name } disabled className="input input-bordered input-warning w-full mt-4 mb-1" />
                            <input type="text" { ...register("price", { value: resalePrice }) } value={ `$${resalePrice}` } disabled className="input input-bordered input-warning w-full mt-4 mb-1" />
                            <input type="number" { ...register("phoneNumber") } placeholder="Phone Number" className="input input-bordered input-warning w-full mt-4 mb-1" />
                            <input type="text" { ...register("location") } placeholder="Meeting Location" className="input input-bordered input-warning w-full mt-4 mb-1" />
                            <input type="submit" value="Submit" />
                        </form>
                    }
                    <div className="modal-action" >
                        <label htmlFor="booking-data" className="btn btn-primary">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;