const LOCAL_SERVER_URL = 'http://localhost:3000';

const restaurantApi = {
  async fetchAllRestaurants() {
    const response = await fetch(`${LOCAL_SERVER_URL}/restaurants`);
    if (!response.ok) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }
    return response.json();
  },

  async postRestaurant(restaurant) {
    const response = await fetch(`${LOCAL_SERVER_URL}/restaurants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurant),
    });
    if (!response.ok) {
      throw new Error('데이터를 저장하는데 실패했습니다.');
    }
    return response.json();
  },
};

export default restaurantApi;
