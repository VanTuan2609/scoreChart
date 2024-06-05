import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import useGetChartData from "../../../hooks/useGetChartData";
import ChartContainer from "../../../commons/components/ChartContainer";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
  // const chartData = useGetChartData();
  // const data = {
  //   datasets: [
  //     {
  //       label: "Score",
  //       data: [
  //         { x: 10, y: 20, r: 15 },
  //         { x: 15, y: 10, r: 10 },
  //         { x: 20, y: 22, r: 20 },
  //         { x: 25, y: 15, r: 25 },
  //         { x: 27, y: 25, r: 27 },
  //       ],
  //       backgroundColor: "rgba(197, 249, 167, 0.5)",
  //       borderColor: "rgb(197, 249, 167, 1)",
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Bubble Chart",
  //     },
  //   },
  // };
  // return (
  //   <div className="flex flex-col md:flex-row md:gap-x-4 mr-6">
  //     <ChartContainer className="flex justify-center">
  //       <Bubble data={data} options={options} />
  //     </ChartContainer>
  //     <div className="flex-1 mt-4 md:mt-16">
  //       <ListProps dataSource={bubbleChartProps} />
  //     </div>
  //   </div>
  // );
};

export default BubbleChart;
