const BASE_URL = 'http://localhost:3000';
const INTERVAL_TIME = 3000;
const selectableCategories = ['한식', '중식', '일식', '양식', '아시안', '기타'];

let started = false;
let idx = 0;

const randomCategory = () =>
  selectableCategories[Math.floor(Math.random() * selectableCategories.length)];

export const startRestaurantUpdateSimulator = () => {
  if (started) return;
  started = true;

  setInterval(() => {
    idx += 1;
    fetch(`${BASE_URL}/restaurants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `시뮬레이션 등록 ${idx}`,
        description: '',
        category: randomCategory(),
      }),
    });
  }, INTERVAL_TIME);
};
