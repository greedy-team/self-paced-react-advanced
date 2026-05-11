import PropTypes from "prop-types";
import styled from "styled-components";

import korean from "../../../templates/category-korean.png";
import chinese from "../../../templates/category-chinese.png";
import japanese from "../../../templates/category-japanese.png";
import western from "../../../templates/category-western.png";
import asian from "../../../templates/category-asian.png";
import etc from "../../../templates/category-etc.png";

const categoryImage = {
  한식: korean,
  중식: chinese,
  일식: japanese,
  양식: western,
  아시안: asian,
  기타: etc,
};

const ResaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

const RestuarantCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: #f6a88a;
`;

const IconImage = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;
`;

const RestaurantDistance = styled.p`
  color: #ec4a0a;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function RestaurantList({ filteredRestaurants, handleClickRestaurantList }) {
  return (
    <ResaurantListContainer>
      <ul className="restaurant-list">
        {filteredRestaurants.map((r) => (
          <div
            key={r.id}
            role="button"
            tabIndex={0}
            aria-label="상세보기"
            onClick={() => {
              handleClickRestaurantList(r);
            }}
            onKeyDown={() => handleClickRestaurantList(r)}
            className="restaurant"
          >
            <RestuarantCategory>
              <IconImage
                src={categoryImage[r.category]}
                alt={r.category}
                className="category-icon"
              />
            </RestuarantCategory>
            <RestaurantInfo>
              <RestaurantName>{r.name}</RestaurantName>
              <RestaurantDescription>{r.description}</RestaurantDescription>
            </RestaurantInfo>
          </div>
        ))}
      </ul>
    </ResaurantListContainer>
  );
}

RestaurantList.propTypes = {
  filteredRestaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  handleClickRestaurantList: PropTypes.func.isRequired,
};

export default RestaurantList;
