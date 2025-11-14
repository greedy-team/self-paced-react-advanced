const API_URL = "http://localhost:3000";

export const getRestaurants = async () => {
  const response = await fetch(`${API_URL}/restaurants`);
  return response.json();
};

export const postRestaurant = async (restaurant) => {
  const response = await fetch(`${API_URL}/restaurants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });
  return response.json();
};
