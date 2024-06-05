import { Divider } from "antd";
import NoteArea from "./NoteArea";
import { RadioArea } from "./RadioArea";

const OptionArea = () => {
  return (
    <div className="flex-1 md:max-w-[220px]">
      <RadioArea />
      <Divider />
      <NoteArea />
    </div>
  );
};

export default OptionArea;
