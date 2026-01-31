import useOrder from "../../utilities/order";
import { useEffect } from "react";

const Orders = ({user}) => {
const {orders, getOrders} = useOrder();
let txt = "Lorem ipsu adfasdf adfasdf gafas hsgsdgfdsf asdf asdfasdfasd adfasdfad asfasdfasfas afadsfasfasdasfd dolor sit adfas afasdfasd asdfasdfasdfas asfasdfasd asdfasdfasdfadsfsa asdfadfasd fasdfadfasdfas amet consectetur adipisicing elit. Sed adipisci hic quae neque iusto commodi totam beatae magnam voluptate";

useEffect(() => {
    (async () => await getOrders(user?.id))();
}, [user]);



return (
    <section className="orders h-full" 
    id="orders">
    {
        orders?.length === 0 &&
        <div className="h-full center px-2 h-[100px] center">
            <p className="text-lg opacity-30">Nothing to Display</p>
        </div>
    }
        {orders?.length > 0 &&
            <div className="items flex justify-center gap-x-6 gap-y-9 flex-wrap py-4">
                <div className="title w-full grow text-center">
                    <h1>Orders</h1>
                </div>
        {
            orders?.map((item,key) => (
            <div className="item grow w-[300px]" key={key}>
                <div className="flex flex-col gap-2">
                    <div className="h-[150px] w-full p-3 center rounded-md shadow-nav bg-darkaqua
                    border border-gray-300 text-white text-center">
                        <p className="font-bold">{item.product}</p>
                    </div>
                    <div>
                        <p>{item.quantity} items</p>
                        <p className="">
                        {new Date(item.created_at).toLocaleDateString()}
                        </p>
                        <p>
                        {
                            item.status === 'delivered' ?
                            <small className="font-bold capitalize flex gap-1 items-center" style={{color: '#4caf50'}}>
                                <span>{item.status}</span> 
                                <i className='bxr  bx-checks text-lg' ></i> 
                            </small>
                            : <small className="text-red-600 font-bold capitalize">{item.status}</small>
                        }
                        </p>
                    </div>
                </div>
                <p className="text-small mt-2">
                    {/* { && item.note.length } */}
                    {(item.note && item?.note.length >= 300) && item.note.slice(0, 300) + '...'}
                    {(item.note && item?.note.length < 300) && item.note}
                    {!item.note && 'No Note/Description Added'}
                </p>
            </div>
            ))
        }
        </div>}
    </section>
);
}
 
export default Orders;