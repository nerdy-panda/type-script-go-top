import {default as BaseTravelToHome} from "../TravelToHome.js";
interface TravelToHome extends BaseTravelToHome {
    fadeinPosition : number ;
    fadeinClass : string ;
    fadeoutClass : string ;

    hidden():void;

    shouldFadein():boolean;
    fadein():void;
    hasFadeinClass():boolean;
    addFadeinClass():void;
    removeFadeinClass():void;

    fadeout():void;
    hasFadeoutClass():boolean;
    addFadeoutClass():void;
    removeFadeoutClass():void;

}
export default TravelToHome;