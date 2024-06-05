import {
  Chart as ChartJS,
  ChartOptions,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import ChartArea from "../../../commons/components/ChartArea";
import ChartContainer from "../../../commons/components/ChartContainer";
import OptionArea from "../../../commons/components/OptionArea";
import useGetChartData from "../../../commons/hooks/useGetChartData";
import useCombineTranslation from "../../../commons/hooks/useCombineTranslation";

ChartJS.register(RadialLinearScale, PointElement, LineElement);

export const RadarChart = () => {
  const { subject, score } = useGetChartData();
  const { tChartTab } = useCombineTranslation();

  const data = {
    labels: subject,
    datasets: [
      {
        label: "Score",
        data: score,
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options: ChartOptions<"radar"> = {
    plugins: {
      title: {
        display: true,
        text: tChartTab("radar"),
      },
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <ChartContainer>
      <OptionArea />
      <ChartArea>
        <Radar data={data} options={options} />
      </ChartArea>
    </ChartContainer>
  );
};
