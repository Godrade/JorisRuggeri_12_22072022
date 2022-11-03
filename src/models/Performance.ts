import {PerformanceDataAPI} from "../service/getPerformance";

/**
 * Class representing an Performance
 */
export class Performance {
    value: number;
    kind: string;

    constructor(data: PerformanceDataAPI, kind: { [key: number]: string }) {
        this.value = data.value;
        this.kind = kind[data.kind];
    }
}