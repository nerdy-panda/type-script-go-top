import FadeAnimation from "../Contracts/Service/FadeAnimation.js";
import { AnimationInfo } from "../Types/Utilities.js";
import { getComputedOpacity } from "../Helpers/Utility.js";

class Fadein implements FadeAnimation {
    execute(element: HTMLElement, info: AnimationInfo): void {
        this.fadeinProxy(this.fadeinHandler,element,info);
        this.fadeinProxy(this.fadeinDispatcher,element,info);
    }
    protected fadeinProxy(execution:Function,element:HTMLElement ,animationInfo:AnimationInfo):void {
        const opacity :number = getComputedOpacity(element);
        if(opacity==1)
            return;
        execution(element,animationInfo);
    }
    protected fadeinDispatcher=(element : HTMLElement , animationInfo : AnimationInfo):void =>{
        window.setTimeout(this.fadeinHandler,animationInfo.timeout , element , animationInfo)
    }
    protected fadeinHandler = (element : HTMLElement , animationInfo : AnimationInfo):void => {
        const opacity : number = getComputedOpacity(element);
        if(opacity==1)
            return;
        const nextOpacity = opacity + animationInfo.step ;
        if(nextOpacity>=1) {
            element.style.opacity = "1";
            return;
        }
        element.style.opacity = nextOpacity.toString();
        this.fadeinDispatcher(element, animationInfo);
    }
}
export default Fadein;