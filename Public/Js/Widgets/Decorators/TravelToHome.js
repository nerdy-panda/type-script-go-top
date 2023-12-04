import { default as BaseTravelToHome } from "../TravelToHome.js";
class TravelToHome extends BaseTravelToHome {
    constructor(model, scrollService, fadeinPosition, step, timeout, fadeinClass, fadeoutClass) {
        super(model, scrollService, step, timeout);
        this.fadeinPosition = fadeinPosition;
        this.fadeinClass = fadeinClass;
        this.fadeoutClass = fadeoutClass;
    }
    bootstrap() {
        super.bootstrap();
        this.hidden();
    }
    hidden() {
        this.model.style.opacity = "0";
    }
    hasFadeinClass() {
        return this.model.classList.contains(this.fadeinClass);
    }
    addFadeinClass() {
        this.model.classList.add(this.fadeinClass);
    }
    removeFadeinClass() {
        this.model.classList.remove(this.fadeinClass);
    }
    fadein() {
        this.removeFadeoutClass();
        this.addFadeinClass();
    }
    hasFadeoutClass() {
        return this.model.classList.contains(this.fadeoutClass);
    }
    addFadeoutClass() {
        this.model.classList.add(this.fadeoutClass);
    }
    removeFadeoutClass() {
        this.model.classList.remove(this.fadeoutClass);
    }
    fadeout() {
        this.removeFadeinClass();
        this.addFadeoutClass();
    }
    shouldFadein() {
        return this.scrollService.current() >= this.fadeinPosition;
    }
}
export default TravelToHome;
//# sourceMappingURL=TravelToHome.js.map