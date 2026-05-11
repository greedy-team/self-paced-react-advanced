import PropTypes from 'prop-types';
import '../styles/default.css';
import '../styles/RestaurantList.css';

import korean from '../../../templates/category-korean.png';
import chinese from '../../../templates/category-chinese.png';
import japanese from '../../../templates/category-japanese.png';
import western from '../../../templates/category-western.png';
import asian from '../../../templates/category-asian.png';
import etc from '../../../templates/category-etc.png';

const categoryImage = {
  한식: korean,
  중식: chinese,
  일식: japanese,
  양식: western,
  아시안: asian,
  기타: etc,
};

function RestaurantList({ filteredRestaurants, handleClickRestaurantList }) {
  return (
    <section className="restaurant-list-container">
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
            <div className="restaurant__category">
              <img src={categoryImage[r.category]} alt={r.category} className="category-icon" />
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">{r.name}</h3>
              <p className="restaurant__description text-body">{r.description}</p>
            </div>
          </div>
        ))}
      </ul>
    </section>
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
