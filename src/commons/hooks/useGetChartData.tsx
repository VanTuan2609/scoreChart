import { useQuery } from "@tanstack/react-query";
import { chartApi } from "../../apis/apis";
import useChartStore from "../stores/store";
import useCombineTranslation from "./useCombineTranslation";

const useGetChartData = () => {
  const checkedSemester = useChartStore((state: any) => state.checkedSemester);
  const { tSubject } = useCombineTranslation();

  const { data } = useQuery({
    queryKey: ["lineChart", checkedSemester],
    queryFn: () => chartApi.getDataChart(checkedSemester),
  });

  const totalCredit = data?.data
    .map((item: any) => item.credit)
    .reduce((acc: any, cur: any) => acc + cur, 0);

  const totalScoreWithCredit = data?.data
    .map((item: any) => item.score * item.credit)
    .reduce((acc: any, cur: any) => acc + cur, 0);

  const calculator = () => {
    if (totalCredit === 0) {
      return 0;
    }
    const result = totalScoreWithCredit / totalCredit;
    return Number(result.toFixed(2));
  };

  const mediumScore = calculator();

  const score = data?.data.map((item: any) => item.score) ?? [];

  const subject = data?.data.map((item: any) => tSubject(item.name)) ?? [];

  const shortLabel = (index: any) => {
    const label = subject[index];
    if (typeof label === "string" && label.length > 17) {
      return label.substring(0, 17) + "...";
    }
    return label;
  };

  return {
    subject,
    score,
    mediumScore,
    data: data?.data,
    shortLabel,
  };
};

export default useGetChartData;
