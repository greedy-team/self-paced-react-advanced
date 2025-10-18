const BASE_URL = "http://localhost:3000";

export const getRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/restaurants`);
  if (!response.ok) {
    throw new Error("레스토랑 목록을 불러오는 데 실패했습니다.");
  }
  return response.json();
};

export const addRestaurant = async (newRestaurant) => {
  const response = await fetch(`${BASE_URL}/restaurants`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRestaurant),
  });
  if (!response.ok) {
    throw new Error("레스토랑을 추가하는 데 실패했습니다.");
  }
  return response.json();
};
