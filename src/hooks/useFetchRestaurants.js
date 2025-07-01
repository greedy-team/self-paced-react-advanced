import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLists } from "../store/restaurantSlice";

const useFetchRestaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);
}

export default useFetchRestaurants;