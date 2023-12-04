import { getComputedOpacity } from "../Helpers/Utility.js";
class Fadeout {
    constructor() {
        this.fadeoutHandler = (element, info) => {
            const opacity = getComputedOpacity(element);
            if (opacity == 0)
                return;
            const calculatingOpacity = opacity - info.step;
            if (calculatingOpacity <= 0) {
                element.style.opacity = '0';
                return;
            }
            element.style.opacity = calculatingOpacity.toString();
            this.fadeoutElementDispatcher(element, info);
        };
    }
    execute(element, info) {
        this.fadeoutHandlerProxy(element, info);
        this.fadeoutDispatcherProxy(element, info);
    }
    fadeoutHandlerProxy(element, info) {
        const elementOpacity = getComputedOpacity(element);
        if (elementOpacity == 0)
            return;
        this.fadeoutHandler(element, info);
    }
    fadeoutDispatcherProxy(element, info) {
        const elementOpacity = getComputedOpacity(element);
        if (elementOpacity == 0)
            return;
        this.fadeoutElementDispatcher(element, info);
    }
    fadeoutElementDispatcher(element, info) {
        window.setTimeout(this.fadeoutHandler, info.timeout, element, info);
    }
}
export default Fadeout;
//# sourceMappingURL=Fadeout.js.map