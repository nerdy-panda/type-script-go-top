import { getComputedOpacity } from "../Helpers/Utility.js";
class Fadein {
    constructor() {
        this.fadeinDispatcher = (element, animationInfo) => {
            window.setTimeout(this.fadeinHandler, animationInfo.timeout, element, animationInfo);
        };
        this.fadeinHandler = (element, animationInfo) => {
            const opacity = getComputedOpacity(element);
            if (opacity == 1)
                return;
            const nextOpacity = opacity + animationInfo.step;
            if (nextOpacity >= 1) {
                element.style.opacity = "1";
                return;
            }
            element.style.opacity = nextOpacity.toString();
            this.fadeinDispatcher(element, animationInfo);
        };
    }
    execute(element, info) {
        this.fadeinProxy(this.fadeinHandler, element, info);
        this.fadeinProxy(this.fadeinDispatcher, element, info);
    }
    fadeinProxy(execution, element, animationInfo) {
        const opacity = getComputedOpacity(element);
        if (opacity == 1)
            return;
        execution(element, animationInfo);
    }
}
export default Fadein;
//# sourceMappingURL=Fadein.js.map