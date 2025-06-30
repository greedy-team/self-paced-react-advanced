import { fetchRestaurants } from '../../apis/apis';
import { FETCH_RESTAURANTS } from './type';

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