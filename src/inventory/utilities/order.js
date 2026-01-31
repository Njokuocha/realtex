import { create } from "zustand";
import axios from "axios";

// let url = `http://${window.location.hostname}:8000/api`;

const useOrder = create((set, get) => ({
    orders: [],
    productErr: null,
    quantityErr: null,
    getOrders: async (id) => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { orders } = response.data;
            // console.log(response.data);
            set({orders});

        } catch(err) {
            console.log("Couldn't fetch orders: " + err.message);
        }
    },
    placeOrder: async (formdata) => {
        try{
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/orders/place`, formdata, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { status } = response.data;
            if(status === 'success') alert('Order placed successfully');

            if(status === 'success') {
                set({
                    productErr: null,
                    quantityErr: null
                });

                return true;
            }

        } catch(err) {
            console.log("Couldn't place orders: " + err.message);
            // console.log(err.response.data.errors);
            if(err.response.data.errors)
            {
                set({
                    productErr: err.response.data.errors.product,
                    quantityErr: err.response.data.errors.quantity
                });
            }
        }
    }
}));

export default useOrder;

