import { createContext, useState, useEffect, useMemo } from 'react';
import { initialRestaurants } from '../constants/initialRestaurants.js';

const RESTAURANTS_API_URL = 'http://localhost:3000/restaurants';

// Context 생성
export const RestaurantContext = createContext(null);

// Provider 컴포넌트
export const RestaurantProvider = ({ children }) => {
  // 1. 음식점 데이터 상태 (기존 useRestaurants hook 로직)
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  
  // 2. 필터 및 UI 상태 (기존 App.jsx 상태)
  const [category, setCategory] = useState('전체');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // 초기 데이터 페칭
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(RESTAURANTS_API_URL);
        const restaurantData = await response.json();
        setRestaurants(restaurantData);
      } catch (error) {
        console.error('음식점 데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchRestaurants();
  }, []);

  // 음식점 추가 로직
  const addRestaurant = async (newRestaurant) => {
    try {
      const response = await fetch(RESTAURANTS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`[${response.status}] 음식점 추가 실패: ${errorData.message || '알 수 없는 서버 에러'}`);
      }

      const createdRestaurant = await response.json();
      setRestaurants((prev) => [...prev, createdRestaurant]);
      return true;
    } catch (error) {
      console.error('[Error/addRestaurant]:', error.message);
      alert('음식점 추가에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      return false;
    }
  };

  // 3. 필터링된 음식점 목록 (계산된 상태)
  const filteredRestaurants = useMemo(() => {
    return category === '전체'
      ? restaurants
      : restaurants.filter((r) => r.category === category);
  }, [restaurants, category]);

  // 하위 컴포넌트에 전달할 값들을 하나로 묶기
  const value = {
    restaurants,
    filteredRestaurants,
    category,
    setCategory,
    isAddModalOpen,
    setIsAddModalOpen,
    selectedRestaurant,
    setSelectedRestaurant,
    addRestaurant,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};