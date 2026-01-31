import { create } from 'zustand';
import axios from 'axios';

// let url = `http://${window.location.hostname}:8000/api`;

const useSales = create((set, get) => ({
    // salesNum: 0,
    sales: [],
    deleteMsg: null,
    currentSales: [],
    getSales: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/sales`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            let sales = [];
            let saleId;
            for(let index in response.data){
                sales.push(response.data[index]);
            }

            set({ sales });

        } catch(err) {
            console.log("Couldn't fetch products: " + err.message);
        }
    },
    deleteSale: async (id) => {
        try{
            const response = await axios.delete(process.env.REACT_APP_BACKEND_URL + `/sales/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { status, msg, newSales } = response.data;
            if(status) set({deleteMsg: msg, currentSales: newSales, sales: newSales});
            // alert(msg);

        } catch(err) {
            console.log("Couldn't fetch products: " + err.message);
        }
    },
    addSale: async (formdata) => {
        try{
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/sales/add`, formdata, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const {status} = response.data;
            if(status) return true;

        } catch(err) {
            console.log("Couldn't add sale: " + err.message);
            // console.log(err.response.data);
        }
    }
}));

export default useSales;