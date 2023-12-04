import {default as BaseTravelToHome} from "../TravelToHome.js";
import {default as Contract } from "../../Contracts/Widgets/Decorators/TravelToHome.js";
import Scroll from "../../Contracts/Service/Scroll.js";

class TravelToHome extends BaseTravelToHome implements Contract {
    constructor(
        model : HTMLElement, scrollService : Scroll,
        public fadeinPosition : number ,step : number , timeout : number , 
        public fadeinClass : string ,public fadeoutClass : string  , 
    ){
        super(model,scrollService,step,timeout)
    }
    override bootstrap(): void {
        super.bootstrap();
        this.hidden();
    }
    hidden(): void {
        this.model.style.opacity = "0";
    }
    hasFadeinClass():boolean {
        return this.model.classList.contains(this.fadeinClass);
    }
    addFadeinClass(): void {
        this.model.classList.add(this.fadeinClass);
    }
    removeFadeinClass(): void {
        this.model.classList.remove(this.fadeinClass);
    }
    fadein():void {
        this.removeFadeoutClass();
        this.addFadeinClass();
    }

    hasFadeoutClass(): boolean {
        return this.model.classList.contains(this.fadeoutClass);
    }
    addFadeoutClass():void {
        this.model.classList.add(this.fadeoutClass);
    }
    removeFadeoutClass():void {
        this.model.classList.remove(this.fadeoutClass);
    }
    fadeout(): void {
        this.removeFadeinClass();
        this.addFadeoutClass();
    }

    shouldFadein(): boolean {
        return this.scrollService.current() >= this.fadeinPosition;
    }
}
export default TravelToHome;