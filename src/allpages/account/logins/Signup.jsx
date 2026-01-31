import { Link } from "react-router-dom";

const Signup = () => {
return (
    <section className="signup pager" 
    id="signup">
        <form action="" className="form-design">
            <div className="form-wrapper">
                <div className="title center flex-col text-center">
                    <div className="title-img"><i className='bxr  bx-user text-3xl'></i> </div>
                    <h2 className="text-xl">Create an account</h2>
                </div>
                <div className="input-field">
                    <input type="text" className="input" placeholder="Name" />
                </div>
                <div className="input-field">
                    <input type="email" className="input" placeholder="Email" />
                </div>
                <div className="input-field">
                    <input type="password" className="input" placeholder="Password" />
                </div>
                <div className="input-field">
                    <input type="password" className="input" placeholder="Confirm Password" />
                </div>
                <div className="btns">
                    <button type="submit" className="btn btn-blue w-full">Submit</button>
                </div>

                <div className="form-more">
                    <p>Alreay have an account? <Link to="" className="text-blue hover:underline">Login</Link></p>
                </div>
            </div>
        </form>
    </section>
);
}
 
export default Signup;