import TravelToHome from "../../Services/Factories/Widgets/Decorator/TravelToHome.js";
class Program {
    constructor(scroll, math, fadeout, fadein) {
        this.scroll = scroll;
        this.math = math;
        this.fadeout = fadeout;
        this.fadein = fadein;
        this.travelToHomeWidget = null;
        this.scrollListener = () => {
            var _a, _b, _c, _d, _e, _f;
            const shouldBeShow = (_a = this.travelToHomeWidget) === null || _a === void 0 ? void 0 : _a.shouldFadein();
            const hasFadeinClass = (_b = this.travelToHomeWidget) === null || _b === void 0 ? void 0 : _b.hasFadeinClass();
            const hasFadeoutClass = (_c = this.travelToHomeWidget) === null || _c === void 0 ? void 0 : _c.hasFadeoutClass();
            if (shouldBeShow && !hasFadeoutClass && !hasFadeinClass)
                (_d = this.travelToHomeWidget) === null || _d === void 0 ? void 0 : _d.addFadeinClass();
            else if (shouldBeShow && hasFadeoutClass && !hasFadeinClass)
                (_e = this.travelToHomeWidget) === null || _e === void 0 ? void 0 : _e.fadein();
            else if (!shouldBeShow && hasFadeinClass && !hasFadeoutClass)
                (_f = this.travelToHomeWidget) === null || _f === void 0 ? void 0 : _f.fadeout();
        };
    }
    main() {
        this.boot();
        const travelToHomeModel = window.document.body.querySelector('#travel-to-start');
        const widgetShowPosition = this.math.percentOf(5, this.scroll.max());
        this.travelToHomeWidget = TravelToHome.instance(travelToHomeModel, widgetShowPosition);
        this.travelToHomeWidget.bootstrap();
    }
    boot() {
        window.addEventListener('scroll', this.scrollListener);
    }
}
export default Program;
//# sourceMappingURL=Program.js.map