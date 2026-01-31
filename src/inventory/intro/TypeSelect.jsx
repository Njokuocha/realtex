import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TypeSelect = () => {
const navigate = useNavigate();
const location = useLocation();
let userTypes = ["Supplier", "Admin", "Employee"];

return (
    <section className="typeselect h-full h-screen center overflow-auto px-2" 
    id="typeselect">
        <div className="content w-[600px] h-[300px] rounded-md p-4 bg-white
        flex flex-col justify-between shadow-lg border border-gray-200
        max-sm:px-0 max-[330px]:h-fit max-[330px]:px-2
        
        max-[330px]:w-full">
            <div className="title">
                <h1 className="text-darkaqua max-sm:text-center max-sm:text-xl">
                    Select User Type
                </h1>
            </div>

            <div className="types flex justify-evenly max-[330px]:flex-col mt-1">
                {
                    userTypes.map((item,key) => (
                        <div className="type w-[150px] h-[120px] center
                        rounded-md hover:scale-[1.1] transition-all duration-200 pointer
                        bg-darkaqua text-white even:bg-gray-900 relative
                        max-sm:w-[30%] max-sm:h-[110px] max-[330px]:w-[100%] overflow-hidden
                        max-[330px]:mb-4" 
                        key={key} onClick={(event) => navigate('/auth/login', {state: event.currentTarget.innerText.toLocaleLowerCase()})}>
                            {item}
                            {key === 0 && <i className='bxr  bx-circle-outer-dashed-circle text-5xl absolute top-[-20px] right-[0]'></i> }
                            {key === 1 && <i className='bxr  bx-leaf-alt text-5xl absolute top-[-20px] right-[0]'></i>}
                            {key === 2 && <i className='bxr  bx-leaf text-5xl absolute top-[-20px] right-[0] rotate-180'></i>}
                        </div>
                     ))
                }
            </div>

            <div className="btns w-[300px] max-[330px]:w-full self-center">
                <button onClick={() => navigate('/')}
                className="btn !rounded-full bg-gray-900 text-white w-full">
                        <i className='bxr  bx-arrow-left-stroke text-2xl' ></i> 
                        <span>Back</span>
                    </button>

                {/* <button onClick={() => navigate('/auth/login')}
                className="size-[40px] rounded-full center bg-darkaqua text-white">
                    <i className='bxr  bx-arrow-right-stroke text-2xl'></i> 
                </button> */}
            </div>
        </div>
    </section>
);
}
 
export default TypeSelect;