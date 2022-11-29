import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { googleSignIn, setUser, emailRegister, updateUser } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    let userInfo = {}
    const handleRegister = (data) => {
        // console.log(data)
        userInfo = {
            name: data.name,
            email: data.email,
            seller: data.isSeller,
            admin: false
        }
        emailRegister(data.email, data.password)
            .then(result => {
                updateUser({ displayName: data.name })
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(fedData => console.log(fedData))
                setUser(result.user)
                toast.success("User Registered Sucesfully");
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err.message))
        toast.error("An Error Occured");
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {

                userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    seller: false,
                    admin: false
                }
                // fetch('http://localhost:5000/user', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json',
                //     },
                //     body: JSON.stringify(userInfo)
                // })
                //     .then(res => res.json())
                axios.post('http://localhost:5000/user', userInfo)
                    .then(fedData => console.log(fedData))
                setUser(result.user)
                toast.success("User Registered Sucesfully");
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error.message))
        toast.error("An Error Occured");
    }

    // const { data: userData } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: () => {
    //         fetch('http://localhost:5000/user', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //             },
    //             body: JSON.stringify()
    //         })
    //     }
    // })
    return (
        <div>
            <form onSubmit={ handleSubmit(handleRegister) } className=' w-2/3 md:w-1/4 mx-auto my-28'>
                <div className="shadow-primary shadow-xl rounded-xl px-6 pt-10 pb-8">
                    <h4 className=' text-center mb-6  my-2 text-xl font-bold text-primary'>Register</h4>
                    <div className="relative my-2">
                        <input { ...register("name") } type="text" placeholder="Your Name" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="relative my-2">
                        <input { ...register("email") } type="text" placeholder="Your Email" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="relative my-2">
                        <input { ...register("password") } type="password" placeholder="Your Password" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Register as a Seller?</span>
                            <input { ...register("isSeller") } type="checkbox" className="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <button type="submit" className="mt-3 text-white w-full bg-primary hover:bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-primary ">Register</button>
                    <div className='mb-2 text-center flex flex-row items-center justify-evenly mt-2 '>
                        <hr className=' border-gray-500 w-1/4' />
                        or
                        <hr className='border-gray-500 w-1/4' />
                    </div>
                    <button onClick={ handleGoogleSignIn } type="button" className="text-white w-full bg-primary hover:bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">SignIn With Google</button>

                    <p className='mt-3 text-center'>Already have an Account? <span className='text-base font-semibold text-red-700'><Link to='/login'>Login</Link></span></p>
                </div>

            </form>
        </div>
    );
};

export default Register;