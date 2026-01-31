import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import useAuth, { useUser } from '../utilities/auth';
import modeToggle from '../utilities/action';

import Products from './canvas/Products'; // canvas -| products
import Sales from './canvas/Sales';       // canvas -| sales
import Suppliers from './canvas/Suppliers'; // canvas -| suppliers
import Employees from './canvas/Employees'; // canvas -| employees
import Admins from './canvas/Admins';       // canvas -| admins
import AddProduct from './canvas/AddProduct'; // canvas -| add_product

const Dashboard = () => {
const { user, getUser } = useUser();
const { logout, logoutStatus, logoutMsg } = useAuth();

const [productsRoute, setProductsRoute] = useState(false);
const [salesRoute, setSalesRoute] = useState(false);
const [suppliersRoute, setSuppliersRoute] = useState(false);
const [employeesRoute, setEmployeesRoute] = useState(false);
const [adminsRoute, setAdminsRoute] = useState(false);
const [addProduct, setAddProduct] = useState(false);

const navigate = useNavigate();
const [params] = useSearchParams();


useEffect(() => {
    let route = params.get('route');
    switch(route){
        case "sales":
            setSalesRoute(true);
            setProductsRoute(false);
            setSuppliersRoute(false);
            setEmployeesRoute(false);
            setAdminsRoute(false);
            setAddProduct(false);
        break;
        case "products":
            setProductsRoute(true);
            setSalesRoute(false);
            setSuppliersRoute(false);
            setEmployeesRoute(false);
            setAdminsRoute(false);
            setAddProduct(false);
        break;
        case "suppliers":
            setSuppliersRoute(true);
            setProductsRoute(false);
            setSalesRoute(false);
            setEmployeesRoute(false);
            setAdminsRoute(false);
            setAddProduct(false);
        break;
        case "employees":
            setEmployeesRoute(true);
            setSuppliersRoute(false);
            setProductsRoute(false);
            setSalesRoute(false);
            setAdminsRoute(false);
            setAddProduct(false);
        break;
        case "admins":
            setAdminsRoute(true);
            setEmployeesRoute(false);
            setSuppliersRoute(false);
            setProductsRoute(false);
            setSalesRoute(false);
            setAddProduct(false);
        break;
        case "add_product":
            setAddProduct(true);
            setAdminsRoute(false);
            setEmployeesRoute(false);
            setSuppliersRoute(false);
            setProductsRoute(false);
            setSalesRoute(false);
    }

}, [params]);

// fetch logged in user
useEffect(() => {
    (async () => {
        await getUser();
        if(!useUser.getState().user) navigate('/auth/login');
    })();
}, []);

// check logout status
useEffect(() => {
    if(logoutStatus){
        localStorage.removeItem("realtexToken");
        navigate('/user/typeselect');
        console.log(logoutMsg)
    }
}, [logoutStatus]);

return (
    <section className="dashboard flex w-full h-screen bg-gray-200 dark:bg-gray-900"
    // style={{backgroundColor: '#eee'}} 
    id="dashboard">

        {/* Sidebar */}
        {/* sidebar header */}
        <div className="sidebar w-[280px] h-full shadow-nav bg-white">
            <header className="h-[150px] bg-darkaqua center text-center flex-col text-white"
            >
                <div className='size-[60px] rounded-full center bg-white shadow-md'>
                    <i className='bxr  bx-user text-3xl text-darkaqua'></i> 
                </div>
                <p className='pt-2'>Hi, {user?.name ?? 'Guest'}</p>
                <p className='capitalize'>{user?.role === 'admin' ? 'store manager' : user.role}</p>
            </header>

            <div className="wrapper h-full overflow-auto flex flex-col justify-between
            dark:bg-gray-900 dark:text-white" 
            style={{height: 'calc(100% - 150px)'}}>
                <nav className=''>
                    <ul className='px-2 mt-2'>
                        <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                        dark:hover:bg-gray-700'>
                            {/* <i className='bxr  bxs-dashboard-alt text-xl'></i>  */}
                            <i className='bxr  bx-widget-horizontal text-xl'  ></i> 
                            <span className='text-lg'>Dashboard</span>
                        </li>
                        <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                        dark:hover:bg-gray-700'
                        onClick={() => navigate('?route=products')}>
                            {/* <i className='bxr bxs-building text-xl'></i>  */}
                            <i className='bxr  bx-flame text-xl' ></i> 
                            <span className='text-lg'>Products</span>
                        </li>
                        <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                        dark:hover:bg-gray-700'
                        onClick={() => navigate('?route=add_product')}>
                            <i className='bxr  bx-plus-circle text-xl'  ></i> 
                            <span className='text-lg'>Add Product</span>
                        </li>
                        <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                        dark:hover:bg-gray-700'
                        onClick={() => navigate('?route=sales')}>
                            {/* <i className='bxr  bxs-widget-vertical text-xl'></i>   */}
                            <i className='bxr  bx-file-detail text-xl'></i> 
                            <span className='text-lg'>Sales</span>
                        </li>
                        <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                        dark:hover:bg-gray-700'
                        >
                            {/* <i className='bxr  bxs-book-add text-xl'></i>   */}
                            <i className='bxr  bx-plus text-xl'></i> 
                            <span className='text-lg'>Add Sales</span>
                        </li>
                        {
                            user?.role.toLowerCase() === 'admin' &&
                            <React.Fragment>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=suppliers')}>
                                <i className='bxr  bx-truck text-xl'></i> 
                                <span className='text-lg'>Suppliers</span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'>
                                <i className='bxr  bx-donate-blood text-xl' ></i> 
                                <span className='text-lg'>Supplies</span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=employees')}>
                                <i className='bxr  bx-user text-xl'></i> 
                                <span className='text-lg'>Employees</span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=admins')}>
                                <i class='bxr  bx-layers-alt text-xl'></i> 
                                <span className='text-lg'>Store Managers</span>
                            </li>
                            </React.Fragment>
                        }
                    </ul>
                </nav>

                <div className="logout py-3 px-3">
                    <button className='btn btn-darkaqua w-full' onClick={() => logout()}>
                        <i className='bxr  bxs-arrow-in-up-right-stroke-square'></i> 
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>

        {/* sidebar content */}
        <div className="content grow h-full" style={{width: 'calc(100% - 280px)'}}>
            <div className="holder h-[150px] w-full px-3 aqua-darkaqua-gradient">
                {/* Content header */}
                <header className='flex justify-between items-center mx-auto h-[70px] px-2'>
                    <div className="title">
                        <p className='font-bold text-3xl text-darkaqua'>Realtex</p>
                    </div>

                    <div className='options center gap-4 text-darkaqua' onClick={modeToggle}>
                        <div className='size-[40px] bg-white rounded-full center shadow-md pointer'>
                            <i className='bxr  bx-cloud-moon'></i> 
                        </div>

                        <div className='center gap-2 bg-white rounded-full center shadow-md pointer
                        h-[40px] w-fit px-3 text-darkaqua'>
                            <i className='bxr  bx-user'></i> 
                            <span className='font-bold'>{user?.username}</span>
                            <i className='bxr  bx-caret-down'  ></i> 
                        </div>
                    </div>
                </header>

                {/* Content Canvas */}
                <div className="canvas canvas-height bg-white rounded-lg px-3 py-2 
                overflow-y-auto max-w-[1400px]
                dark:bg-gray-900 dark:text-white dark:border dark:border-gray-700">
                    {productsRoute && <Products />}
                    {salesRoute && <Sales />}
                    {suppliersRoute && <Suppliers />}
                    {employeesRoute && <Employees />}
                    {adminsRoute && <Admins />}
                    {addProduct && <AddProduct />}
                </div>
            </div>
            
        </div>
    </section>
);
}
 
export default Dashboard;