import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utilities/auth";


const AddUser = () => {
const { addUser, nameErr, emailErr, usernameErr, passwordErr, roleErr } = useUser();
const [userRole, setUserRole] = useState(false);
const navigate = useNavigate();

const addUserAction = async (event) => {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);
    for(let [item,val]  of formdata.entries()){
        console.log([item,val]);
    }

    let role = event.currentTarget.role.value;
    // await addUser(formdata);
    // console.log(`?route=${role}s`);

    await addUser(formdata) ? navigate(`?route=${role}s`) : (() => null)();
}

let roles = ["employee", "admin", "supplier"];
return ( 
    <section className="add_user h-full w-full center" 
    id="add_user">
        <form className="form-design" onSubmit={(event) => addUserAction(event)}>
            <div className="form-wrapper">
                <div className="title">
                    <h2 className="text-lg text-darkaqua text-center">Add User</h2>
                </div>

                <div className="input-field">
                    <input type="text" name="name" placeholder="Name"
                    className="input" />
                    <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{nameErr}</small></p>
                </div>
                <div className="input-field">
                    <input type="text" name="username" placeholder="Username"
                    className="input" />
                    <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{usernameErr}</small></p>
                </div>
                <div className="input-field"
                onChange={(event) => setUserRole(event.target.value)}>
                    <select name="role" className="input capitalize">
                        <option value="">Select Role</option>
                    {
                        roles.map((item,key) => (
                            <option value={item} key={key}>{item}</option>
                        ))
                    }
                    </select>
                    <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{roleErr}</small></p>
                </div>
                { userRole === 'supplier' &&
                <React.Fragment>
                <div className="input-field">
                    <input type="text" name="location" placeholder="Location (optional)"
                    className="input" />
                    {/* <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{emailErr}</small></p> */}
                </div>
                <div className="input-field">
                    <textarea name="note" className="input resize-none"
                    placeholder="Note/Description (optional)"></textarea>
                </div>
                </React.Fragment>
                }
                <div className="input-field">
                    <input type="email" name="email" placeholder="Email (optional)"
                    className="input" />
                    <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{emailErr}</small></p>
                </div>
                <div className="input-field">
                    <input type="password" name="password" placeholder="Password"
                    className="input" />
                    <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{passwordErr}</small></p>
                </div>

                <div className="btns">
                    <button className="btn btn-darkaqua w-full">Add user</button>
                </div>
            </div>
        </form>
    </section>
);
}
 
export default AddUser;