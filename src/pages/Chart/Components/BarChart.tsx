import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartArea from "../../../commons/components/ChartArea";
import ChartContainer from "../../../commons/components/ChartContainer";
import OptionArea from "../../../commons/components/OptionArea";
import TypeChart from "../../../commons/components/TypeChart";
import {
  backgroundColor,
  barChartTypes,
  borderColor,
} from "../../../commons/constants/constants";
import useCombineTranslation from "../../../commons/hooks/useCombineTranslation";
import useGetChartData from "../../../commons/hooks/useGetChartData";
import useStore from "../../../commons/stores/store";

export const BarChart = () => {
  const { subject, score, shortLabel } = useGetChartData();
  const checkedTypeChart = useStore((state: any) => state.checkedTypeChart);
  const checkBarChartType = checkedTypeChart === barChartTypes.horizontal;
  const { tChartTab } = useCombineTranslation();

  const data = {
    labels: subject,
    datasets: [
      {
        label: "Score",
        data: score,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: checkBarChartType ? "y" : "x",
    plugins: {
      title: {
        display: true,
        text: checkBarChartType ? tChartTab("horizontal") : tChartTab("bar"),
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 10,
      },

      x: checkBarChartType
        ? {}
        : {
            ticks: {
              callback: (index) => shortLabel(index),
            },
          },
    },
  };

  return (
    <ChartContainer>
      <OptionArea />
      <ChartArea>
        <Bar data={data} options={options} />
      </ChartArea>
      <TypeChart />
    </ChartContainer>
  );
};
