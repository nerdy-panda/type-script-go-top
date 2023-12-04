import Widget from "../Services/Widget.js";
import { default as Contract } from "../Contracts/Widgets/TravelToHome.js";
import Scroll from "../Contracts/Service/Scroll.js";

class TravelToHome extends Widget implements Contract {
    constructor(
        public model : HTMLElement, public scrollService : Scroll, 
        public step : number , public timeout : number , 
    ){
        super();
    }
    bootstrap(): void {
        this.model.addEventListener('click',this.clickHandler);
    }
    protected clickHandler = (event : Event) :void => {
        this.scrollService.smoothToHome(this.step , this.timeout);
    }
}
export default TravelToHome;