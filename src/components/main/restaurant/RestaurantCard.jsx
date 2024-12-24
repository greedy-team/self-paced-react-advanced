import styled from 'styled-components';
import koreanIcon from '../../../assets/category/category-korean.png';
import asianIcon from '../../../assets/category/category-asian.png';
import chineseIcon from '../../../assets/category/category-chinese.png';
import etcIcon from '../../../assets/category/category-etc.png';
import japaneseIcon from '../../../assets/category/category-japanese.png';
import westernIcon from '../../../assets/category/category-western.png';
import { useSetRecoilState } from 'recoil';
import { detailModalState } from '../../../recoil/ModalState';
import { selectedRestaurantState } from '../../../recoil/SelectedRestaurantState';

const getCategoryIcon = (alt) => {
  switch (alt) {
    case '한식':
      return koreanIcon;
    case '중식':
      return chineseIcon;
    case '아시안':
      return asianIcon;
    case '일식':
      return japaneseIcon;
    case '양식':
      return westernIcon;
    case '기타':
      return etcIcon;
  }
};

const RestaurantCard = ({ alt, name, description }) => {
  const image = getCategoryIcon(alt);
  const setDetailModal = useSetRecoilState(detailModalState);
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);

  return (
    <RestaurantCardBox
      onClick={() => {
        setDetailModal(true);
        setSelectedRestaurant({
          name,
          description,
        });
      }}
    >
      <CategoryBox>
        <img src={image} alt={alt} />
      </CategoryBox>
      <RestaurantInfoBox>
        <RestaurantName>{name}</RestaurantName>
        <RestaurantDescription>{description}</RestaurantDescription>
      </RestaurantInfoBox>
    </RestaurantCardBox>
  );
};

export default RestaurantCard;

const RestaurantCardBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: ${(props) => props.theme.lightenColor};

  & > img {
    width: 36px;
    height: 36px;
  }
`;

const RestaurantInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
