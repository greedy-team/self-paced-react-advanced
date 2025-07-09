import { useSelector } from 'react-redux';
import CategorySortFilter from '../component/body/CategorySortFilter';
import RestaurantList from '../component/body/RestaurantList';

const Body = () => {
  const loading = useSelector(state => state.restaurant.loading);
  const error = useSelector(state => state.restaurant.error);

  if (loading) return <div>레스토랑 목록을 불러오는 중입니다...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <>
      <CategorySortFilter />
      <RestaurantList />
    </>
  );
};

export default Body;
