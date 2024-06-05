import { Radio } from "antd";
import { semesterOptions } from "../constants/constants";
import useCombineTranslation from "../hooks/useCombineTranslation";
import useChartStore from "../stores/store";

export const RadioArea = () => {
  const { tSemester } = useCombineTranslation();
  const checkedSemester = useChartStore((state: any) => state.checkedSemester);
  const setCheckedSemester = useChartStore(
    (state: any) => state.setCheckedSemester
  );
  const onChange = (e: any) => {
    setCheckedSemester(e.target.value);
  };

  return (
    <div>
      <div className="font-medium text-base mb-5">{tSemester("semester")}</div>
      <Radio.Group onChange={onChange} value={checkedSemester}>
        {semesterOptions.map((option) => (
          <Radio key={option} value={option}>
            {tSemester(option)}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};
