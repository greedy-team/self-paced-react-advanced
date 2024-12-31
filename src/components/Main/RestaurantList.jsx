import RestaurantItem from './RestaurantItem.jsx';
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useRestaurants } from "../../hooks/useRestaurants.js";
import { categoryState } from "../../recoil/CategoryState.jsx";
import { restaurantListState } from "../../recoil/RestaurantListState.jsx";

const RestaurantListContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 16px 0;
`;

function RestaurantList() {
    useRestaurants();
    const category = useRecoilValue(categoryState);
    const restaurants = useRecoilValue(restaurantListState);

    const filteredRestaurants = category === "전체"
        ? restaurants : restaurants.filter((restaurant) => restaurant.category === category);

    return (
        <RestaurantListContainer>
            <ul>
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantItem 
                        key={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        category={restaurant.category}
                        alt={restaurant.alt}
                    />
                ))}
            </ul>
        </RestaurantListContainer>
    );
}

export default RestaurantList;