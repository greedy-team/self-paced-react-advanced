import { atom, selector, useRecoilCallback } from 'recoil';
import { createRestaurant } from '../api/restaurantsApi';

export const modalTypeState = atom({
  key: 'modalTypeState',
  default: null,
});


/**
 * 음식점 목록 상태
 * [
 *  {
 *    id: string,
 *    name: string,
 *    category: string,
 *    description: string
 *  },
 *  ...
 * ]
 * @type {Array<{ 
 * id: string, 
 * name: string, 
 * category: string, 
 * description: string 
 * }>}
 */
export const restaurantState = atom({
  key: 'restaurantState',
  default: [],
});

/**
 * 현재 선택된 음식점 상태
 * 
 * @type {{ 
 * id: string, 
 * name: string, 
 * category: string, 
 * description: string 
 * } | null}
 */
export const selectedRestaurantState = atom({
  key: 'selectedRestaurantState',
  default: null,
})

/**
 * 선택된 음식점 카테고리 상태
 * 
 * @type {"" | "전체" | "한식" | "중식" | "일식" | "양식" | "아시안" | "기타"}
 */
export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: '전체',
});

/**
 * 선택된 카테고리에 따라 필터링된 음식점 목록 상태
 *
 * @type {Array<{ 
 * id: string, 
 * name: string, 
 * category: string, 
 * description: string 
 * }>}
 */
export const filteredRestaurantState = selector({
  key: 'filteredRestaurantState',
  get: ({ get }) => {
    const list = get(restaurantState);
    const category = get(selectedCategoryState);
    return category === '전체'
      ? list
      : list.filter(restaurant => restaurant.category === category);
  },
});

/**
 * 음식점 추가 커스텀 훅
 *
 * 이 훅은 "createRestaurant" API를 호출해 새 음식점을 추가한 뒤,
 * restaurantState 상태에 새 항목을 반영함.
 *
 * @returns {(newItem: { 
 * name: string, 
 * category: string, 
 * description: string 
 * }) => Promise<void>}
 */
export const useAddRestaurant = () =>
  useRecoilCallback(({ snapshot, set }) =>
    async (newItem) => {
      const created = await createRestaurant(newItem);
      const prev = await snapshot.getPromise(restaurantState);
      set(restaurantState, [...prev, created]);
    }, [],);
