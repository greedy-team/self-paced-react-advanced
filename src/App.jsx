import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/Main/CategoryFilter";
import RestaurantList from "./components/Main/RestaurantList";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import useCategoryStore from "./categoryStore";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

function App() {
  // 상태값
  //const [category, setCategory] = useState("전체");
  const { category } = useCategoryStore();

  const [isDetailModal, setIsDetailModal] = useState(false);

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  const [isAddModal, setIsAddModal] = useState(false);

  const fetchRestaurants = async () => {
    const res = await fetch("http://localhost:3000/restaurants");
    return res.json();
  };
  const { data: totalRestaurants = [] } = useQuery({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurants,
  });

  const queryClient = useQueryClient();

  const addRestaurantMutation = useMutation({
    mutationFn: async (newRestaurant) => {
      const res = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      });
      return res.json();
    },
    onMutate: (newRestaurant) => {
      const prevData = queryClient.getQueryData(["restaurants"]);
      queryClient.setQueryData(["restaurants"], (oldData = []) => [
        ...oldData,
        { ...newRestaurant, id: Date.now() },
      ]);

      return { prevData };
    },
    onError: (error, newRestaurant, context) => {
      queryClient.setQueryData(["restaurants"], context.prevData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["restaurants"],
      });
      
    },
  });

  // 파생값
  const filteredRestaurants =
    category === "전체"
      ? totalRestaurants
      : totalRestaurants.filter((r) => r.category === category);

  const selectedRestaurant = totalRestaurants.find(
    (r) => r.id === selectedRestaurantId,
  );

  //  핸들러
  const handleClickRestaurantList = (r) => {
    setIsDetailModal(true);
    setSelectedRestaurantId(r.id);
  };

  const handleClickAddRestaurant = (newRestaurant) => {
    setIsAddModal(false);
    addRestaurantMutation.mutate(newRestaurant);
    //setTotalRestaurants((prev) => [...prev, newRestaurant]);
  };
  return (
    <>
      <Header setIsAddModal={setIsAddModal} />
      <main>
        <CategoryFilter />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          handleClickRestaurantList={handleClickRestaurantList}
        />
      </main>
      <aside>
        {isDetailModal && (
          <RestaurantDetailModal
            setIsDetailModal={setIsDetailModal}
            selectedRestaurant={selectedRestaurant}
          />
        )}
        {isAddModal && (
          <AddRestaurantModal
            handleClickAddRestaurant={handleClickAddRestaurant}
          />
        )}
      </aside>
    </>
  );
}

export default App;
