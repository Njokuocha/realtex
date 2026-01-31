import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useProduct from "../../utilities/product";
import { useNavigate } from "react-router-dom";
import checkedImg from "../../library/icons/checked.png";
import markImg from '../../library/icons/mark.png';
import addItemImg from '../../library/icons/add-item.png';


const AddProduct = () => {
const { products, getProducts, addProduct, nameErr, quantityErr } = useProduct();
const navigate = useNavigate();

useEffect(() => {
    (async () => await getProducts())();
}, []);

const addProductAction = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    for(let [item,val] of formdata.entries()){
        console.log([item,val]);
    }

    await addProduct(formdata) ? navigate('?route=products') : (() => null)();
    // await addProduct(formdata);
}

return ( 
    <section className="add_product w-full h-full center"
    id="add_product">
        <form className="form-design" onSubmit={(event) => addProductAction(event)}>
            <div className="form-wrapper">
                <div className="title">
                    <h2 className="text-lg text-darkaqua text-center">Add Product</h2>
                </div>

                <div className="input-field">
                    <select name="product" className="input">
                        <option value="">Select Product</option>
                    {
                        products?.map((item, key) => (
                            <option value={item.id} key={key}>{item.name}</option>
                        ))
                    }
                    </select>
                    <p className='px-1 py-[2px] text-red-500'><small>{nameErr}</small></p>
                </div>

                <div className="input-field">
                    <input type="number" name="quantity" placeholder="Quantity" className="input"/>
                    <p className='px-1 py-[2px] text-red-500'><small>{quantityErr}</small></p>
                </div>

                <div className="btns">
                    <button className="btn btn-darkaqua w-full">Add Product</button>
                </div>
            </div>
        </form>
    </section>
);
}
 
export default AddProduct;


const ScanAddProduct = () => {
const { scanAddProduct, checkMobileErr } = useProduct();
const [scanStatus, setScanStatus] = useState(false);
const [params] = useSearchParams();
// console.log(params);

const initiateScan = async () => {
    setScanStatus('scanning');
    await scanAddProduct(parseInt(params.get('product')), parseInt(params.get('quantity')), params.get('qrcode_token')) ?
    (() => {
        setScanStatus(true);
    })() :
    (() => {
        setScanStatus('rejected');
    })();
}

 let calc = parseInt(params.get('product')) + parseInt(params.get('quantity'));
 console.log(calc);

return (
    <section className="scan_add_product w-full h-screen center" 
    id="scan_add_product">
        <div className="content w-[300px]">
            {scanStatus === false && <figure className="center flex-col gap-2 text-center">
                <img src={addItemImg} alt="Success"
                className="w-[90px]" />
                <figcaption className="w-full">
                    <p className="font-bold">Product Captured</p>
                    <button className="btn btn-darkaqua w-full !rounded-full mt-2" 
                    onClick={async () => initiateScan()}>Add Product</button>
                </figcaption>
            </figure>}


            {scanStatus === true && <figure className="center flex-col gap-2 text-center">
                <img src={checkedImg} alt="Success"
                className="w-[90px]" />
                <figcaption>
                    <p className="font-bold">Product Scan Complete!</p>
                    <p className="text-small">
                    {
                        parseInt(params.get('quantity')) < 2 ?
                        parseInt(params.get('quantity')) + " Product Successfully Added" :
                        parseInt(params.get('quantity')) + " Products Successfully Added"
                    }
                        
                    </p>
                </figcaption>
            </figure>}

            {scanStatus === 'scanning' && <div className="center flex-col gap-2 text-center">
                <i className="fa-solid fa-spinner fa-pulse text-3xl text-darkaqua"></i>
                <span className="text-darkaqua">Updating product...</span>
            </div>}

            {scanStatus == 'rejected' && <figure className="center flex-col gap-2 text-center">
                <img src={markImg} alt="Success"
                className="w-[90px]" />
                <figcaption>
                    <p className="font-bold">Product Scan Failed</p>
                    <p className="text-small">Ensure QR Code is valid!</p>
                </figcaption>
            </figure>}
        </div>
    </section>
);
}

export { ScanAddProduct };
