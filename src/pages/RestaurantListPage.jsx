import Header from '../components/Header/Header';
import MainContainer from '../components/Main/MainContainer';
import AsideContainer from '../components/Asides/AsideContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurantsData } from '../store/thunks/restaurantThunks';

function RestaurantListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantsData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainContainer />
      <AsideContainer />
    </>
  );
}

export default RestaurantListPage;
