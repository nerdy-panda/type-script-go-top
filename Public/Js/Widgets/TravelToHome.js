import Widget from "../Services/Widget.js";
class TravelToHome extends Widget {
    constructor(model, scrollService, step, timeout) {
        super();
        this.model = model;
        this.scrollService = scrollService;
        this.step = step;
        this.timeout = timeout;
        this.clickHandler = (event) => {
            this.scrollService.smoothToHome(this.step, this.timeout);
        };
    }
    bootstrap() {
        this.model.addEventListener('click', this.clickHandler);
    }
}
export default TravelToHome;
//# sourceMappingURL=TravelToHome.js.map