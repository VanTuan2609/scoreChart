import { Radio } from "antd";
import {
  barChartOptions,
  pieChartOptions,
  typeChartOption,
} from "../constants/constants";
import useChartStore from "../stores/store";
import useCombineTranslation from "../hooks/useCombineTranslation";

const TypeChart = () => {
  const checkedTab = useChartStore((state: any) => state.checkedTab);
  const checkedTypeChart = useChartStore(
    (state: any) => state.checkedTypeChart
  );
  const setCheckedTypeChart = useChartStore(
    (state: any) => state.setCheckedTypeChart
  );
  const { tChartTab } = useCombineTranslation();

  const onChange = (e: any) => {
    setCheckedTypeChart(e.target.value);
  };

  const checkType =
    checkedTab === typeChartOption.barChart ? barChartOptions : pieChartOptions;

  return (
    <Radio.Group
      onChange={onChange}
      value={checkedTypeChart}
      className="absolute right-0"
    >
      {checkType.map((option) => (
        <Radio key={option.key} value={option.key}>
          {tChartTab(option.label)}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default TypeChart;
