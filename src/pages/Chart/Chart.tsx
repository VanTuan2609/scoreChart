import { Tabs, TabsProps } from "antd";
import { Outlet } from "react-router-dom";
import useCombineTranslation from "../../commons/hooks/useCombineTranslation";
import useChartStore from "../../commons/stores/store";
import { BarChart } from "./Components/BarChart";
import { LineChart } from "./Components/LineChart";
import { PieChart } from "./Components/PieChart";
import PolarAreaChart from "./Components/PolarAreaChart";
import { RadarChart } from "./Components/RadarChart";

const Chart = () => {
  // const navigate = useNavigate();
  const setCheckedTab = useChartStore((state: any) => state.setCheckedTab);
  const handleChange = (key: string) => {
    setCheckedTab(key);
  };
  const { tChartTab } = useCombineTranslation();
  const tabItems: TabsProps["items"] = [
    {
      key: "line-chart",
      label: tChartTab("line"),
      children: <LineChart />,
    },
    {
      key: "bar-chart",
      label: tChartTab("bar"),
      children: <BarChart />,
    },
    {
      key: "pie-chart",
      label: tChartTab("pie"),
      children: <PieChart />,
    },
    {
      key: "polar-area-chart",
      label: tChartTab("polar"),
      children: <PolarAreaChart />,
    },
    {
      key: "radar-chart",
      label: tChartTab("radar"),
      children: <RadarChart />,
    },
    {
      key: "bubble-chart",
      label: tChartTab("bubble"),
      // children: <BubbleChart />,
    },
    {
      key: "scatter-chart",
      label: tChartTab("scatter"),
      // children: <ScatterChart />,
    },
    {
      key: "mixed-chart",
      label: tChartTab("mixed"),
      // children: <MixedChart />,
    },
  ];

  return (
    <div className="px-10 ">
      <Tabs
        defaultActiveKey="line-chart"
        items={tabItems}
        onChange={handleChange}
      />
      <Outlet />
    </div>
  );
};

export default Chart;
