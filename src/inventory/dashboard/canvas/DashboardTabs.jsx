import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import useProduct from "../../utilities/product";
import { useEffect } from "react";
import nightImg from '../../library/bitmaps/start-blue-bg.jpeg';


const DashboardTabs = ({user}) => {
// const { getLowProducts, lowProducts, lowProductsNum } = useProduct();
const navigate = useNavigate();

// useEffect(() => {
//     (async () => await getLowProducts())();
// }, []);

let tabs;

if(user?.role === 'supplier'){
    tabs = [
        {name: 'dashboard', route: 'views'},
        {name: 'orders', route: 'orders'}
    ];
 } else {
    tabs = [
        {name: 'dashboard', route: 'views'},
        {name: 'products', route: 'products'},
        {name: 'add product', route: 'add_product'},
        {name: 'sales', route: 'sales'},
    ];
 }

if(user?.role === 'employee'){
    tabs.push({name: 'add sales', route: 'add_sale'});
}

if(user?.role === 'admin'){
    let otherTabs = [
        {name: 'notification', route: 'notifications'},
        {name: 'view chart', route: 'view_chart'},
        {name: 'create product', route: 'create_product'},
        {name: 'suppliers', route: 'suppliers'},
        {name: 'employees', route: 'employees'},
        {name: 'store managers', route: 'admins'},
        {name: 'place order', route: 'place_order'}
    ];
    tabs.push(...otherTabs);
 }


return (
    <section className="dashboardTabs" 
    id="dashboardTabs">
        <div className="tab-holder">
            <div className="title mb-2">
                <h1>Menu</h1>
            </div>
            <div className="tabs flex gap-4 flex-wrap">
            {
                tabs.map((item,key) => (
                <div className="tab w-[200px] grow-[0.3] h-[120px] border border-gray-300 center
                bg-sky-800 even:bg-darkaqua text-white rounded-md hover:scale-[0.97] pointer
                transition duration-150 relative z-10 overflow-hidden capitalize
                max-[1024px]:grow max-[1024px]:w-[150px]"
                onClick={() => navigate(`?route=${item.route}`)} key={key}>
                    {item.name}
                    {item.name == 'dashboard' && 
                    <i className='bxr bx-dashboard-alt text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }

                    {item.name == 'products' && 
                    <i className='bxr  bx-leaf text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    
                    {item.name == 'create product' && 
                    <i className='bxr  bx-layers-alt text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'add product' && 
                    <i className='bxr  bx-grid-circle-plus text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }

                    {item.name == 'sales' && 
                    <i className='bxr  bx-reading text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'add sales' && 
                    <i className='bxr  bx-book-add text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'suppliers' && 
                    <i className='bxr  bx-truck text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'employees' && 
                    <i className='bxr  bx-contact-book text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'store managers' && 
                    <i className='bxr  bx-user text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'orders' && 
                    <i className='bxr  bx-donate-blood text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'place order' && 
                    <i className='bxr  bx-donate-blood text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'notification' && 
                    <i className='bxr  bx-bell-ring text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                    {item.name == 'view chart' && 
                    <i className='bx  bx-chart-spline text-7xl absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-z-10 opacity-20'></i> }
                </div>
                ))
            }
            </div>
        </div>

        <div className="h-[300px] mt-3 rounded-md center text-white"
        style={{backgroundImage: `url(${nightImg})`}}>
            <h1>Realtex</h1>
           {/* <div className="center flex-col gap-2">
             <p>Read Doc</p>
             <button className="btn btn-white">View &raquo;</button>
           </div> */}
         </div>
        
    </section>
);
}
 
export default DashboardTabs;