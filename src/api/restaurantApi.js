const SERVER_URL = 'http://localhost:3000';

export const getRestaurantInfoList = async () => {
  const response = await fetch(`${SERVER_URL}/restaurants`);
  if (!response.ok) {
    throw new Error('데이터를 불러오지 못했습니다!');
  }
  return response.json();
};

export const addNewRestaurantInfo = async (restaurantInfo) => {
  const response = await fetch(`${SERVER_URL}/restaurants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurantInfo),
  });

  if (!response.ok) {
    throw new Error('데이터 추가에 실패했습니다!');
  }
};
