import { UserAPI } from "../service/getUser";

export class User {

    firstName: string;
    todayScore: number;
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;

    constructor(data:UserAPI){
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore;
        this.calorieCount = data.keyData.calorieCount;
        this.proteinCount = data.keyData.proteinCount;
        this.carbohydrateCount = data.keyData.carbohydrateCount;
        this.lipidCount = data.keyData.lipidCount
    }
}