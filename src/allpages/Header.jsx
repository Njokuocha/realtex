// App Header
import { Link } from 'react-router-dom';
import usFlagIcon from '../library/images/icons/us-flag.jpg';
import dollarCoinIcon from '../library/images/icons/dollar-coin.png';
import trademark from '../library/images/bitmaps/trademark.png';
import hamburger from '../library/images/icons/hamburger.png';

// Mode Toggle Function
import modeToggle from '../utilities/actions';

const Header = () => {

let categories = [
    'Home Appliances', 'PC & Laptop', 'Kitchen Appliances', 'Phones and Tablets',
    'Accessories', 'Camera/Photo', 'Watches', 'Headphones', 'Games & Video', 'TV Box'
];

return ( 
    <header className='bg-white text-black dark:bg-gray-900 dark:text-white'>
        <nav className=''>
            {/* top header */}
            <div className="top-header px-4 xl:px-8 flex gap-2 justify-between items-center 
            py-2 bg-blue text-white max-[576px]:text-xs">
                <div className="web-info">
                    <p>Sales 20% off your first order</p>
                </div>

                <div className="more">
                    <ul className="center gap-4">
                        <li><a href="#">FAQs</a></li>
                        <li className="center gap-1">
                            <img src={usFlagIcon} alt="Us Flag" className='w-[20px]' />
                            <span>English</span> 
                            <i className='bxr bx-chevron-down'></i> 
                        </li>
                        <li className="center gap-1">
                            <img src={dollarCoinIcon} alt="Us Flag" className='w-[20px]' />
                            <span>USD</span> 
                            <i className='bxr  bx-chevron-down'></i> 
                        </li>
                    </ul>
                </div>
            </div>

            {/* middle header */}
            <div className="middle-header h-[80px] max-[576px]:h-[70px] px-4 xl:px-8 flex justify-between items-center gap-4 py-4">
                {/* web trademark */}
                <div className="trademark w-[70px]">
                        <Link to="/">
                            <img src={trademark} alt="Logo." className='max-[850px]:w-[70px] w-[85px]' />
                        </Link>
                </div>

                {/* search products */}
                <div className="search w-fit grow dark:bg-white max-[576px]:grow-0 max-[576px]:hidden
                white-bg border-2 dark:border-0 border-gray-200">
                    <form action="" className='w-full'>
                        <div className='borde flex pl-2'>
                            {/* <span className='center'> */}
                                <select name="" id="" className='outline-none dark:text-black 
                                max-[850px]:text-small'>
                                    <option value=""><span>All Categories</span> <i className='bxr  bx-chevron-down'></i></option>
                                    {
                                        categories.map((item,key) => (
                                            <option value="item" key={key}>{item}</option>
                                        ))
                                    }
                                </select>
                            {/* </span> */}
                            <input type="text" placeholder='Search Product'
                            className='border h-[50px] px-3 py-2 grow outline-none border-none'/>
                            <button className='btn btn-pinky' 
                            style={{borderRadius: '0'}}>Search</button>
                        </div>
                    </form>
                </div> 

                <div className="search max-[576px]:flex hidden">
                    <i class='bxr  bx-search text-lg'></i> 
                </div>

                {/* account */}
                <div className="account max-md:hidden">
                    <ul className='center gap-4'>
                        <li className='center gap-1 pointer'>
                            <i className='bxr  bx-user text-xl'></i> 
                            <span className='text-xs'>Login <br /> Account</span>
                        </li>
                        <li className='center gap-1 pointer'>
                            <i className='bxr  bx-cart text-xl'></i> 
                            <span className='text-xs'>View <br /> Cart</span>
                        </li>
                        <li className='center gap-1 pointer' onClick={modeToggle}>
                            <i className='bxr  bx-cloud-moon text-xl'></i>  
                            <span className='text-xs'>Switch <br /> Mode</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="bottom-header px-4 xl:px-8 bg-pinky text-white flex justify-between align-center gap-2 flex-wrap py-2">
                <div className="routes max-[576px]:hidden flex justify-center items-center gap-4">
                    <ul className='center gap-4'>
                        <li className='border-b-2 border-white hover:text-blue hover:border-blue transition duration-150'><Link>Home</Link></li>
                        <li className='hover:text-blue hover:border-blue transition duration-150'><Link>Products</Link></li>
                        <li className='hover:text-blue hover:border-blue transition duration-150'><Link>Blogs</Link></li>
                        <li className='md:hidden flex items-center gap-1 '><span>Account</span> <i className='bxr  bx-chevron-down '></i></li>
                    </ul> 
                </div>

                {/* mobile nav hambuger */}
                <div className="hamburger max-[576px]:flex hidden">
                    <img src={hamburger} alt="Menu" className='w-[30px]' />
                </div>

                <div className="contact flex items-center gap-4">
                    <ul>
                        <li className='center gap-2 hover:text-blue hover:border-blue transition duration-150 pointer'>
                            <i className='bxr  bx-phone-ring'></i> 
                            <span>Contact us</span>
                        </li>
                    </ul>
                    <button className='btn btn-outline-white h-[40px]'>
                        <i class='bxr  bx-ambulance text-lg'></i><span>Orders</span></button>
                </div>
            </div>

        </nav>
    </header>
    );
}
 
export default Header;