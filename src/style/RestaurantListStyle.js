import styled from "styled-components";

export const RestaurantListContainer = styled.div`
  .text-subtitle {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }

  .text-body {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export const Restaurant = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

export const RestaurantCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: var(--lighten-color);

  .category-icon {
    width: 36px;
    height: 36px;
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .restaurant__name {
    margin: 0;
  }

  .restaurant__description {
    display: -webkit-box;

    padding-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
