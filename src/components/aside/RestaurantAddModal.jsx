import Modal from "./modal/Modal.jsx";
import styles from "/src/styles/RestaurantAddModal.module.css";
import RestaurantCategory from "../category/FilteredCategoryOptions";
import { useRestaurantContext } from "../../context/RestaurantContext.jsx";

const CATEGORY_MAP = {
    korean: "한식",
    chinese: "중식",
    japanese: "일식",
    western: "양식",
    asian: "아시안",
    etc: "기타",
};

function generateId() {
    return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

export default function RestaurantAddModal() {
    const {
        setModalState,
        getRestaurants
    } = useRestaurantContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const id = generateId();
        const category = e.target.category.value;
        const alt = CATEGORY_MAP[category];
        const icon = `/assets/images/category/category-${category}.png`;
        const name = e.target.name.value;
        const description = e.target.description.value;

        const newRestaurant = {
            id: id,
            category: category,
            icon: icon,
            alt: alt,
            name: name,
            description: description,
        };

        try {
            const response = await fetch("http://localhost:3000/restaurants", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newRestaurant),
            });

            if (!response.ok) {
                throw new Error("서버 응답 오류");
            }

            const data = await response.json();
            // 서버에서 생성된 ID를 포함한 응답 데이터를 받아옵니다
            console.log("새로운 음식점이 추가되었습니다:", data);
        } catch (error) {
            console.error("실패:", error);
        }

        getRestaurants();
        setModalState('list');
    };

    return (
        <Modal title="새로운 음식점" onClose={() => setModalState('list')} onSubmit={handleSubmit}>
            <div className={`${styles["form-item"]} ${styles["form-item--required"]}`}>
                <label htmlFor="category" className="text-caption">카테고리</label>
                <select name="category" id="category" required>
                    <RestaurantCategory excludedCategories={"전체"} />
                </select>
            </div>

            <div className={`${styles["form-item"]} ${styles["form-item--required"]}`}>
                <label htmlFor="name" className="text-caption">이름</label>
                <input type="text" name="name" id="name" required />
            </div>

            <div className={styles["form-item"]}>
                <label htmlFor="description" className="text-caption">설명</label>
                <textarea name="description" id="description" cols="30" rows="5" />
                <span className={`${styles["help-text"]} text-caption`}>
                    메뉴 등 추가 정보를 입력해 주세요.
                </span>
            </div>
        </Modal>
    );
}
