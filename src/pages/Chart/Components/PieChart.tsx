import { ArcElement, Chart as ChartJS, ChartOptions } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import ChartArea from "../../../commons/components/ChartArea";
import ChartContainer from "../../../commons/components/ChartContainer";
import OptionArea from "../../../commons/components/OptionArea";
import TypeChart from "../../../commons/components/TypeChart";
import {
  backgroundColor,
  borderColor,
  pieChartTypes,
} from "../../../commons/constants/constants";
import useStore from "../../../commons/stores/store";
import useGetChartData from "../../../commons/hooks/useGetChartData";
import useCombineTranslation from "../../../commons/hooks/useCombineTranslation";

ChartJS.register(ArcElement);

export const PieChart = () => {
  const { subject, score } = useGetChartData();
  const checkedTypeChart = useStore((state: any) => state.checkedTypeChart);
  const checkPieChart = checkedTypeChart === pieChartTypes.doughnut;
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

  const options: ChartOptions<"pie" | "doughnut"> = {
    plugins: {
      title: {
        display: true,
        text: checkPieChart ? tChartTab("doughnut") : tChartTab("pie"),
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <ChartContainer>
      <OptionArea />
      <ChartArea>
        {checkPieChart ? (
          <Doughnut data={data} options={options} />
        ) : (
          <Pie data={data} options={options} />
        )}
      </ChartArea>
      <TypeChart />
    </ChartContainer>
  );
};
