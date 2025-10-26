export const createRestaurantSlice = (set) => ({
  selectedCategory: '전체',
  selectedRestaurant: null,

  restaurantActions: {
    setSelectedCategory: (category) => set({ selectedCategory: category }),

    setSelectedRestaurant: (restaurant) =>
      set({ selectedRestaurant: restaurant }),
  },
});
