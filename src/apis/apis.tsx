import axios from "axios";

export const chartApi = {
  getDataChart(checked: string) {
    return axios.get(`http://localhost:3000/${checked}`);
  },
};
