import useProduct from "../../utilities/product";
import { useEffect } from "react";

const LowStocks = () => {
const { getLowProducts, lowProducts, lowProductsNum } = useProduct();

useEffect(() => {
    (async () => await getLowProducts())();
}, []);

return ( 
    <section className="lowstocks" 
    id="lowstocks">
        <div className="wrapper wrapper max-w-[400px] mx-auto my-4 border border-gray-400 pt-2">
            <div className="title text-center">
                <h2 className="text-xl py-1">Low Stocks</h2>
                <p className="text-small opacity-50 pt-1">All products from 20 and below</p>
            </div>


            <div className="">
                <div className="mt-2">
                {
                    lowProducts?.map((item,key) => (
                        <div className="flex justify-between items-center gap-2 py-1 px-2 even:bg-gray-200
                        dark:even:bg-gray-800" 
                        key={key}>
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                        </div>
                    ))
                }
                    
                </div>
            </div>
        </div>
        
    </section>
);
}
 
export default LowStocks;