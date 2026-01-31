import { useEffect, useState } from "react";
import useSuppliers from "../../utilities/supplier";

const Suppliers = () => {
const { suppliers, getSuppliers, deleteSupplier, suppliersNum, currentSuppliers } = useSuppliers();
const [displaySuppliers, setDisplaySuppliers] = useState([]);

useEffect(() => {
    (async () => {
        await getSuppliers();
        setDisplaySuppliers(useSuppliers.getState().suppliers);
    })();
}, []);

// Track current products
useEffect(() => {
    setDisplaySuppliers(currentSuppliers);
}, [currentSuppliers]);

// action - filter products
const filterSuppliers = (searchValue) => {
    setTimeout(() => {
        const filteredSuppliers = suppliers.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase())
            || searchValue.includes(item.id);
        });
        setDisplaySuppliers(filteredSuppliers);
    }, 300);
}


return (
    <section className="suppliers w-full h-full overflow-x-auto" 
    id="suppliers">
        <header className="flex justify-between items-center pb-2">
            <div className="title flex gap-6 items-center">
                <h2 className="text-lg">Suppliers</h2>
                <p className="text-lg">Total: {suppliersNum ?? 0}</p>
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
                placeholder="Search Suppliers" 
                onInput={(event) => filterSuppliers(event.currentTarget.value)}
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
                        <th className="py-1 px-2">Name</th>
                        <th className="py-1 px-2">Email</th>
                        <th className="py-1 px-2">Location</th>
                        <th className="py-1 px-2">Product</th>
                        <th className="py-1 px-2">Created_At</th>
                        <th className="py-1 px-2">Description</th>
                        <th className="py-1 px-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    displaySuppliers?.map((item,key) => (
                    <tr className="odd:bg-gray-100 hover:bg-darkaqua_hover" key={key}>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.id}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.name}</td>
                        <td className="px-1 py-1 w-fit max-w-[250px] overflow-text pointer">{item.email}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.location}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.product}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{new Date(item?.created_at).toLocaleString() ?? '--'}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.description ?? '--'}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer flex justify-between items-center gap-1">
                        <span className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white"
                        onClick={() => deleteSupplier(item.id)}>
                            {/* <i className='bxr  bx-trash-alt'></i> */}
                            <i className='bxr  bx-trash'  ></i> 
                        </span>

                        <span className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white">
                            <i className='bxr  bx-pencil'  ></i> 
                        </span> 
                        </td>
                    </tr>
                    ))
                }
                </tbody>

            </table>
        </div>
    </section>
);
}
 
export default Suppliers;