import Scroll from "../Service/Scroll.js";
import Widget from "../Service/Widget.js";

interface TravelToHome extends Widget{
    readonly model : HTMLElement ;
    scrollService : Scroll ;
    step : number ;
    timeout : number ;

    bootstrap():void;
}
export default TravelToHome;