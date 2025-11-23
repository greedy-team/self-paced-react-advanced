import { useState, useEffect, useCallback } from 'react';
import { getRestaurantInfoList, addNewRestaurantInfo } from '../api/restaurantApi';

const useRestaurantInfoList = () => {
  const [restaurantInfoList, setRestaurantInfoList] = useState([]);

  const fetchRestaurantInfoList = useCallback(async () => {
    const response = await getRestaurantInfoList();
    if (response.success) {
      setRestaurantInfoList(response.data);
    } else {
      alert(response.error);
    }
  }, []);

  const addRestaurantInfo = useCallback(async (restaurantInfo) => {
    const response = await addNewRestaurantInfo(restaurantInfo);

    if (response.success) {
      fetchRestaurantInfoList();
    } else {
      alert(response.error);
    }
  }, [fetchRestaurantInfoList]);

  useEffect(() => {
    fetchRestaurantInfoList();
  }, [fetchRestaurantInfoList]);

  return {
    restaurantInfoList,
    addRestaurantInfo,
    fetchRestaurantInfoList,
  };
};

export default useRestaurantInfoList;
