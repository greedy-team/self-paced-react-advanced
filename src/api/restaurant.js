const BASE_URL = "http://localhost:3000";

const makeUrl = (path, params) => {
  const url = new URL(path, BASE_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });
  }
  return url.toString();
};

export const getRestaurants = async (opts = {}) => {
  const { category = null } = opts;

  const params = category && category !== "all" ? { category } : undefined;
  const url = makeUrl("/restaurants", params);

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("레스토랑 목록을 불러오는 데 실패했습니다.");
  }
  return response.json();
};

export const addRestaurant = async (newRestaurant) => {
  const url = makeUrl("/restaurants");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRestaurant),
  });

  if (!response.ok) {
    throw new Error("레스토랑을 추가하는 데 실패했습니다.");
  }
  return response.json();
};
