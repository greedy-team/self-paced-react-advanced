import "./RestaurantList.css"
import RestaurantItem from "./RestaurantItem"

export default function RestaurantList({restaurants, onOpenModal}){
    return(
        <section className="restaurant-list-container">
            <ul className="restaurant-list">
                {restaurants.map((item) => (
                    <RestaurantItem
                    key={item.id}
                    item={item}
                    onOpenModal={onOpenModal}
                    />
                ))}
            </ul>
        </section>
    )
}
