import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useSales from "../../utilities/sales";
import axios from "axios";
import useProduct from "../../utilities/product";

const AddSale = ({user}) => {
const { products, getProducts } = useProduct();
const { addSale } = useSales();
const [displayProducts, setDisplayProducts] = useState([]);
const [rows, setRows] = useState([{}]);

const navigate = useNavigate();

useEffect(() => {
    (async () => {
        await getProducts();
        setDisplayProducts(displayProducts);
        // console.log(useProduct.getState().products);
    })();
}, []);

// dropdown filter 
const getProduct = (event, filterValue) => {
    setTimeout(() => {
        const filteredProducts = products.filter((item) => {
            return item.name.toLowerCase().includes(filterValue.toLowerCase());
        });

        setDisplayProducts(filteredProducts);
    }, 200);
}

const updatePrice = (currentInput) => {
    let nextInputVal = currentInput.parentElement.nextElementSibling.firstElementChild;
    if(nextInputVal.value !== '') nextInputVal.value = nextInputVal.value * currentInput.value;
    // if(nextInputVal.value !== '') console.log(nextInputVal.value);
}

const denyInputClear = (event, currentInput) => {
    // console.log(event.key);
    if(event.key === 'Backspace' && currentInput.value.length === 1){
        event.preventDefault();
        currentInput.value = 1;
    }
}

const addNewRow = () => {
    setRows([...rows, {}]); 
}


const submitForm = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    for(let [item,val] of formdata.entries()){
        console.log([item,val]);
    }

    await addSale(formdata) ? navigate('?route=sales') : (() => alert('Make sure all inputs are filled'))();

}

return (
<section className="addSale" 
id="addSale">
    <header className="flex justify-between items-center flex-wrap gap-3">
        <div className="title flex gap-6 items-center">
            <h2 className="text-2xl">Sale</h2>
        </div>
        <div>
            <ul className="flex gap-4 flex-wrap">
                <li className="center gap-1">
                    <span>Selling as:</span>
                    <span>{user.name}</span>
                </li>
                <li className="center gap-1">
                    <span>Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                </li>
            </ul>
        </div>
    </header>

    <div className="mt-3 max-w-[1000px]">
        <form onSubmit={(event) => submitForm(event)}>
            <div className="form-header flex justify-between items-center gap-4 flex-wrap
            py-2 px-2 bg-darkaqua text-white">
                <div className="form-title center gap-1">
                    <i className='bxr bx-layers-down-left' ></i> 
                    <span className="text-xl font-bold">Make Sale</span>
                </div>

                <div className="center flex-wrap w-[350px] max-md:w-full">
                    <label htmlFor="customer text-xl">Customer's Name:</label>
                    <input type="text" name="customer" placeholder="Enter customer name"
                    className="bg-transparent border-b-2 border-b-white outline-none 
                    grow px-1"/>
                </div>
            </div>

            <div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-2 py-1 border border-gray-300">Product</th>
                            <th className="px-2 py-1 border border-gray-300">Quantity</th>
                            <th className="px-2 py-1 border border-gray-300">Price (#)</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                    rows.map((item,key) => (
                        <tr key={key}>
                            <td className="px-2 py-1 border border-gray-300 relative">
                            <input type="text" name="product[]"
                            className="w-full outline-none focus:outline-1 focus:outline-darkaqua
                            dark:bg-transparent dark:focus:bg-darkaqua" 
                            onChange={(event) => getProduct(event, event.currentTarget.value)}
                            onFocus={(event) => event.target.nextElementSibling.classList.remove('hidden')}
                            onBlur={(event) => {
                                // console.log(event.target.value);
                                setTimeout(() => {
                                    event.target.nextElementSibling.classList.add('hidden');
                                }, [200]);
                            }}
                            />

                            {/* dropdown */}
                            <div className="dropdown py-1 absolute left-0 top-[100%] w-full bg-white shadow-md
                            h-auto max-h-[150px] overflow-auto hidden z-20 dark:bg-darkaqua">
                            <ul>
                            {
                                displayProducts?.map((item,key) => (
                                <li className="flex justify-between items-center py-[2px] text-[13px]
                                    hover:bg-gray-200 dark:hover:bg-sky-800 px-2 pointer" key={key}
                                    onClick={(event) => {
                                    event.currentTarget.parentElement.parentElement.nextElementSibling.value = item.id;
                                    event.currentTarget.parentElement.parentElement.previousElementSibling.value = item.name;
                                    // console.log(
                                        event.currentTarget.parentElement.
                                        parentElement.parentElement.parentElement.
                                        lastElementChild.firstElementChild.value = item.price
                                    // );
                                    // console.log(item.price);
                                    // localStorage.setItem('currentPrice', item.price);
                                    }}>
                                    <span>{item.name}</span>
                                    <span>{item.quantity} pcs</span>
                                </li>
                                ))
                            }
                            </ul>
                            </div>
                            <input type="hidden" name="product_id[]" />
                            </td>

                            <td className="px-2 py-1 border border-gray-300">
                                <input type="number" name="quantity[]"
                                className="w-full outline-none focus:outline-1 focus:outline-darkaqua text-center
                                dark:bg-transparent dark:focus:bg-darkaqua" 
                                // onChange={(event) => updatePrice(event.currentTarget)}
                                // onKeyDown={(event) => denyInputClear(event, event.currentTarget)}
                                />
                            </td>
                            <td className="px-2 py-1 border border-gray-300">
                                <input type="text" name="amount[]"
                                className="w-full outline-none focus:outline-1 focus:outline-darkaqua text-center
                                dark:bg-transparent dark:focus:bg-darkaqua" />
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>

                </table>
                <div className="mt-3 w-fit rounded-full pointer" onClick={addNewRow}>
                    <span className="size-[30px] rounded-full bg-darkaqua text-white center">
                        <i className='bxr  bx-plus text-lg'></i> 
                    </span>
                </div>

                <div className="btns mt-[5rem]">
                    <button className="btn btn-darkaqua w-full !bg-sky-800 !border-sky-800 
                    hover:!bg-darkaqua hover:!border-darkaqua">Proceed</button>
                </div>
            </div>
        </form>
    </div>
</section>
);
}
 
export default AddSale;