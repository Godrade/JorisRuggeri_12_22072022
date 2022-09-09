import { CardItemActivity } from "./CardItemActivity"

//Import Icon
import iconCalories from "../images/icon/calories-icon.svg";
import iconProtein from "../images/icon/protein-icon.svg";
import iconCarbs from "../images/icon/carbs-icon.svg";
import iconFat from "../images/icon/fat-icon.svg";

export const CardListActivities = ({ user }) => {
    return (
        <div className="col-12">
            <CardItemActivity iconLink={iconCalories} number={user.keyData.calorieCount} type="kCal" name='Calories' />
            <CardItemActivity iconLink={iconProtein} number={user.keyData.proteinCount} type="g" name='Proteines' />
            <CardItemActivity iconLink={iconCarbs} number={user.keyData.carbohydrateCount} type="g" name='Glucides' />
            <CardItemActivity iconLink={iconFat} number={user.keyData.lipidCount} type="g" name='Lipides' />
        </div>
    )
}