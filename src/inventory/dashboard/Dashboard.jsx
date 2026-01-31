import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import useAuth, { useUser } from '../utilities/auth';
import useNotification from '../utilities/notification';
import modeToggle from '../utilities/action';

import Products from './canvas/Products'; // canvas -| products
import Sales from './canvas/Sales';       // canvas -| sales
import Suppliers from './canvas/Suppliers'; // canvas -| suppliers
import Employees from './canvas/Employees'; // canvas -| employees
import Admins from './canvas/Admins';       // canvas -| admins
import CreateProduct from './canvas/CreateProduct'; // canvas -| create_product
import AddProduct from './canvas/AddProduct'; // canvas -| add_product
import AddSale from './canvas/AddSale';       // canvas -| add_sale
import DashboardTabs from './canvas/DashboardTabs'; // canvas -| views
import Orders from './canvas/Orders';         // canvas -| orders
import PlaceOrder from './canvas/PlaceOrder'; // canvas -| place_order
import AddUser from './canvas/AddUser';       // canvas -| add_user
import Notification from './canvas/Notification'; // canvas -| notification
import LowStocks from './canvas/LowStocks';   // canvas -| low_stocks
import ViewChart from './canvas/ViewChart';   // canvas -| view_chart

import echo from '../utilities/pusher';

import hamburger from '../library/icons/menu.png';


const Dashboard = () => {
const { user, getUser } = useUser();
const { logout, logoutStatus, setLogoutStatus } = useAuth();
const { checkNotification, notificationStatus, setNotificationStatus, markAsRead } = useNotification();
const [isScreen650, setIsScreen650] = useState();

const navigate = useNavigate();
const [params] = useSearchParams();

let route = params.get('route'); // track current route

// console.log(logoutStatus, 'Logout Status');


// fetch logged in user
useEffect(() => {
    (async () => {
        await getUser();
        if(!useUser.getState().user) {
            navigate('/user/typeselect');
            return;
        }
        if(logoutStatus) setLogoutStatus(false);

        await checkNotification();
    })();

    echo.channel("notification")   // same name as broadcastOn()
    .listen(".new_ntf", (event) => {
        // console.log(event);
        if(event.ntf?.status === 'new_ntf'){
            (async () => {
                setNotificationStatus(true);
            })();
        }
    });

    const mediaQuery650 = window.matchMedia('(max-width: 650px)');
    const handler650 = (event) => setIsScreen650(event.matches);
    setIsScreen650(mediaQuery650.matches);
    mediaQuery650.addEventListener('change', handler650);

    return () => {
        mediaQuery650.removeEventListener('change', handler650);
    }
}, []);

// console.log(isScreen650);

return (
    !logoutStatus &&
    <section className="dashboard flex w-full h-screen bg-gray-200 dark:bg-gray-900"
    id="dashboard">

        {/* Sidebar */}
        {/* sidebar header */}
        {!isScreen650 && 
        <div className="sidebar w-[280px] h-full shadow-nav bg-white
        max-[850px]:w-[240px] 
        max-[650px]:hidde max-[650px]:absolute max-[650px]:top-0 max-[650px]:left-0
        max-[240px]:w-full z-30
        ">
            <header className="h-[150px] bg-darkaqua center text-center flex-col text-white px-2">
                <div className='size-[60px] rounded-full center bg-white shadow-md'>
                    <i className='bxr  bx-user text-3xl text-darkaqua'></i> 
                </div>
                <p className='pt-2 overflow-text w-[90%]'>Hi, {user?.name ?? 'Guest'}</p>
                <p className='capitalize'>{user?.role === 'admin' ? 'store manager' : user?.role}</p>
            </header>

            <div className="wrapper h-full overflow-auto flex flex-col justify-between
            dark:bg-gray-900 dark:text-white" 
            style={{height: 'calc(100% - 150px)'}}>
                <nav className=''>
                    <ul className='px-2 mt-2'>
                        <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                        dark:hover:bg-gray-700'
                        onClick={() => navigate('?route=views')}>
                            {/* <i className='bxr  bxs-dashboard-alt text-xl'></i>  */}
                            <i className='bxr  bx-widget-horizontal text-xl'  ></i> 
                            <span className='text-lg'>Dashboard</span>
                        </li>

                        {
                            user?.role === 'employee' &&
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=add_sale')}>
                                {/* <i className='bxr  bxs-book-add text-xl'></i>   */}
                                <i className='bxr  bx-plus text-xl'></i> 
                                <span className='text-lg'>Add Sales</span>
                            </li>
                        }

                        {/* user/admin routes */}
                        {
                            user?.role !== 'supplier' &&
                            <React.Fragment>
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
                            </React.Fragment>
                        }

                        {/* supplier routes */}
                        {
                            user?.role.toLowerCase() === 'supplier' &&
                            <React.Fragment>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=orders')}>
                                <i className='bxr  bx-donate-blood text-xl' ></i>  
                                <span className='text-lg'>Orders</span>
                            </li>
                            </React.Fragment>
                        }

                        {/* admin extra routes (access) */}
                        {
                            user?.role.toLowerCase() === 'admin' &&
                            <React.Fragment>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => {
                                navigate('?route=notifications');
                                markAsRead();
                            }}>
                                <i className='bxr  bx-bell-ring text-xl' ></i>  
                                <span className='text-lg grow flex items-center justify-between'>
                                    <span>Notification</span> 
                                    {
                                        notificationStatus &&
                                        <i className='bxr  bxs-radio-circle text-sm text-red-600'  ></i> 
                                    }
                                    
                                </span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => {
                                navigate('?route=view_chart');
                                markAsRead();
                            }}>
                                <i className='bx  bx-chart-spline text-xl' ></i>  
                                <span className='text-lg grow flex items-center justify-between'>
                                    <span>View Chart</span> 
                                        <i className='bxr  bxs-radio-circle text-sm text-emerald-600' ></i> 
                                </span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=create_product')}>
                                <i className='bxr  bx-layers-alt text-xl' ></i>  
                                <span className='text-lg'>Create Product</span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=suppliers')}>
                                <i className='bxr  bx-truck text-xl'></i> 
                                <span className='text-lg'>Suppliers</span>
                            </li>
                            {/* <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'>
                                <i className='bxr  bx-donate-blood text-xl' ></i> 
                                <span className='text-lg'>Supplies</span>
                            </li> */}
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=employees')}>
                                <i className='bxr  bx-user text-xl'></i> 
                                <span className='text-lg'>Employees</span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=admins')}>
                                <i className='bxr  bx-layers-alt text-xl'></i> 
                                <span className='text-lg'>Store Managers</span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=place_order')}>
                                <i className='bxr  bx-donate-blood text-xl' ></i> 
                                <span className='text-lg'>Place Order</span>
                            </li>
                            <li className='flex items-center gap-2 px-2 py-1 rounded-sm pointer hover:bg-gray-200
                            dark:hover:bg-gray-700'
                            onClick={() => navigate('?route=add_user')}>
                                <i className='bxr  bx-plus-square text-xl' ></i> 
                                <span className='text-lg'>Add User</span>
                            </li>
                            </React.Fragment>
                        }
                    </ul>
                </nav>

                <div className="logout py-3 px-3">
                    <button className='btn btn-darkaqua w-full' onClick={async () => {
                        await logout() ? navigate('/user/typeselect', {replace: true}) 
                            : (() => null)();
                    }}>
                        <i className='bxr  bxs-arrow-in-up-right-stroke-square'></i> 
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>}

        {/* sidebar content */}
        <div className="content grow h-full" style={{width: 'calc(100% - 280px)'}}>
            <div className="holder h-[150px] w-full px-3 aqua-darkaqua-gradient">

                {/* Content header */}
                <header className='flex justify-between items-center mx-auto h-[70px] px-2 gap-3
                flex-wrap
                '>
                    <div className="title">
                        <p className='font-bold text-3xl text-darkaqua'>Realtex</p>
                    </div>

                    <div className='options center gap-2 text-darkaqua' >
                        <div className='size-[40px] bg-white rounded-full center shadow-md pointer
                        max-[650px]:text-small max-[650px]:size-[30px]
                        max-[480px]:hidden
                        ' onClick={modeToggle}>
                            <i className='bxr  bx-cloud-moon'></i> 
                        </div>

                        <div className='center gap-2 bg-white rounded-full center shadow-md pointer
                        h-[40px] w-fit px-3 text-darkaqua
                        max-[650px]:text-small max-[650px]:h-[30px]
                        max-[480px]:hidden
                        '>
                            <i className='bxr  bx-user'></i> 
                            <span className='font-bold'>{user?.username}</span>
                            <i className='bxr  bx-caret-down'  ></i> 
                        </div>

                        <div className='size-[40px] bg-white rounded-full shadow-md pointer
                        max-[650px]:text-small max-[650px]:size-[30px]
                        hidden max-[650px]:flex justify-center items-center
                        ' onClick={() => {
                            if(isScreen650) setIsScreen650(false);
                            else setIsScreen650(true);
                        }}>
                            <img src={hamburger} alt="Menu icon" 
                            className='w-[20px]' />
                        </div>
                    </div>

                </header>

                {/* Content Canvas */}
                <div className="canvas canvas-heigh bg-white rounded-lg px-3 py-2 
                overflow-y-auto max-w-[1400px]
                dark:bg-gray-900 dark:text-white dark:border dark:border-gray-700"
                style={{height: 'calc(100vh - 80px)'}}>
                    {(route === 'views' || !route) && <DashboardTabs user={user} />}
                    {route === 'products' && <Products user={user} />}
                    {route === 'sales' && <Sales />}
                    {route === 'suppliers' && <Suppliers />}
                    {route === 'employees' && <Employees />}
                    {route === 'admins' && <Admins user={user} />}
                    {route === 'create_product' && <CreateProduct />}
                    {route === 'add_product' && <AddProduct />}
                    {route === 'add_sale' && <AddSale user={user} />}
                    {route === 'orders' && <Orders user={user} />}
                    {route === 'place_order' && <PlaceOrder />}
                    {route === 'add_user' && <AddUser />}
                    {route === 'notifications' && <Notification />}
                    {route === 'low_stocks' && <LowStocks />}
                    {route === 'view_chart' && <ViewChart />}
                </div>
            </div>
            
        </div>
    </section>
);
}
 
export default Dashboard;