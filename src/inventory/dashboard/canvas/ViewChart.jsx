import arrowImg from '../../library/icons/arrow.png';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const ViewChart = () => {

const data = {
  labels: [
    "Itel P33", "iPhone 13 pro", "JBL Headset", "Samsung S24 Ultra", 
    "Oraimo 65W Charger", "Redmi 14C", "Tecno Spark 30 Lite", "Infinix Hot 50i",
    "40,000 mAh Power Bank", "Oraimo Headset v3"
],
  datasets: [
    {
      label: "Top Ranking Sales",
      data: [
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
    ],
      backgroundColor: "rgba(75,192,192,0.6)",
    },
  ],
};

return (
    <section className="view-chart" 
    id="view-chart">
        <div className="flex justify-between items-center gap-3 flex-wrap">
            <div className='center gap-2'>
                <p>View chart</p>
                <img src={arrowImg} width="20px" />
                <p>Realtex Inc.</p>
            </div>
            
            <div className="center gap-3 flex-wrap">
                <div className="center gap-4">
                    <p><small>Stock Decreasing</small></p>
                    <span class="relative center size-5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex size-3 rounded-full bg-red-500"></span>
                </span>
                </div>
                <div className="center gap-4">
                    <p><small>Sales Increasing</small></p>
                    <span class="relative center size-5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                </div>
                <div className="center gap-4">
                    <p><small>Profit Maximum</small></p>
                    <span class="relative center size-5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
                </span>
                </div>
            </div>
        </div>
        
        <Bar data={data} />
    </section>
);
}
 
export default ViewChart;