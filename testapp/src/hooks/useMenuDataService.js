import useDataService from "./useDataService";

const filePathMenu = "/data/menu.json";

export function useMenuDataService() {
  return useDataService(filePathMenu);
}