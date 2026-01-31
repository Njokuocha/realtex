import { create } from 'zustand';
import axios from 'axios';

// let url = `http://${window.location.hostname}:8000/api`;

const useSuppliers = create((set, get) => ({
    suppliersNum: 0,
    suppliers: [],
    deleteMsg: null,
    currentSuppliers: [],
    getSuppliers: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/suppliers`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { suppliers, num } = response.data;

            set({ suppliers, suppliersNum: num });
            // console.log(suppliers);

        } catch(err) {
            console.log("Couldn't fetch suppliers: " + err.message);
            // alert("Couldn't fetch suppliers");
        }
    },
    deleteSupplier: async (id) => {
        try{
            const response = await axios.delete(process.env.REACT_APP_BACKEND_URL + `/suppliers/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { status, msg, newSuppliers, newNum } = response.data;
            if(status) {
                set({deleteMsg: msg, currentSuppliers: newSuppliers, suppliers: newSuppliers, suppliersNum: newNum});
                alert("Supplier Deleted Successfully");
            }
            // alert(msg);

        } catch(err) {
            console.log("Couldn't delete supplier: " + err.message);
        }
    }
}));

export default useSuppliers;

