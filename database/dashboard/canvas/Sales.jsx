import  from "react";
import React, { useEffect, useState } from "react";
import useSales from "../../utilities/sales";


const Sales = () => {
const {sales, getSales, deleteSale, currentSales} = useSales();
const [displaySales, setDisplaySales] = useState([]);


// fetch sales
useEffect(() => {
    (async () => {
        await getSales();
        setDisplaySales(useSales.getState().sales);
    })();
}, []);

// Track current sales
useEffect(() => {
    setDisplaySales(currentSales);
}, [currentSales]);

// action - filter sales
const filterSales = (searchValue) => {
    setTimeout(() => {
        const filteredSales = sales.filter((item) => {
            return item.cust_name.toLowerCase().includes(searchValue.toLowerCase())
            || searchValue.includes(item.id);
        });
        setDisplaySales(filteredSales);
    }, 300);
}


return (
<section className="sales w-full h-full overflow-x-auto" 
id="sales">
        <header className="flex justify-between items-center pb-2">
            <div className="title flex gap-6 items-center">
                <h2 className="text-lg">Sales</h2>
                {/* <p className="text-lg">Total: {productsNum ?? 0}</p> */}
            </div>

            <div className="actions">
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
        </header>

        <div className="search pb-4">
            <form className="w-[400px] flex gap-2">
                <input type="search" name="product_filter" className="input !rounded-full !w-[90%]" 
                placeholder="Search Sales" 
                onInput={(event) => filterSales(event.currentTarget.value)}
                />
                <button type="submit" className="size-[40px] center rounded-full pointer text-darkaqua
                    shadow-md border-light">
                    <i className='bxr  bx-search'></i> 
                </button>
            </form>
        </div>

        <div className="content">
            <table>
                <thead>
                    <tr className="bg-darkaqua text-white">
                        <th className="py-1 px-2">Id</th>
                        <th className="py-1 px-2">Customer</th>
                        <th className="py-1 px-2">Product</th>
                        <th className="py-1 px-2">Quantity</th>
                        {/* <th className="py-1 px-2">Seller</th> */}
                        {/* <th className="py-1 px-2">Seller_id</th> */}
                        <th className="py-1 px-2">Sold on</th>
                        <th className="py-1 px-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    displaySales?.map((item,key) => (
                        <React.Fragment>
                    <tr className="odd:bg-gray-100 hover:bg-darkaqua_hover" key={key}>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.id}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.customer}</td>
                        <td className="px-1 py-1 w-fit max-w-[250px] overflow-text pointer">{item.product}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.quantity}</td>
                        {/* <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.seller}</td> */}
                        {/* <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.seller_id}</td> */}
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{new Date(item?.created_at).toLocaleString() ?? '--'}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer flex justify-between items-center gap-1">
                        <span className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white"
                        onClick={() => deleteSale(item.id)}>
                            <i className='bxr  bx-trash' ></i> 
                        </span>

                        <span className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white">
                            <i className='bxr  bx-pencil'  ></i> 
                        </span> 
                        </td>
                    </tr>
                    <div className="border border-black">dad</div>
                        </React.Fragment>
                    ))
                }
                </tbody>

            </table>
        </div>
</section>
);
}
 
export default Sales;