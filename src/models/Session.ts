import { SessionAPI } from "../service/getSession";
const day = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

export class Session {
    
    day: string;
    sessionLength: number;

    constructor(data:SessionAPI){
        this.day = day[data.day];
        this.sessionLength = data.sessionLength;
    }
}