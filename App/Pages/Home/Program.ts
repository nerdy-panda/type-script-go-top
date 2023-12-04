import Fadeout from "../../Services/Fadeout.js";
import Fadein from "../../Services/Fadein.js";
import Scroll from "../../Contracts/Service/Scroll.js";
import Math from "../../Contracts/Service/Math.js";
import { default as travelToHomeWidgetContract } from "../../Contracts/Widgets/Decorators/TravelToHome.js";
import TravelToHome from "../../Services/Factories/Widgets/Decorator/TravelToHome.js";

class Program {
    protected travelToHomeWidget : travelToHomeWidgetContract | null = null ;
    constructor(
        protected scroll : Scroll , protected math : Math ,
        protected fadeout : Fadeout , protected fadein : Fadein
    ){}
    main():void {
        this.boot();
        const travelToHomeModel : HTMLElement = <HTMLElement> window.document.body.querySelector('#travel-to-start');
        const widgetShowPosition : number = this.math.percentOf(5,this.scroll.max());
        this.travelToHomeWidget = TravelToHome.instance( travelToHomeModel , widgetShowPosition );
        this.travelToHomeWidget.bootstrap();
    }

    protected boot():void {
        window.addEventListener('scroll',this.scrollListener);
    }
    scrollListener = ():void => {
        const shouldBeShow : boolean = <boolean> this.travelToHomeWidget?.shouldFadein();
        const hasFadeinClass : boolean =  <boolean> this.travelToHomeWidget?.hasFadeinClass();
        const hasFadeoutClass :boolean =  <boolean> this.travelToHomeWidget?.hasFadeoutClass();

        if(shouldBeShow && !hasFadeoutClass && !hasFadeinClass)
            this.travelToHomeWidget?.addFadeinClass();
        else if(shouldBeShow && hasFadeoutClass && !hasFadeinClass)
            this.travelToHomeWidget?.fadein();
        else if(!shouldBeShow && hasFadeinClass && !hasFadeoutClass )
            this.travelToHomeWidget?.fadeout();
    }

}
export default Program;