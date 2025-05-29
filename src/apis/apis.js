
export const fetchRestaurants = async () => {
  const response = await fetch('http://localhost:3000/restaurants');
  const data = await response.json();

  return data;
};

export const addRestaurant = async (newRestaurant) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      });
      
      if (!response.ok) {
        throw new Error('레스토랑 추가 실패');
      }
    } catch (error) {
      console.error('레스토랑 추가 실패:', error);
      throw error;
    }
  }