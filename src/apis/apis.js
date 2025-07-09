import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchRestaurants = async () => {
  const { data } = await instance.get('/restaurants');
  return data;
};

export const addRestaurant = async (newRestaurant) => {
  try {
    const { data } = await instance.post('/restaurants', newRestaurant);
    return data;
  } catch (error) {
    console.error('레스토랑 추가 실패:', error);
    throw error;
  }
};