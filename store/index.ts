import { defineStore } from "pinia";
import { DataProps } from "~/types/datas";

export const useMainStore = defineStore("main", {
  state: () => ({
    data: [] as DataProps[],
  }),
  actions: {
    storeDataFromApi(data: DataProps[]) {
      this.data = data;
    },
    filterDataWithId(id: string) {
      return this.data.find((el) => el.id === id);
    },
  },
});
