import { getRestaurants, addNewRestaurant } from '../../api/api';

export const createRestaurantSlice = (set) => ({
  restaurants: [],
  getStatus: 'idle',
  postStatus: 'idle',
  selectedCategory: '전체',
  selectedRestaurant: null,

  restaurantActions: {
    setSelectedCategory: (category) => set({ selectedCategory: category }),

    setSelectedRestaurant: (restaurant) =>
      set({ selectedRestaurant: restaurant }),

    fetchRestaurants: async () => {
      set({ getStatus: 'loading' });
      try {
        const list = await getRestaurants();
        set({ restaurants: list, getStatus: 'succeeded' });
      } catch {
        set({ getStatus: 'failed' });
      }
    },

    postNewRestaurant: async (newRestaurant) => {
      set({ postStatus: 'loading' });
      try {
        await addNewRestaurant(newRestaurant);
        set({ postStatus: 'succeeded' });
      } catch {
        set({ postStatus: 'failed' });
      }
    },
  },
});
