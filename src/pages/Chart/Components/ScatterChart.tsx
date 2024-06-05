import React from "react";
import ListProps from "./ListProps";
import { radarChartProps } from "../../../Tabs/Chart/constants";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterChart = () => {
  // const data = {
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [
  //         { x: 10, y: 20 },
  //         { x: 15, y: 10 },
  //         { x: 20, y: 30 },
  //         { x: 25, y: 15 },
  //         { x: 30, y: 25 },
  //       ],
  //       backgroundColor: "rgba(255, 99, 132, 0.2)",
  //       borderColor: "rgba(255, 99, 132, 1)",
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Scatter Chart",
  //     },
  //   },
  // };
  // return (
  //   <div className="flex flex-col md:flex-row md:gap-x-4 mr-6">
  //     <ChartContainer className="flex justify-center">
  //       <Scatter data={data} options={options} />
  //     </ChartContainer>
  //     <div className="flex-1 mt-4 md:mt-16">
  //       <ListProps dataSource={radarChartProps} />
  //     </div>
  //   </div>
  // );
};

export default ScatterChart;
