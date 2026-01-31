import { useEffect, useState } from "react";
import useSuppliers from "../../utilities/supplier";
import useProduct from "../../utilities/product";
import useOrder from "../../utilities/order";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
const { suppliers, getSuppliers } = useSuppliers();
const { products, getProducts } = useProduct();
const { placeOrder, productErr, quantityErr } = useOrder();
const [showOrderForm, setShowOrderForm] = useState(false);

// const [currentSupplier, setCurrentSupplier] = useState(null);
const [supplierProducts, setSupplierProducts] = useState(null);

const [supplierId, setSupplierId] = useState(null);
const [supplierName, setSupplierName] = useState(null);

const navigate = useNavigate();

useEffect(() => {
    (async () => {
        await getSuppliers();
        await getProducts();
    })();
}, []);

const prepareOrder = (input) => {
    console.log(input.value);
    if(input.value == ''){
        setShowOrderForm(false);
        setSupplierName(null);
        setSupplierId(null);
        return;
    };

    const filteredSupplierProducts = products?.filter((item) => {
        return item.supplier.id == input.value;
    });
    setSupplierProducts(filteredSupplierProducts);
    
    setSupplierName(filteredSupplierProducts[0].supplier.name);
    setSupplierId(filteredSupplierProducts[0].supplier.id);
    setShowOrderForm(true);
}

const sendOrder = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    for(let [item,val]  of formdata.entries()){
        console.log([item,val]);
    }

    await placeOrder(formdata) ? navigate('?route=views') : (() => null)();
}

return (  
    <section className="placeOrder flex gap-3 h-full max-[950px]:flex-wrap" 
    id="placeOrder">

{/* choose supplier select input */}
        <div className="choose_supplier h-full overflow-auto grow center
        max-[950px]:h-[100px]">
            <div className="w-[400px]">
                <div className="title">
                    <h2 className="text-2xl text-center">Choose Supplier</h2>
                </div>

                <div className="choose mt-2">
                    <select className="input pointer"
                    onChange={(event) => prepareOrder(event.target)}>
                        <option value="">Select here</option>
                    {
                        suppliers?.map((item,key) => (
                            <option value={item.id} key={key}>{item.name}</option>
                        ))
                    }
                    </select>
                </div>
            </div>
        </div>


{/* place order form */}
        <div className="place_order h-full overflow-auto w-[400px] bg-sky-800 text-white
         center px-3 rounded-lg grow">
            {showOrderForm && 
            <form className="w-full" onSubmit={(event) => sendOrder(event)}>
                <div className="form-wrapper">
                    <div className="form-title text-center px-3 mb-2">
                        <h2 className="text-2xl font-bold">{supplierName}</h2>
                        <p className="text-small">Place Order</p>
                    </div>

                    {/* order product */}
                    <div className="input-field">
                        <select name="product" className="input text-darkaqua pointer dark:text-white dark:border-white">
                            <option value="">{supplierName} Products</option>
                        {
                            supplierProducts?.map((item,key) => (
                                <option value={item.name} key={key}>{item.name}</option>
                            ))
                        }
                        </select>
                        <p className="px-1 text-zinc-400"><small>{productErr}</small></p>
                    </div>

                    {/* supplier id - hidden */}
                        <input type="number" name="supplier_id" className="input text-darkaqua" 
                        placeholder="Supplier Id" 
                        value={supplierId} hidden readOnly/>

                    {/* supplier name - hidden */}
                        <input type="text" name="supplier_name" className="input text-darkaqua" 
                        placeholder="Supplier Name" 
                        value={supplierName} hidden readOnly/>

                    {/* order quantity */}
                    <div className="input-field">
                        <input type="number" name="quantity" placeholder="Product Quantity"
                        className="input text-darkaqua w-full dark:text-white dark:border-white" />
                        <p className="px-1 text-zinc-400"><small>{quantityErr}</small></p>
                    </div>

                    {/* order note/description */}
                    <div className="input-field">
                        <textarea name="note" placeholder="Brief note/description"
                        className="input text-darkaqua resize-none dark:text-white dark:border-white"></textarea>
                    </div>

                    <div className="btns">
                        <button type="submit" className="btn btn-outline-white w-full">Place Order</button>
                    </div>
                </div>
            </form>}

            {!showOrderForm && 
            <div>
                <p className="opacity-30">No supplier selected</p>
            </div> }
        </div>
    </section>
);
}
 
export default PlaceOrder;