import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useSuppliers from "../../utilities/supplier";
import useProduct from "../../utilities/product";


const AddProduct = () => {
const { suppliers, getSuppliers } = useSuppliers();
const { addProduct, categoryErr, nameErr, supplierIdErr } = useProduct();

const navigate = useNavigate();

useEffect(() => {
    (async () => {
        await getSuppliers();
    })();
}, []);

// add new product
const addProductAction = (event, form) => {
    event.preventDefault();
    const formdata = new FormData(form);
    
    (async () => await addProduct(formdata) ? 
    (() => {
        alert('Product added');
        navigate('?route=products', {replace: true});
    })()
    : (() => null)())();
}

return (
    <section className="add_product w-full h-full overflow-x-auto center px-2"
    id="add_product">
        <form className="form-design" onSubmit={(event) => addProductAction(event, event.currentTarget)}>
            <div className="form-wrapper">
                <div className="title flex gap-4 items-center justify-center pb-2 text-darkaqua">
                    <i className='bxr  bx-book-add text-xl'></i>
                    <h2 className="text-lg">Add Product</h2>
                </div>

                 {/* Product name */}
                <div className="input-field">
                    <input type="text" name="name" placeholder="Product name"
                    className="input" />
                    <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{nameErr}</small></p>
                </div>
                {/* Product category */}
                <div className="input-field">
                    <input type="text" name="category" placeholder="Category (phone or headset or laptop etc)"
                    className="input" />
                    <p className='px-1 py-[2px] text-red-500'><small className='font-bold'>{categoryErr}</small></p>
                </div>

                {/* Product quantity */}
                <div className="input-field">
                    <input type="number" name="quantity" placeholder="No. of items (Optional)"
                    className="input" />
                </div>

                {/* Product location */}
                <div className="input-field">
                    <input type="text" name="location" placeholder="Stored Location e.g room 1 or room 2 (Optional)"
                    className="input" />
                </div>

                {/* Product supplier */}
                <div className="input-field">
                    <select name="supplier_id" className="input">
                        <option value="">Select Supplier</option>
                        {
                            suppliers?.map((item,key) => (
                                <option value={item.id} key={key}>{item.name}</option>
                            ))
                        }
                    </select>
                    <small className="opacity-80 px-1 py-1 flex items-center gap-1">
                        <i className='bxr  bx-info-circle text-lg opacity-40'></i> 
                        <span>If supplier is not present, first create supplier to proceed</span>
                    </small>
                    <p className='px-1 py-[2px] text-red-500'>
                        <small className='font-bold'>{supplierIdErr ? 'Select a supplier' : null}</small>
                    </p>
                </div>

                

                <div className="btns">
                    <button type="submit" className="btn btn-darkaqua w-full">
                        Add Product
                    </button>
                </div>
            </div>
        </form>

    </section>
);
}
 
export default AddProduct;