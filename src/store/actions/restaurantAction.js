import { fetchRestaurants } from '../../apis/apis';
import { FETCH_RESTAURANTS, SET_SELECTED_RESTAURANT } from './type';

export const fetchLists = () => {
  return async dispatch => {
    try {
      const lists = await fetchRestaurants();
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: lists
      });
    } catch (error) {
      console.error('레스토랑 리스트 불러오기 실패: ', error);
    }
  };
};

export const setSelectedRestaurant = (id) => ({
  type: SET_SELECTED_RESTAURANT,
  payload: id
});