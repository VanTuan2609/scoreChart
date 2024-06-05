import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  RadialLinearScale,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import ChartArea from "../../../commons/components/ChartArea";
import ChartContainer from "../../../commons/components/ChartContainer";
import OptionArea from "../../../commons/components/OptionArea";
import {
  backgroundColor,
  borderColor,
} from "../../../commons/constants/constants";
import useCombineTranslation from "../../../commons/hooks/useCombineTranslation";
import useGetChartData from "../../../commons/hooks/useGetChartData";

ChartJS.register(ArcElement, RadialLinearScale);

const PolarAreaChart = () => {
  const { subject, score } = useGetChartData();
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

  const options: ChartOptions<"polarArea"> = {
    plugins: {
      title: {
        display: true,
        text: tChartTab("polar"),
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
        <PolarArea data={data} options={options} />
      </ChartArea>
    </ChartContainer>
  );
};

export default PolarAreaChart;
