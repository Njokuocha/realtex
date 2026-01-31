// Page Footer
import { Link } from "react-router-dom";

const Footer = () => {
let footerLinks = [
    {name: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog', 'Our Team']},
    {name: 'Our Team', links: ['Help Center', 'FAQs', 'Shipping & Delivery', 'Returns & Refunds', 'Order Tracking', 'Payment Options']},
    {name: 'Product', links: ['What’s New', 'Updates', 'Updates', 'Most Popular', 'Most Popular', 'Featured Products']},
    {name: 'Extras', links: ["Gift Cards", "Affiliate Program", "Loyalty Points", "Newsletter Signup"]},
    {name: 'Legal', links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Disclaimer"]},
    {name: 'Contact', links: ['Email', 'Phone', 'Facebook', 'Instagram', 'Twitter (X)', 'WhatsApp']}
];

return ( 
    <footer className="bg-black text-white py-6">
        {/* newsletter */}
        <div className="web-container newsletter min-h-[200px] flex justify-between items-center gap-4 flex-wrap">
            <div className="title w-[500px]">
                <h1>Subscribe to our <span className="text-pinky font-bold">Newsletter</span> and get our <span className="font-bold text-blue">Stock Updates</span></h1>
            </div>
            <div className="flex items-center w-[500px] border-2 border-white rounded-full p-2">
                <input type="text" className="input bg-transparent !border-1 !border-black/0" placeholder="Enter email" />
                <button className="btn btn-white" style={{borderRadius: '50px'}}>Subscribe</button>
            </div>
        </div>

        <div className="web-container links my-8 flex gap-4 flex-wrap">
            {
                footerLinks.map((item,key) => (
                    <div className="link w-[150px] grow" key={key}>
                        <h2 className="text-xl font-bold py-1">{item.name}</h2>
                        <ul>
                            {
                                item.links.map((item,key) => (
                                    <li className="hover:underline py-[4px]" key={key}><Link>{item}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>

        <div className="container copyright py-4 border-t-gray-800 border-t-[1px]">
            &copy; QuickStore {new Date().getFullYear()}, All Rights Reserved
        </div>
    </footer>
);
}
 
export default Footer;