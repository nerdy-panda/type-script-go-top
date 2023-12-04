class Scroll {
    constructor() {
        this.travelToHomeHandler = (step, timeout) => {
            const current = window.scrollY;
            if (current == 0)
                return;
            const nextPosition = current - step;
            window.scrollTo(0, nextPosition);
            if (nextPosition <= 0)
                return;
            this.smoothToHome(step, timeout);
        };
    }
    max() {
        return window.document.body.scrollHeight - window.innerHeight;
    }
    current() {
        return window.scrollY;
    }
    smoothToHome(step, timeout) {
        window.setTimeout(this.travelToHomeHandler, timeout, step, timeout);
    }
}
export default Scroll;
//# sourceMappingURL=Scroll.js.map