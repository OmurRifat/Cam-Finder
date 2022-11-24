import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { googleSignIn, setUser, emailSignIn } = useContext(AuthContext)

    const handleLogin = (data) => {
        // console.log(data)
        emailSignIn(data.email, data.password)
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => setUser(result.user))
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <form onSubmit={ handleSubmit(handleLogin) } className=' w-2/3 md:w-1/4 mx-auto my-28'>
                <div className="shadow-primary shadow-xl rounded-xl px-6 pt-10 pb-8">
                    <h4 className=' text-center mb-6  my-2 text-xl font-bold text-primary'>Login</h4>
                    <div className="relative my-2">
                        <input { ...register("email") } type="text" placeholder="Your Email" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="relative my-2">
                        <input { ...register("password") } type="password" placeholder="Your Password" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <button type="submit" className="mt-3 text-white w-full bg-primary hover:bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-primary ">Login</button>
                    <div className='mb-2 text-center flex flex-row items-center justify-evenly mt-2 '>
                        <hr className=' border-gray-500 w-1/4' />
                        or
                        <hr className='border-gray-500 w-1/4' />
                    </div>
                    <button onClick={ handleGoogleSignIn } type="button" className="text-white w-full bg-primary hover:bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Login With Google</button>

                    <p className='mt-3 text-center'>Don't have any Account? <span className='text-base font-semibold text-red-700'><Link to='/register'>Register</Link></span></p>
                </div>

            </form>
        </div>
    );
};

export default LogIn;