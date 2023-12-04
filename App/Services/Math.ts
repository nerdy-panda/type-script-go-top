import { default as Contract } from "../Contracts/Service/Math.js";
class Math implements Contract {
    percentOf(precent: number, all: number): number {
        return (precent * all ) / 100 ; 
    }
}
export default Math;