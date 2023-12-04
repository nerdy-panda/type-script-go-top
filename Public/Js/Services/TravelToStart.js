class TravelToStart {
    constructor(model, step = 5, timeout = 12) {
        this.model = model;
        this.step = step;
        this.timeout = timeout;
        this.clickListener = (event) => {
            this.dispatchTravel();
        };
    }
    bootstrap() {
        this.registerClickEvent();
    }
    registerClickEvent() {
        this.model.addEventListener('click', this.clickListener);
    }
    dispatchTravel() {
    }
}
export default TravelToStart;
//# sourceMappingURL=TravelToStart.js.map