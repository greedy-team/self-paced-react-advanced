import { create } from 'zustand';
import { getRestaurantInfoList, addNewRestaurantInfo } from '../api/restaurantApi';

const useRestaurantInfoListStore = create((set, get) => ({
  restaurantInfoList: [],

  fetchRestaurantInfoList: async () => {
    const response = await getRestaurantInfoList();
    if (response.success) {
      set(() => ({ restaurantInfoList: response.data }));
    } else {
      alert(response.error);
    }
  },

  addRestaurantInfo: async (restaurantInfo) => {
    const response = await addNewRestaurantInfo(restaurantInfo);
    if (response.success) {
      get().fetchRestaurantInfoList();
    } else {
      alert(response.error);
    }
  },

}));

export default useRestaurantInfoListStore;
