# 02-1. 전역상태관리 - Context API

## 🎯 요구사항

- Context API를 사용해서 애플리케이션 내의 **props drilling** 문제를 해결하세요.
  - props로 **똑같은** 데이터 혹은 함수를 전달하지 않도록 해야합니다.
  - props를 쓴다면 그 이유를 PR에 적어주세요.
- PR에 Context API를 **왜** 사용하는지, 기존의 코드구조와 어떤 **trade-off**가 있는지 적어주세요.
- Context API와 데이터를 사용하는 Component 사이의 **관계를 도식화**하고 이미지를 PR에 첨부해주세요.
  - 실제 코드와 상관없이 일반적인 관계를 나타내야합니다.
  - 도식화 방식은 자유롭게 하셔도 좋습니다.
  - (추천) **Figma**

  https://ko.react.dev/reference/react/createContext#consumer

# WHAT?

## 단어 그대로 해석하면 "Prop(데이터)을 아래로 계속 뚫고(Drilling) 내려간다"는 뜻

뭘 바꿀까. **props drilling** 은 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해, 중간에 있는 컴포넌트들이 그 데이터를 사용 않으면서 전달만 하는 과정임.

**createContext로 선언(생성)하고, Provider로 제공(공급)하고, useContext로 소비(사용)하면 됨**

# WHERE?

## Modal

App -> renderModal (RestaurantDetailModal | AddRestaurantModal) -> Modal 에서 onCloseDetailModal 여기서 props drilling 이 발생함.

## RestaurantList

App -> RestaurantList -> RestaurantItem 에서 onRestaurantClick 이 onClick 으로 래핑되어 내려감. RestaurantList 는 클릭 자체를 사용하지 않고 RestaurantItem 에 전달만 하기 때문에 props drilling 발생함.

## category

App -> Header 와 App -> CategoryFilter 로 똑같은 category 상태가 형제 컴포넌트에 각각 prop 으로 내려감. drilling 은 아니지만, "props로 **똑같은** 데이터 혹은 함수를 전달하지 않도록 해야합니다." 라는 요구사항에 걸림.

## setActiveModal

App -> Header (onOpenAddModal), App -> RestaurantDetailModal (onCloseDetailModal), App -> AddRestaurantModal (onCloseAddModal) 로 본질은 모두 setActiveModal(...) 인 함수가 여러 이름으로 쪼개져 흩어짐. 모달 제어 책임이 분산되어 있어 Context 로 묶을 후보.

# WHY?

## drilling 의 정의 재확인

drilling 은 단순히 한 단계 더 내려가는 게 아니라, **중간 컴포넌트가 그 prop 을 사용하지 않고 전달만** 할 때 발생한다. ex : Modal, RestaurantList,

## 형제 컴포넌트에 같은 상태 전달

같은 상태를 형제 컴포넌트에 각각 prop 으로 내려보내는 것도 Context 적용 후보. category 가 그 예.

## 관심사가 같은 함수의 분산

관심사가 같은 함수(setActiveModal)가 여러 이름(onOpenAddModal, onCloseDetailModal, onCloseAddModal)으로 쪼개져 있으면 Context 로 묶어 의미를 살릴 수 있다.

크게 레스토랑 관련, 모달 관련으로 나누어질 거 같음.

# HOW?

### 주로 사용하는 패턴처럼 src/contexts/\* 에. 위치 시키면 될 듯

## RestaurantContext

restaurants, addRestaurant, category, setCategory, filteredRestaurants 를 묶음.
-> category 중복 전달, restaurants / addRestaurant 전달 해소.

## ModalContext

activeModal, selectedRestaurant, openAddModal, openDetailModal, closeModal 을 묶음.
-> onClose drilling, onRestaurantClick drilling, setActiveModal 파생 함수 분산 해소.
