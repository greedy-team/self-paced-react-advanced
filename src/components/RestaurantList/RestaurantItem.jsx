import { CATEGORY_IMAGE } from "../../RestaurantData"

export default function RestaurantItem({item, onOpenModal}){
    return(
        <li className="restaurant" onClick={()=>onOpenModal(item)}>
            <div className="restaurant__category">
                <img
                    src={CATEGORY_IMAGE[item.category]}
                    alt={item.category}
                    className="category-icon"
                />
            </div>
            <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">{item.name}</h3>
                <p className="restaurant__description text-body">
                    {item.description}
                </p>
            </div>
        </li>
    );
}
