import {default as TravelToHomeContract} from "../../../../Contracts/Widgets/Decorators/TravelToHome.js";
import { default as Widget } from "../../../../Widgets/Decorators/TravelToHome.js";
import {default as ScrollContract } from "../../../../Contracts/Service/Scroll.js";
import Scroll from "../../../Singleton/Scroll.js";
import { FADE_IN_CLASS, FADE_OUT_CLASS, TRAVEL_STEP, TRAVEL_TIMEOUT } from "../../../../Configs/Widgets/TravelToHome.js";

class TravelToHome {
    public static instance(model : HTMLElement , fadeInPosition : number ):TravelToHomeContract {
        const scrollService : ScrollContract = Scroll.getInstance();
        return new Widget(
            model,scrollService,fadeInPosition,TRAVEL_STEP,
            TRAVEL_TIMEOUT,FADE_IN_CLASS,FADE_OUT_CLASS
        );
    }
}
export default TravelToHome;