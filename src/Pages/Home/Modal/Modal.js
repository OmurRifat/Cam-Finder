import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Modal = ({ data, setBooking }) => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    const { name, resalePrice } = data;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formSubmit = (data, e) => {
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Successfull Booked.")
                }
            })
        e.target.reset();
        setBooking(false)
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
                            <div className="modal-action" >
                                <input onClick={ () => setBooking(true) } type="submit" value="Place Order" className='btn btn-primary' />
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;