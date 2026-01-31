import { useNavigate } from "react-router-dom";
import useNotification from "../../utilities/notification";
import { useEffect } from "react";

const Notification = () => {
const { notifications, getNotifications } = useNotification();
const navigate = useNavigate();

useEffect(() => {
    (async () => {
        await getNotifications();
    })();
}, []);

return ( 
    <section className="notification bg" 
    id="notification">
        <div className="wrapper max-w-[400px] mx-auto my-4">
            <div className="title">
                <h2 className="text-xl py-1">Notifications</h2>
                {/* {notifications.length < 1 && <div className="loader my-4 center gap-1 opacity-50">
                    <i className="fa fa-spinner fa-pulse"></i>
                    <span>Loading...</span>
                </div>} */}
                {notifications?.length < 1 && 
                <div className="h-full center px-2 h-[100px] center">
                    <p className="text-lg opacity-30">Nothing to Display</p>
            </div>}
            </div>

            <div className="content text-small text-zinc-50">
                <ul className="flex flex-col gap-4">
                {
                    notifications?.map((item,key) => (
                    <li className="min-h-[100px] w-full rounded-md bg-sky-800 
                    flex flex-col justify-between" key={key}>
                        <div className="flex gap-1 items-center px-2 pt-2">
                            <span className="size-[20px] bg-darkaqua text-white rounded-full center">
                                <i className='bxr  bx-bell'  ></i> 
                            </span>
                            <span>{item.title}</span>
                        </div>
                        <div className="mt-1 px-2">
                            <p>{item.msg}</p>
                        </div>
                        <div className="btns outline-none border-none flex justify-between items-center pl-2">
                            <p><small className="opacity-70">{new Date(item.created_at).toLocaleString()}</small></p>
                            <button className="bg-darkaqua text-white px-2 py-1 hover:bg-sky-600"
                            onClick={() => navigate('?route=low_stocks')}>View items</button>
                        </div>
                    </li>
                    ))
                }
                    
                </ul>
            </div>
        </div>

    </section>
);
}
 
export default Notification;