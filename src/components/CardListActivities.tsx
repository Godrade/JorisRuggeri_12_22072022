import { CardItemActivity } from "./CardItemActivity"

//Import Icon
import iconCalories from "../images/icon/calories-icon.svg";
import iconProtein from "../images/icon/protein-icon.svg";
import iconCarbs from "../images/icon/carbs-icon.svg";
import iconFat from "../images/icon/fat-icon.svg";
import { User } from "../models/User";

interface CardListActivitiesProps {
    user: User
}

export const CardListActivities = ({ user }:CardListActivitiesProps) => {
    return (
        <div className="col-12">
            <CardItemActivity iconLink={iconCalories} number={user.calorieCount} type="kCal" name='Calories' />
            <CardItemActivity iconLink={iconProtein} number={user.proteinCount} type="g" name='Proteines' />
            <CardItemActivity iconLink={iconCarbs} number={user.carbohydrateCount} type="g" name='Glucides' />
            <CardItemActivity iconLink={iconFat} number={user.lipidCount} type="g" name='Lipides' />
        </div>
    )
}