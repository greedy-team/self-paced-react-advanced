const SERVER_URL = 'http://localhost:3000';

export const getRestaurantInfoList = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/restaurants`);
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        data: null,
        error: response.status,
      };
    }
    return {
      success: true,
      data,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: 'Network Error: 서버에 연결할 수 없습니다. 인터넷 연결을 확인하세요.',
    };
  }
};

export const addNewRestaurantInfo = async (restaurantInfo) => {
  try {
    const response = await fetch(`${SERVER_URL}/restaurants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurantInfo),
    });

    if (!response.ok) {
      return {
        success: false,
        error: response.status,
      };
    }
    return {
      success: true,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Network Error: 서버에 연결할 수 없습니다. 인터넷 연결을 확인하세요.',
    };
  }
};
