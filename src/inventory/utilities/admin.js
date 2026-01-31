import { create } from 'zustand';
import axios from 'axios';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

// let url = `http://${window.location.hostname}:8000/api`;

const useAdmins = create((set, get) => ({
    adminsNum: 0,
    admins: [],
    deleteMsg: null,
    currentAdmins: [],
    getAdmins: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/admins`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { admins, num } = response.data;

            set({ admins, adminsNum: num });
            // console.log(admins);

        } catch(err) {
            console.log("Couldn't fetch admins: " + err.message);
            // alert("Couldn't fetch employees");
        }
    },
    deleteAdmin: async (id, status, role) => {
        if(status === 'sub' || role !== 'admin'){
            alert("Only chief admins can fufill such action");
            return false;
        }
        try{
            const response = await axios.delete(process.env.REACT_APP_BACKEND_URL + `/admins/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { status, msg, newAdmins, newNum } = response.data;
            if(status) set({deleteMsg: msg, currentAdmins: newAdmins, admins: newAdmins, adminsNum: newNum});
            // alert(msg);

        } catch(err) {
            console.log("Couldn't delete admin: " + err.message);
        }
    }
}));

export default useAdmins;

