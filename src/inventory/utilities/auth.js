import { create } from 'zustand';
import axios from 'axios';

// let url = `http://${window.location.hostname}:8000/api`;

// auth state handler
const useAuth = create((set, get) => ({
    user: null,
    usernameErr: '',
    pwdErr: '',
    loginErr: '',
    logoutStatus: true,
    setLogoutStatus: (logoutStatus) => set({ logoutStatus }),
    login: async (formdata, userType) => {
        let target;
        if(userType === 'admin') target = process.env.REACT_APP_BACKEND_URL + `/admin/login`;
        else if(userType === 'supplier') target = process.env.REACT_APP_BACKEND_URL + `/supplier/login`;
        else target = process.env.REACT_APP_BACKEND_URL + `/login`;

        try{
            const response = await axios.post(
                target,
                formdata,
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            );

            const { status, msg, token } = response.data;
            set({usernameErr: '', pwdErr: '', loginErr: response.data.loginErr});
            // console.log(response);

            if(status === 'success'){
                set({logoutStatus: false});
                localStorage.setItem('realtexToken', token);
                // console.log(msg);
                return true;
            }

        } catch(err) {
            console.log('Couldn\'t log user in: ' + err);
            // console.log(err.response.data.errors);
            let errors = err.response.data.errors;
            if(errors){
                set({
                usernameErr: errors.username,
                pwdErr: errors.password
            });
            }
            
        }
    },
    logout: async () => {
        const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/logout`, null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                Accept: 'application/json'
            }
        });

        const { status, msg } = response.data;

        if(status === 'success') {
            localStorage.removeItem("realtexToken");
            set({ logoutStatus: true });
            return true;
        } 
    }
}));

export default useAuth;

// user state handler
const useUser = create((set, get) => ({
    user: null,
    nameErr: null,
    emailErr: null,
    usernameErr: null,
    passwordErr: null,
    roleErr: null,
    getUser: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/user`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            set({ user: response.data });

        } catch(err) {
            console.log("Can't authenticate user");
            console.log(err);
        }
    },
    addUser: async (formdata) => {
        try{
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/user/add`, formdata, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { status, msg } = response.data;
            console.log(response.data);

            if(status === 'success'){
                set({
                    nameErr: null,
                    usernameErr: null,
                    emailErr: null,
                    passwordErr: null,
                    roleErr: null
                });
                // console.log(msg);
                return true;
            }

        } catch(err) {
            console.log(err.response.data.errors);
            let errors = err.response.data.errors;
            if(errors){
                set({
                    nameErr: errors.name,
                    usernameErr: errors.username,
                    emailErr: errors.email,
                    passwordErr: errors.password,
                    roleErr: errors.role
                });
            }
        }
    }
}));

export { useUser };



