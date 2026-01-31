import vidIntro from '../library/clips/realtex_intro.mp4';
import trademark from '../library/bitmaps/trademark.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
const navigate = useNavigate();

return (
    <section className="landing h-screen w-full relative z-10
    before:content-[''] before:absolute before:inset-0 before:bg-gray-900 before:opacity-[0.9] before:border-3 
    before:border-red-500 before:-z-10 center px-2" 
    id="landing">
        <video autoPlay muted loop
        className='w-full h-full object-cover object-center absolute inset-0 -z-20'>
            <source src={vidIntro} type='video/mp4' />
        </video>

        <div className="content text-white w-[400px] flex flex-col items-center gap-4 text-center">
            <div className="trademark">
                <img src={trademark} alt="Trademark" className='w-[180px]' />
            </div>
            <div className="highlight flex center flex-col gap-2">
                <h1>Welcome to Realtex Inventory Management System</h1>
                <p className='text-lg'>Always keeping it real</p>
                <button onClick={() => navigate('/user/typeselect')}
                className='btn btn-darkaqua w-full !rounded-full mt-1'>Continue</button>
            </div>
        </div>
    </section>
);
}
 
export default Landing;