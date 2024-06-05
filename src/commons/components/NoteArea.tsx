import { List } from "antd";
import useCombineTranslation from "../hooks/useCombineTranslation";
import useGetChartData from "../hooks/useGetChartData";

const NoteArea = () => {
  const chartData = useGetChartData();
  const { t, tSubject } = useCombineTranslation();

  return (
    <div>
      <div className="font-medium text-base">{t("note")}</div>
      <List
        dataSource={chartData?.data}
        renderItem={(item: any) => (
          <List.Item key={item.id}>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[170px]">
              {tSubject(item.name)}
            </div>
            <div>{item.score}</div>
          </List.Item>
        )}
      >
        <List.Item>
          <div>Điểm trung bình</div>
          <div>{chartData.mediumScore}</div>
        </List.Item>
      </List>
    </div>
  );
};

export default NoteArea;
