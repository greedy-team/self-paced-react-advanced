import axios from 'axios';

export const fetchRestaurants = async () => {
  const response = await axios.get('http://localhost:3000/restaurants');
  return response.data;
};

export const addRestaurant = async (newRestaurant) => {
  try {
    const response = await axios.post('http://localhost:3000/restaurants', newRestaurant, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('레스토랑 추가 실패:', error);
    throw error;
  }
};