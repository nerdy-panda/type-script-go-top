import { default as Widget } from "../../../../Widgets/Decorators/TravelToHome.js";
import Scroll from "../../../Singleton/Scroll.js";
import { FADE_IN_CLASS, FADE_OUT_CLASS, TRAVEL_STEP, TRAVEL_TIMEOUT } from "../../../../Configs/Widgets/TravelToHome.js";
class TravelToHome {
    static instance(model, fadeInPosition) {
        const scrollService = Scroll.getInstance();
        return new Widget(model, scrollService, fadeInPosition, TRAVEL_STEP, TRAVEL_TIMEOUT, FADE_IN_CLASS, FADE_OUT_CLASS);
    }
}
export default TravelToHome;
//# sourceMappingURL=TravelToHome.js.map