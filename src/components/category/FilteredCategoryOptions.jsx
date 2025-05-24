import CategoryOption from "./CategoryOption";

const CATEGORY_LIST = [
  {
    id: "00",
    name: "선택해 주세요",
    category: "select",
  },
  {
    id: "01",
    name: "전체",
    category: "all",
  },
  {
    id: "02",
    name: "한식",
    category: "korean",
  },
  {
    id: "03",
    name: "중식",
    category: "chinese",
  },
  {
    id: "04",
    name: "일식",
    category: "japanese",
  },
  {
    id: "05",
    name: "양식",
    category: "western",
  },
  {
    id: "06",
    name: "아시안",
    category: "asian",
  },
  {
    id: "07",
    name: "기타",
    category: "etc",
  },
];

function FilteredCategoryOptions({ excludedCategories }) {
  return CATEGORY_LIST.filter(
    (category) => !excludedCategories.includes(category.name)
  ).map((category) => (
    <CategoryOption
      key={category.id}
      name={category.name}
      category={category.category}
    />
  ));
}

export default FilteredCategoryOptions;
