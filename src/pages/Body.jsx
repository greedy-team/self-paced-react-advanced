import CategorySortFilter from '../component/body/CategorySortFilter';
import RestaurantList from '../component/body/RestaurantList';
import { useSetRecoilState } from 'recoil';
import { useEffect } from "react";
import { restaurantsState } from '../store/atoms';
import { fetchRestaurants } from '../apis/apis';

const Body = () => {
  const setRestaurants = useSetRecoilState(restaurantsState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRestaurants();
      setRestaurants(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <CategorySortFilter />
      <RestaurantList />
    </>
  );
};

export default Body;
