const BASE_URL = import.meta.env.VITE_API_URL;

export const getRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/restaurants`);
  const data = await response.json();
  return data;
};

export const addNewRestaurant = async (newRestaurant) => {
  await fetch(`${BASE_URL}/restaurants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestaurant),
  });
};