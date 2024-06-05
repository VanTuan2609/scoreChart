import { create } from "zustand";

const useChartStore = create((set) => ({
  checkedSemester: "Semester 1",
  setCheckedSemester: (value: any) => set({ checkedSemester: value }),
  checkedTab: "",
  setCheckedTab: (value: any) =>
    set(() => {
      return { checkedTab: value, checkedTypeChart: value };
    }),
  checkedTypeChart: "",
  setCheckedTypeChart: (value: any) => set({ checkedTypeChart: value }),
}));

export default useChartStore;
