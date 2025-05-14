import styled from 'styled-components';
import RestaurantListItem from './RestaurantListItem.jsx';
import { useRestaurantContext } from '../../context/RestaurantContext.jsx';

const RestaurantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantList = () => {
  const { restaurants, selectedCategory } = useRestaurantContext();

  const filteredRestaurants =
    selectedCategory === 'all'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === selectedCategory);

  return (
    <RestaurantListContainer>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            categoryIcon={restaurant.icon}
            categoryAlt={restaurant.alt}
            name={restaurant.name}
            description={restaurant.description}
          />
        ))}
      </ul>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
