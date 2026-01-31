import { useEffect, useState } from "react";
import useProduct from "../../utilities/product";

import echo from "../../utilities/pusher"; // pusher echo

const Products = ({user}) => {
const { products, setProducts, productsNum, getProducts, currentProducts, deleteProduct } = useProduct();
const [displayProducts, setDisplayProducts] = useState([]);


useEffect(() => {
    (async () => {
        await getProducts();
        setDisplayProducts(useProduct.getState().products);
    })();
}, []);

// pusher realtime listener
useEffect(() => {
    echo.channel("products")   // same name as broadcastOn()
    .listen(".product_change", (event) => {
        console.log(event);
        if(event.products?.status === 'new_record'){
            (async () => {
                await getProducts();
                setProducts(useProduct.getState().products);
                setDisplayProducts(useProduct.getState().products);
            })();
        }
    });
}, []);

// Track current products
useEffect(() => {
    setDisplayProducts(currentProducts);
}, [currentProducts]);

// action - filter products
const filterProducts = (searchValue) => {
    setTimeout(() => {
        const filteredProducts = products.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase())
            || searchValue.includes(item.id)
        });
        setDisplayProducts(filteredProducts);
    }, 300);
}


return (
    <section className="products w-full h-full flex flex-col" 
    id="products">
        <header className="min-h-[90px] flex flex-col gap-2">
            <div className="top flex gap-2 justify-between items-center flex-wrap">
                <div className="title flex gap-6 items-center">
                    <h2 className="text-lg">Products</h2>
                    <p className="text-lg">Total: {productsNum ?? 0}</p>
                </div>

                <div className="actions max-[312px]:mx-auto">
                    <ul className="flex">
                        <li className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white">
                            <i className='bxr  bx-plus-square text-lg'></i> 
                        </li>
                        <li className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white">
                            <i className='bxr  bx-printer text-lg'></i>
                        </li>
                        <li className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white">
                            <i className='bxr  bx-trash-x text-lg' ></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="search">
                <form className="w-[90%] max-sm:w-full mx-auto flex items-center gap-1">
                    <input type="search" name="product_filter" className="input !rounded-full !w-[90%]" 
                    placeholder="Search Product" 
                    onInput={(event) => filterProducts(event.currentTarget.value)}
                    />
                    <button type="button" className="size-[40px] center rounded-full pointer text-darkaqua
                        shadow-md border-light">
                        <i className='bxr  bx-search'></i> 
                    </button>
                </form>
            </div>
        </header>

        
        <div className="content overflow-x-auto py-6"
        style={{height: 'calc(100% - 90px)'}}>
            <table>
                <thead>
                    <tr className="bg-darkaqua text-white">
                        <th className="py-1 px-2">Id</th>
                        <th className="py-1 px-2">Name</th>
                        <th className="py-1 px-2">Price (&#8358;)</th>
                        <th className="py-1 px-2">Category</th>
                        <th className="py-1 px-2">Location</th>
                        <th className="py-1 px-2">Quantity</th>
                        <th className="py-1 px-2">Supplier</th>
                        <th className="py-1 px-2">Created_At</th>
                        {
                            user?.role === 'admin' &&
                            <th className="py-1 px-2">Actions</th>
                        }
                        
                    </tr>
                </thead>
                <tbody>
                {
                    displayProducts?.map((item,key) => (
                    <tr className="odd:bg-gray-100 dark:odd:bg-gray-800 hover:bg-darkaqua_hover" key={key}>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.id}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.name}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.price}</td>
                        <td className="px-1 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.category}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.location}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.quantity}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.supplier.name}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{new Date(item?.created_at).toLocaleString() ?? '--'}</td>
                        {
                            user?.role === 'admin' && 
                            <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer flex justify-between items-center gap-1">
                            <span className="size-[30px] center rounded-full pointer text-darkaqua
                            hover:shadow-md hover:bg-darkaqua hover:text-white"
                            onClick={() => deleteProduct(item.id)}>
                                {/* <i className='bxr  bx-trash-alt'></i> */}
                                <i className='bxr  bx-trash'  ></i> 
                            </span>

                            <span className="size-[30px] center rounded-full pointer text-darkaqua
                            hover:shadow-md hover:bg-darkaqua hover:text-white">
                                <i className='bxr  bx-pencil'  ></i> 
                            </span> 
                        </td>
                        }
                        
                    </tr>
                    ))
                }
                </tbody>

            </table>
        </div>
    </section>
);
}
 
export default Products;