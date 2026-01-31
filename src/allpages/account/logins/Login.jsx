import { Link } from "react-router-dom";

const Login = () => {
return (
    <section className="login bg-white text-black dark:bg-gray-900 dark:text-white pager" 
    id="login">
        <form action="" className="form-design">
            <div className="form-wrapper">
                <div className="title center flex-col text-center">
                    <div className="title-img"><i className='bxr  bx-user text-3xl'></i> </div>
                    <h2 className="text-xl">Log into your account</h2>
                </div>
                <div className="input-field">
                    <input type="email" className="input" placeholder="Email" />
                </div>
                <div className="input-field">
                    <input type="password" className="input" placeholder="Password" />
                </div>
                <div className="btns">
                    <button type="submit" className="btn btn-blue w-full">Submit</button>
                </div>

                <div className="form-more">
                    <p>Don't have an account? <Link to="" className="text-blue hover:underline">Create Account</Link></p>
                </div>
            </div>
        </form>
    </section>
);
}
 
export default Login;