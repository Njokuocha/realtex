import { useEffect, useState } from "react";
import useAdmins from "../../utilities/admin";



const Admins = () => {
const { admins, getAdmins, deleteAdmin, adminsNum, currentAdmins } = useAdmins();
const [displayAdmins, setDisplayAdmins] = useState([]);

useEffect(() => {
    (async () => {
        await getAdmins();
        setDisplayAdmins(useAdmins.getState().admins);
    })();
}, []);

// Track current products
useEffect(() => {
    setDisplayAdmins(currentAdmins);
}, [currentAdmins]);

// action - filter products
const filterAdmins = (searchValue) => {
    setTimeout(() => {
        const filteredAdmins = admins.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase())
            || searchValue.includes(item.id);
        });
        setDisplayAdmins(filteredAdmins);
    }, 300);
}


return (
    <section className="admins w-full h-full overflow-x-auto" 
    id="admins">
        <header className="flex justify-between items-center pb-2">
            <div className="title flex gap-6 items-center">
                <h2 className="text-lg">Store Managers (Admins)</h2>
                <p className="text-lg">Total: {adminsNum ?? 0}</p>
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
                placeholder="Search Admins" 
                onInput={(event) => filterAdmins(event.currentTarget.value)}
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
                        <th className="py-1 px-2">Username</th>
                        <th className="py-1 px-2">Email</th>
                        <th className="py-1 px-2">Status</th>
                        <th className="py-1 px-2">Badge</th>
                        <th className="py-1 px-2">Created_At</th>
                        {/* <th className="py-1 px-2">Updated_At</th> */}
                        <th className="py-1 px-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    displayAdmins?.map((item,key) => (
                    <tr className="odd:bg-gray-100 hover:bg-darkaqua_hover" key={key}>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.id}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.name}</td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{item.username}</td>
                        <td className="px-1 py-1 w-fit max-w-[250px] overflow-text pointer">{item.email}</td>
                        <td className="px-1 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.status}</td>
                        <td className="px-1 py-1 w-fit max-w-[250px] overflow-text pointer text-center">
                            {
                                item.status === 'chief' ? 
                                <i className='bxr  bx-check-circle text-xl' style={{color: '#4caf50'}}></i> 
                                : '--'
                                // <i className='bxr  bx-x' ></i> 
                            }
                        </td>
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{new Date(item?.created_at).toLocaleString() ?? '--'}</td>
                        {/* <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer">{new Date(item?.updated_at).toLocaleString() ?? '--'}</td> */}
                        {/* <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer text-center">{item.description ?? '--'}</td> */}
                        <td className="px-2 py-1 w-fit max-w-[250px] overflow-text pointer flex justify-between items-center gap-1">
                        <span className="size-[30px] center rounded-full pointer text-darkaqua
                        hover:shadow-md hover:bg-darkaqua hover:text-white"
                        onClick={() => deleteAdmin(item.id, item?.status, item?.role)}>
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
 
export default Admins;