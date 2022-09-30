import {ActivityAPI} from "../service/getActivity"

export class Activity {
    day: string;
    kilogram: number;
    calories: number;

    constructor(data: ActivityAPI) {
        this.day = this.getDate(data.day);
        this.kilogram = data.kilogram;
        this.calories = data.calories;
    }

    /**
     *
     * @param day
     */
    getDate(day: string) {
        const date = new Date(day)
        return String(date.getDate())
    }
}
