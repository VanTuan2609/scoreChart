import { DotChartOutlined } from "@ant-design/icons";
import { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";
import MainLayout from "./MainLayout";
import Chart from "./pages/Chart/Chart";
import { BarChart } from "./pages/Chart/Components/BarChart";
import { LineChart } from "./pages/Chart/Components/LineChart";
import { PieChart } from "./pages/Chart/Components/PieChart";
import PolarAreaChart from "./pages/Chart/Components/PolarAreaChart";
import { RadarChart } from "./pages/Chart/Components/RadarChart";
import i18n from "./commons/translate/configTranslate";
import BubbleChart from "./pages/Chart/Components/BubbleChart";
import ScatterChart from "./pages/Chart/Components/ScatterChart";
import MixedChart from "./pages/Chart/Components/MixedChart";

type RouteData = {
  title?: string;
  key?: string;
  permissions?: string;
  noGenPermission?: boolean;
  noGenKey?: boolean;
  icon?: React.ReactNode;
  hidden?: boolean;
};

interface RouteWithDataIndex extends RouteData, IndexRouteObject {}

interface RouteWithDataNonIndex extends RouteData, NonIndexRouteObject {
  children?: (RouteWithDataIndex | RouteWithDataNonIndex)[];
}

export type TRoute = RouteWithDataIndex | RouteWithDataNonIndex;

i18n.changeLanguage("vi");
export const routes: TRoute[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "chart",
        element: <Chart />,
        icon: <DotChartOutlined />,
        children: [
          {
            path: "line-chart",
            element: <LineChart />,
          },
          {
            path: "bar-chart",
            element: <BarChart />,
          },
          {
            path: "pie-chart",
            element: <PieChart />,
          },
          {
            path: "polar-area-chart",
            element: <PolarAreaChart />,
          },
          {
            path: "radar-chart",
            element: <RadarChart />,
          },
          {
            path: "bubble-chart",
            element: <BubbleChart />,
          },
          {
            path: "scatter-chart",
            element: <ScatterChart />,
          },
          {
            path: "mixed-chart",
            element: <MixedChart />,
          },
        ],
      },
    ],
  },
];
