const LOCAL_SERVER_URL = 'http://localhost:3000';

const restaurantApi = {
  async fetchAllRestaurants() {
    const response = await fetch(`${LOCAL_SERVER_URL}/restaurants`);
    return response.json();
  },

  async postRestaurant(restaurant) {
    const response = await fetch(`${LOCAL_SERVER_URL}/restaurants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurant),
    });
    return response.json();
  },
};

export default restaurantApi;
