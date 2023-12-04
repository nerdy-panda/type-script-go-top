import {default as ScrollContract } from "../../Contracts/Service/Scroll.js"
import { default as Service } from "../Scroll.js";
class Scroll {
    private static instance : ScrollContract | null = null ;
    public static getInstance():ScrollContract{
        if(this.instance==null)
            return this.instance = new Service;
        return this.instance;
    }   
}
export default Scroll;