import { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import ChartArea from "../../../commons/components/ChartArea";
import ChartContainer from "../../../commons/components/ChartContainer";
import OptionArea from "../../../commons/components/OptionArea";
import useCombineTranslation from "../../../commons/hooks/useCombineTranslation";
import useGetChartData from "../../../commons/hooks/useGetChartData";

export const LineChart = () => {
  const { subject, score, shortLabel } = useGetChartData();
  const { tChartTab } = useCombineTranslation();

  const data = {
    labels: subject,
    datasets: [
      {
        label: "Score",
        data: score,
        borderColor: "#e8bbff",
        pointBackgroundColor: "#6fff00",
        pointBorderColor: "#6fff00",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    plugins: {
      title: {
        display: true,
        text: tChartTab("line"),
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
      x: {
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
        <Line data={data} options={options} />
      </ChartArea>
    </ChartContainer>
  );
};
