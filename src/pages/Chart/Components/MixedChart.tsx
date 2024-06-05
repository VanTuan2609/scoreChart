import React from "react";
import ListProps from "./ListProps";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MixedChart = () => {
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       type: "bar",
  //       label: "Bar Dataset",
  //       data: [10, 20, 30, 40, 50, 60, 70],
  //       backgroundColor: "rgba(255, 99, 132, 0.2)",
  //       borderColor: "rgba(255, 99, 132, 1)",
  //       borderWidth: 1,
  //     },
  //     {
  //       type: "line",
  //       label: "Line Dataset",
  //       data: [70, 60, 50, 40, 30, 20, 10],
  //       backgroundColor: "rgba(54, 162, 235, 0.2)",
  //       borderColor: "rgba(54, 162, 235, 1)",
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Mixed Chart",
  //     },
  //   },
  // };
  // return (
  //   <div className="flex flex-col md:flex-row md:gap-x-4 mr-6">
  //     <ChartContainer className="flex justify-center">
  //       <Chart data={data} options={options} />
  //     </ChartContainer>
  //     <div className="flex-1 mt-4 md:mt-16">
  //       <ListProps dataSource={radarChartProps} />
  //     </div>
  //   </div>
  // );
};

export default MixedChart;
