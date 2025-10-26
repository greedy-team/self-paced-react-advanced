const BASE_URL = import.meta.env.VITE_API_URL;

export const getRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/restaurants`);
  if (!response.ok) {
    throw new Error('식당 불러오기 실패');
  }
  const data = await response.json();
  return data;
};

export const addNewRestaurant = async (newRestaurant) => {
  const response = await fetch(`${BASE_URL}/restaurants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestaurant),
  });
  if (!response.ok) {
    throw new Error('식당 등록 실패');
  }
};
