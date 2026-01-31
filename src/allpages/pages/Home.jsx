import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import Footer from "../Footer";
import Header from '../Header';

import humanHeadsetImg from '../../library/images/bitmaps/products/headset_advert.jpg';
import iphoneImg from '../../library/images/bitmaps/products/iphone-1.jpg';
import watchImg from '../../library/images/bitmaps/products/watch1.jpg';
import stockwatchImg from '../../library/images/bitmaps/products/smartwatch-stockybg.jpg';
import stockcameraImg from '../../library/images/bitmaps/products/camera-stockbg.jpg';
import stockheadsetImg from '../../library/images/bitmaps/products/headset-stockbg.jpg';

import headphoneCategoryImg from '../../library/images/bitmaps/products/headphone-category.jpg';
import phonesCategoryImg from '../../library/images/bitmaps/products/phonetablet-category.jpg';
import kitchenCategoryImg from '../../library/images/bitmaps/products/kitchen-category.jpg';
import cameraCategoryImg from '../../library/images/bitmaps/products/camera-category.jpg';

import tabletRecommendedImg from '../../library/images/bitmaps/recommended/tablet-recommended.png';
import headsetRecommendedImg from '../../library/images/bitmaps/recommended/headset-recommended.png';
import blenderRecommendedImg from '../../library/images/bitmaps/recommended/blender-recommended.png';
import tvRecommendedImg from '../../library/images/bitmaps/recommended/tv-recommended.png';
import smartwatchRecommendedImg from '../../library/images/bitmaps/recommended/smartwatch-recommended.png';
import watchRecommendedImg from '../../library/images/bitmaps/recommended/watch-recommended.png';
import cameraRecommendedImg from '../../library/images/bitmaps/recommended/camera-recommended.png';

import likeChargerImg from '../../library/images/bitmaps/may-like/like-charger.jpg';
import likeClipperImg from '../../library/images/bitmaps/may-like/like-clipper.jpg';
import likePadImg from '../../library/images/bitmaps/may-like/like-pad.jpg';
import likeVrImg from '../../library/images/bitmaps/may-like/like-vr.jpg';


const HomePage = () => {
    // catchy promotional texts
    let catchyTexts = [
        'Trending Now', 'Exclusive Offers', 'Await', 'Smart Shopping', 'Shop More Save More', 'Welcome', 'Accessories',
        'Free Shipping', 'Top Rated', 'Daily Deals', 'Hot Discounts', 'Hot Discounts', 'New Arrivals', 'Best Sellers',
        'Exclusive Offers', '24/7 Support', 'Easy Returns', 'Deal of the Day', 'Customer Favorites', 'Fast Delivery', 'Shop Anytime'
    ];

    // highly recommended products - temporary (to be fetched from backend)
    let hrecommended = [
        {img: tabletRecommendedImg, price: '$17,500', price_off: '$18,600', name: 'Samsung Galaxy S22', category: 'Phone & Tablets'},
        {img: headsetRecommendedImg, price: '$17,500', price_off: '$18,600', name: 'Samsung Galaxy S22', category: 'Phone & Tablets'},
        {img: blenderRecommendedImg, price: '$17,500', price_off: '$18,600', name: 'Samsung Galaxy S22', category: 'Phone & Tablets'},
        {img: tvRecommendedImg, price: '$17,500', price_off: '$18,600', name: 'Samsung Galaxy S22', category: 'Phone & Tablets'},
        {img: smartwatchRecommendedImg, price: '$17,500', price_off: '$18,600', name: 'Samsung Galaxy S22', category: 'Phone & Tablets'},
        {img: watchRecommendedImg, price: '$17,500', price_off: '$18,600', name: 'Samsung Galaxy S22', category: 'Phone & Tablets'},
        {img: cameraRecommendedImg, price: '$17,500', price_off: '$18,600', name: 'Samsung Galaxy S22', category: 'Phone & Tablets'}
    ];
return ( 
<section className="home" id="home">
    <Header />

    <div className="hero layout-3 flex gap-2 h-[500px]">
        <div className="item bg-setup bg-center h-full w-[400px] grow relative
        flex items-end pb-8 px-5 max-[500px]:w-[100%]"
        style={{backgroundImage: `url(${humanHeadsetImg})`}}>
            <div className="content w-[500px] text-white flex flex-col gap-2">
                <h1 className='text-5xl font-400'>Next Generation Virtual Reality</h1>
                <p className='text-lg'>Get the one that relieves your bored moments</p>
            </div>
        </div>

        <div className="sub-item h-full w-[500px] flex flex-col gap-2
        max-[500px]:hidden">
            <div className="bg-setup bg-top h-1/2"
            style={{backgroundImage: `url(${iphoneImg})`}}>
            </div>

            <div className="bg-setup bg-center h-1/2"
            style={{backgroundImage: `url(${watchImg})`}}></div>
        </div>
    </div>

    {/* features */}
    <div className='web-container py-3 features my-4 min-h-[200px] center'>
        <ul className='center gap-8 flex-wrap w-full'>
            <li className='flex items-center gap-2 w-[300px]'>
                <div className='shadow-nav rounded-circle center bg-white border-light'
                style={{height: '50px', width: '50px'}}>
                    <i className='bxr  bx-ship text-2xl text-blue'></i>
                </div>
                <div className=''> 
                    <h2 className='font-bold text-blue'>Free Shipping</h2>
                    <p>Fast delivery at no extra cost</p>
                </div>
            </li>
            <li className='flex items-center gap-2 w-[300px]'>
                <div className='shadow-nav rounded-circle center bg-white border-light'
                style={{height: '50px', width: '50px'}}>
                    <i className='bxr  bx-ship text-2xl text-pinky'></i>
                </div>
                <div className=''> 
                    <h2 className='font-bold text-pinky'>Flexible Payment</h2>
                    <p>Pay your way, anytimet</p>
                </div>
            </li>
            <li className='flex items-center gap-2 w-[300px]'>
                <div className='shadow-nav rounded-circle center bg-white border-light'
                style={{height: '50px', width: '50px'}}>
                    <i className='bxr  bx-ship text-2xl text-blue'></i>
                </div>
                <div className=''> 
                    <h2 className='font-bold text-blue'>Earn Points</h2>
                    <p>Reward points on every purchase</p>
                </div>
            </li>
        </ul>
    </div>

    {/* latest */}
    <div className="web-container latest flex justify-center items-center gap-4 flex-wrap min-h-[400px]
    ">
        <div className='title w-[300px] text-center'>
            <h1 className=''>What's new</h1>
            <p className="pt-1">Check our latest available products and find which one best suits you...</p>
        </div>

        <div className="items flex justify-center items-center flex-wrap gap-4">
            <div className='item size-[250px] grow rounded-md relative
            before:content-[""] before:absolute before:inset-0 before:bg-black before:opacity-50
            before:rounded-xl'>
                <img src={stockcameraImg} 
                className='w-full h-full object-cover object-center rounded-xl'/>
                <p className='absolute top-4 left-4 w-[90%] text-white z-4 text-xl font-bold'>
                    Latest Nikon Series
                </p>
                <p className='absolute bottom-4 left-4 w-[90%] text-white z-4 text-sm'>
                    Active Stock &raquo; <span className='pointer'>Order Now</span>
                </p>
            </div>

            <div className='item size-[250px] max-sm:grow rounded-md relative
            before:content-[""] before:absolute before:inset-0 before:bg-black before:opacity-50
            before:rounded-xl'>
                <img src={stockheadsetImg} 
                className='w-full h-full object-cover object-center rounded-xl'/>
                <p className='absolute top-4 left-4 w-[90%] text-white z-4 text-xl font-bold'>
                    Latest JBL Series
                </p>
                <p className='absolute bottom-4 left-4 w-[90%] text-white z-4 text-sm'>
                    Active Stock &raquo; <span className='pointer'>Order Now</span>
                </p>
            </div>
        
            <div className='item size-[250px] max-sm:grow rounded-md relative
            before:content-[""] before:absolute before:inset-0 before:bg-black before:opacity-50
            before:rounded-xl'>
                <img src={stockwatchImg} 
                className='w-full h-full object-cover object-center rounded-xl'/>
                <p className='absolute top-4 left-4 w-[90%] text-white z-4 text-xl font-bold'>
                    Latest Watch Series
                </p>
                <p className='absolute bottom-4 left-4 w-[90%] text-white z-4 text-sm'>
                    Active Stock &raquo; <span className='pointer'>Order Now</span>
                </p>
            </div>

            <div className='item size-[250px] grow rounded-md relative
            before:content-[""] before:absolute before:inset-0 before:bg-black before:opacity-50
            before:rounded-xl'>
                <img src={stockheadsetImg} 
                className='w-full h-full object-cover object-center rounded-xl'/>
                <p className='absolute top-4 left-4 w-[90%] text-white z-4 text-xl font-bold'>
                    Latest JBL Series
                </p>
                <p className='absolute bottom-4 left-4 w-[90%] text-white z-4 text-sm'>
                    Active Stock &raquo; <span className='pointer'>Order Now</span>
                </p>
            </div>
        </div>
    </div>

    {/* category - no responsiveness ***************** */}
    <div className="web-container category cente mt-8 min-h-[400px] hidden">
        <div className="wrapper">
            <div className="title max-w-[600px] mx-auto text-center">
                <h1>Choose Your Category</h1>
                <p className='pt-1'>Browse through our wide range of product categories. From essentials to trending items, find exactly what you need quickly and easily.</p>
            </div>

            
            <div className="items center gap-4 flex-wrap mt-8">
                {/* kitchen appliances category */}
                <div className="item w-[250px] text-center">
                    <figure className='center flex-col gap-3'>
                        <img src={kitchenCategoryImg} 
                            className='w-[100%] h-[400px] rounded-full object-cover object-center' />
                        <figcaption>
                            <h2 className='font-bold'>Kitchen Appliances</h2>
                            <p>Modern tools to make cooking simple and fun.</p>
                        </figcaption>
                    </figure>
                </div>

                {/* headphones category */}
                <div className="item w-[250px] text-center">
                    <figure className='center flex-col gap-3'>
                        <img src={headphoneCategoryImg} 
                            className='w-[100%] h-[400px] rounded-full object-cover object-center' />
                        <figcaption>
                            <h2 className='font-bold'>Headphones</h2>
                            <p>Premium sound and comfort for music lovers.</p>
                        </figcaption>
                    </figure>
                </div>

                {/* phones & tablet category */}
                <div className="item w-[250px] text-center">
                    <figure className='center flex-col gap-3'>
                        <img src={phonesCategoryImg} 
                            className='w-[100%] h-[400px] rounded-full object-cover object-center' />
                        <figcaption>
                            <h2 className='font-bold'>Phones & Tablet</h2>
                            <p>Stay connected with the latest smartphones and tablets.</p>
                        </figcaption>
                    </figure>
                </div>

                {/* camera category */}
                <div className="item w-[250px] text-center">
                    <figure className='center flex-col gap-3'>
                        <img src={cameraCategoryImg} 
                            className='w-[100%] h-[400px] rounded-full object-cover object-center' />
                        <figcaption>
                            <h2 className='font-bold'>Camera & Photo</h2>
                            <p>Capture life’s best moments in stunning detail.</p>
                        </figcaption>
                    </figure>
                </div>

            </div>
        </div>
    </div>

    {/* highly recommended */}
    <div className="web-container highly-recommended mt-[4rem]">
        <div className="title flex justify-between items-center gap-3 flex-wrap my-3">
            <div className='w-[400px]'>
                <h1>Highly Recommended</h1>
                <p>Explore our top-rated products that have earned the trust of many satisfied customers</p>
            </div>
            <button className='btn btn-outline-pinky' style={{borderRadius: '50px'}}>View All</button>
        </div>

        <div className="items flex gap-5 flex-wrap">
            {
                hrecommended.map((item,key) => (
            <div className="item w-[200px] rounded-md p-3 text-black grow-[0.5] max-sm:grow"
            style={{backgroundColor: '#f3f3f3'}} key={key}>
                <figure>
                    <div className="item-img max-h-[250px] min-h-[250px] center">
                        <img src={item.img} className='max-h-[250px] w-full object-contain' />
                    </div>
                    <figcaption>
                        <div className="item-category w-fit py-1 px-2 bg-white my-1">{item.category}</div>
                        <div className="item-name"><p className="item-name font-bold">{item.name}</p></div>
                        <div className="item-price ">
                            <p className='flex gap-5'>Price: {item.price} <span className='line-through text-red-600'>{item.price_off}</span></p>
                        </div>
                        <div className="item-actions flex justify-between items-center gap-2 flex-wrap mt-2">
                            <button className="btn btn-blue">View Product</button>
                            <span className='py-2 bg-pinky text-white w-[40px] h-[40px] center rounded-full'>
                                <i className='bxr  bx-cart-plus text-lg'></i> 
                            </span>
                        </div>
                    </figcaption>
                </figure>
            </div>
                ))
            }
            


        </div>
    </div>

    {/* running text */}
    <div className="running-text min-h-[200px] center">
        <Marquee speed={100} className="bg-black text-white w-full py-3">
            <ul className="flex gap-8">
                {
                    catchyTexts.map((item,key) => (
                        <li className="center gap-1 even:text-lime-300" key={key}>
                            <span>{item}</span> 
                            <i className='bxr  bx-plus'></i> 
                        </li>
                    ))
                }
            </ul>
        </Marquee>
    </div>

    {/* more display */}
    <div className="more-display web-container px-4 my-4">
        <div className="title pt-3 pb-6 text-center">
            <h1>You May Like</h1>
        </div>
        <div className="wrapper items flex gap-2 max-[950px]:flex-col">
            <div className="w-[300px] item relative 
            before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50
            before:rounded-xl max-lg:grow max-[950px]:w-full max-[950px]:h-[300px]">
                <img src={likeClipperImg} className="w-full h-full object-cover rounded-xl" />
                <p className='absolute bottom-4 left-4 w-[90%] text-pinky z-4 text-3xl
                max-md:text-xl'>
                    Clippers
                </p>
            </div>

            <div className="sub-item grow flex flex-col gap-2">
                {/* sub item */}
                <div className="sub-sub-item flex gap-2">
                    <div className="item w-[300px] h-[250px] grow relative
                    before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50
                    before:rounded-xl max-[480px]:w-[48%]">
                        <img src={likeChargerImg} className="w-full object-cover h-full rounded-xl" />
                        <p className='absolute bottom-4 left-4 w-[90%] text-pinky z-4 text-2xl
                        max-md:text-xl'>
                            Fast Chargers
                        </p>
                    </div>

                    <div className="item w-[300px] h-[250px] relative
                    before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50
                    before:rounded-xl max-[480px]:w-[48%]">
                        <img src={cameraCategoryImg} className="w-full object-cover h-full rounded-xl" />
                        <p className='absolute bottom-4 left-4 w-[90%] text-pinky z-4 text-2xl
                        max-md:text-xl'>
                            SuperShot Cameras
                        </p>
                    </div>
                </div>
                
                {/* sub item */}
                <div className="sub-sub-item flex flex-row-reverse gap-2">
                    <div className="item w-[300px] h-[250px] grow relative
                    before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-75
                    before:rounded-xl max-[480px]:w-[48%]">
                        <img src={likeVrImg} className="w-full object-cover h-full rounded-xl" />
                        <p className='absolute bottom-4 left-4 w-[90%] text-pinky z-4 text-2xl
                        max-md:text-xl'>
                            Virtual Equipments
                        </p>
                    </div>
                    <div className="item w-[300px] h-[250px] relative
                    before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50
                    before:rounded-xl max-[480px]:w-[48%]">
                        <img src={likePadImg} className="w-full object-cover h-full rounded-xl" />
                        <p className='absolute bottom-4 left-4 w-[90%] text-pinky z-4 text-2xl
                        max-md:text-xl'>
                            Game Pads
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    {/* best selling recommended */}
    <div className="web-container highly-recommended my-[4rem]">
        <div className="title flex justify-between items-center gap-3 flex-wrap my-3">
            <div className='w-[400px]'>
                <h1>Best Selling Products</h1>
                {/* <p>Explore our top-rated products that have earned the trust of many satisfied customers</p> */}
            </div>
            <button className='btn btn-outline-pinky' style={{borderRadius: '50px'}}>View All</button>
        </div>

        <div className="items flex gap-5 flex-wrap">
            {
                hrecommended.map((item,key) => (
            <div className="item w-[200px] rounded-md p-3 text-black grow-[0.5] max-sm:grow"
            style={{backgroundColor: '#f3f3f3'}} key={key}>
                <figure>
                    <div className="item-img max-h-[250px] min-h-[250px] center">
                        <img src={item.img} className='max-h-[250px] w-full object-contain' />
                    </div>
                    <figcaption>
                        <div className="item-category w-fit py-1 px-2 bg-white my-1">{item.category}</div>
                        <div className="item-name"><p className="item-name font-bold">{item.name}</p></div>
                        <div className="item-price ">
                            <p className='flex gap-5'>Price: {item.price} <span className='line-through text-red-600'>{item.price_off}</span></p>
                        </div>
                        <div className="item-actions flex justify-between items-center gap-2 flex-wrap mt-2">
                            <button className="btn btn-blue">View Product</button>
                            <span className='py-2 bg-pinky text-white w-[40px] h-[40px] center rounded-full'>
                                <i className='bxr  bx-cart-plus text-lg'></i> 
                            </span>
                        </div>
                    </figcaption>
                </figure>
            </div>
                ))
            }
        </div>
    </div>

    <Footer />
</section>
    );
}
 
export default HomePage;