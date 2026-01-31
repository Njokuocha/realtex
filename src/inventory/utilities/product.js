import { create } from 'zustand';
import axios from 'axios';

// let url = `http://${window.location.hostname}:8000/api`;

const useProduct = create((set, get) => ({
    productsNum: 0,
    products: [],
    deleteMsg: null,
    currentProducts: [],
    categoryErr: null,
    nameErr: null,
    priceErr: null,
    supplierIdErr: null,
    quantityErr: null,
    lowProducts: null,
    lowProductsNum: null,
    setProducts: (products) => set({ products }),
    getProducts: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/products`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { products, num } = response.data;

            set({ products, productsNum: num });
            // console.log(response.data);

        } catch(err) {
            console.log("Couldn't fetch products: " + err.message);
            // alert("Couldn't fetch products");
        }
    },
    getLowProducts: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/products/low`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { products, num } = response.data;

            set({ lowProducts: products, lowProductsNum: num });
            // console.log(response.data);

        } catch(err) {
            console.log("Couldn't fetch products: " + err.message);
            // alert("Couldn't fetch low products");
        }
    },
    deleteProduct: async (id) => {
        try{
            const response = await axios.delete(process.env.REACT_APP_BACKEND_URL + `/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { status, msg, newProducts, newNum } = response.data;
            if(status){
                set({deleteMsg: msg, currentProducts: newProducts, products: newProducts, productsNum: newNum});
                alert("Product Deleted Successfully");
            }

        } catch(err) {
            console.log("Couldn't delete product " + err.message);
            // alert("Couldn't delete product")
        }
    },
    createProduct: async (formdata) => {
        try{
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/products/create`, formdata, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { status } = response.data;
            if(status)
            {
                set({
                    categoryErr: null,
                    nameErr: null,
                    supplierIdErr: null
                });

                return true;
            }

        } catch(err) {
            console.log("Couldn't create product" + err.message);
            // console.log(err.response.data.errors);
            if(err.response.data.errors)
            {
                set({
                    categoryErr: err.response.data.errors.category,
                    nameErr: err.response.data.errors.name,
                    priceErr: err.response.data.errors.price,
                    supplierIdErr: err.response.data.errors.supplier_id
                });
            }
        }
    },
    addProduct: async (formdata) => {
        try{
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/products/add`, formdata, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            // console.log(response.data);
            const { status } = response.data;
            if(status)
            {
                set({
                    nameErr: null,
                    quantityErr: null
                });

                return true;
            }
            
        } catch(err) {
            console.log("Couldn't add product" + err.message);
            // console.log(err.response.data.errors);
            // console.log(err.response.data.errors);
            if(err.response.data.errors)
            {
                set({
                    nameErr: err.response.data.errors.product,
                    quantityErr: err.response.data.errors.quantity,
                });
            }
        }
    },
    scanAddProduct: async (product, quantity, qrcode_token) => {
        let data = { product, quantity, qrcode_token };
        try{
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/products/scan/qrcode/add`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            // console.log(response.data);
            const { status } = response.data;
            // console.log(response.data);
            // console.log(response.data);
            if(status === 'success'){
                return true;
            } 
            
            return false;
            
        } catch(err) {
            console.log("Couldn't add product: " + err.message);
            // alert(err.response.data.errors);
            // console.log(err.response.data);
            // console.log(err.response.data.errors);
            // set({checkMobileErr: err.response.data.message});
        }
    }
}));

export default useProduct;

