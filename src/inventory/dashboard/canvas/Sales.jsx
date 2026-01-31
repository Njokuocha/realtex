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
    console.log(sales);
    setTimeout(() => {
        const filteredSales = sales.filter(item => {
            return item[0].customer.toLowerCase().includes(searchValue.toLowerCase()) || 
            item[0].user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item[0].sale_batch_id.toLowerCase().includes(searchValue.toLowerCase());
        });
        setDisplaySales(filteredSales);
    }, 300);
}


return (
<section className="sales w-full h-full flex flex-col" 
id="sales">
     <header className="min-h-[90px] flex flex-col gap-2">
            <div className="top flex gap-2 justify-between items-center flex-wrap">
                <div className="title flex gap-6 items-center">
                    <h2 className="text-lg">All Sales</h2>
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
                    placeholder="Search Sales" 
                    onInput={(event) => filterSales(event.currentTarget.value)}
                    />
                    <button type="button" className="size-[40px] center rounded-full pointer text-darkaqua
                        shadow-md border-light">
                        <i className='bxr  bx-search'></i> 
                    </button>
                </form>
            </div>
        </header>

        <div className="content py-6 flex flex-col gap-6 overflow-x-auto" 
        style={{height: 'calc(100% - 90px)'}}
        id="sales">
            <div className="title">
                <h1 className="text-darkaqua">All Sales</h1>
            </div>
                {
                    displaySales?.map((items,key) => (
                    <section className="sale text-smal" key={key}>
                    <div className="mb-1">
                        <p className="text-smal">Sale id: {items[0].sale_batch_id}</p>
                        <p className="text-smal">Sold by: {items[0].user.name}</p>
                        <p className="text-smal">Customer: {items[0].customer}</p>
                    </div>
                    <table>
                        <thead>
                            <tr className="bg-darkaqua text-white">
                                {/* <th className="py-1 px-2">S/N</th> */}
                                {/* <th className="py-1 px-2">Customer</th> */}
                                <th className="py-1 px-2">Product</th>
                                <th className="py-1 px-2">Quantity</th>
                                <th className="py-1 px-2">Price (&#8358;)</th>
                                <th className="py-1 px-2">Sold on</th>
                                {/* <th className="py-1 px-2">Time</th> */}
                                {/* <th className="py-1 px-2">Actions</th> */}
                            </tr>
                        </thead>

                        <tbody>
                        {
                            
                                
                            items.map((item,key) => (
                            <tr className="even:bg-gray-200 dark:even:bg-gray-800 hover:bg-darkaqua_hover pointer" key={key}>
                                {/* <td>{keys + 1}</td> */}
                                {/* <td className="my-1 px-2 w-fit max-w-[250px] overflow-text">{item.customer}</td> */}
                                <td className="my-1 px-2 w-fit max-w-[250px] overflow-text">{item.product}</td>
                                <td className="my-1 px-2 w-fit max-w-[250px] overflow-text text-center">{item.quantity}</td>
                                <td className="my-1 px-2 w-fit max-w-[250px] overflow-text text-center">{item.amount}</td>
                                {/* <td>{new Date(item?.created_at).toLocaleString() ?? '--'}</td> */}
                                <td className="my-1 px-2 w-fit max-w-[250px] overflow-text">{new Date(item?.created_at).toLocaleDateString() ?? '--'}</td>
                                {/* <td className="my-1 px-2 w-fit max-w-[250px] overflow-text">{new Date(item?.created_at).toLocaleTimeString() ?? '--'}</td> */}
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                    </section>
                    ))
                }
        </div>
</section>
);
}
 
export default Sales;