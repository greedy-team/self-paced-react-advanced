import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestaurants, addRestaurant } from '../../api/api';

export const fetchRestaurantsData = createAsyncThunk(
  'restaurant/fetchRestaurantsData',
  async () => {
    try {
      return await getRestaurants();
    } catch {
      return alert('레스토랑 데이터를 불러오지 못했습니다.');
    }
  }
);

export const postRestaurantData = createAsyncThunk(
  'restaurant/postRestaurantData',
  async newRestaurant => {
    try {
      await addRestaurant(newRestaurant);
      return newRestaurant;
    } catch {
      return alert('레스토랑 데이터를 추가하지 못했습니다.');
    }
  }
);
