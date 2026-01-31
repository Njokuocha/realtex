import { replace, useLocation, useNavigate } from 'react-router-dom';
import trademark from '../library/bitmaps/trademark.png';
import useAuth from '../utilities/auth';
import { useEffect } from 'react';

const Login = () => {
const {login, loginErr, usernameErr, pwdErr} = useAuth();
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
    let acceptList = ['admin', 'employee', 'supplier'];
    if(!acceptList.includes(location?.state)) navigate('/user/typeselect', {replace: true});
}, [location]);

// login
const loginUser = async (event, form) => {
    event.preventDefault();
    const formdata = new FormData(form);

    (async () => await login(formdata, location.state) ? navigate('/dashboard', {replace: true}) : (() => null)())();
}

return (
    <section className="login w-full h-screen flex z-10" 
    id="login">
        <div className="desc_content h-full w-[40%] grow
        rounded-tr-[200px] bg-darkaqua
        relative before:content-[''] before:absolute before:top-0 before:left-0
        before:h-[50%] before:w-full before:bg-white dark:before:bg-gray-900 before:-z-10
        center max-md:hidden">
            <div className="w-[500px] text-center text-white center flex-wrap gap-3 
             px-2">
                <div className='w-[90px] h-[110px] rounded-full center bg-white'>
                    <img src={trademark} alt="trademark" 
                    className='w-[80px]' />
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Realtex Inventory Management System</h2>
                    <p className='text-xl font-bold pt-1'>The Realtime Software</p>
                </div>
            </div>
        </div>

        <div className="form_content h-full w-[60%] grow b
        rounded-bl-[200px] bg-white
        relative before:content-[''] before:absolute before:bottom-0 before:left-0
        before:h-[50%] before:w-full before:bg-darkaqua before:-z-10
        center max-md:w-full max-md:rounded-none max-md:px-2
        dark:bg-gray-900 dark:text-white">
            <form onSubmit={(event) => loginUser(event, event.currentTarget)} 
            className="form-design" 
            id='login-form'> {/* form start */}
                <div className="form-wrapper">
                    <div className="title center flex-col text-center gap-1">
                        <i className='bxr  bx-user text-4xl'></i> 
                        <p className="text-xl">Log into your account</p>
                        <p className='text-small text-darkaqua font-bold'>Log in as {location?.state}</p>
                    </div>
                    <p className='font-bold text-red-500'>{loginErr}</p>
                    <div className="input-field">
                        <input type="text" name='username' className="input" placeholder="Username/email" />
                        <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{usernameErr}</small></p>
                    </div>
                    <div className="input-field">
                        <input type="Password" name='password' className="input" placeholder="Password" />
                        <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{pwdErr}</small></p>
                    </div>
                    <div className="btns">
                        <button type='submit' className="btn btn-darkaqua w-full !rounded-full">Login</button>
                    </div>
                </div>
            </form> {/* form end */}
        </div>
    </section>
);
}
 
export default Login;