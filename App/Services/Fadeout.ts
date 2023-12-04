import FadeAnimation from "../Contracts/Service/FadeAnimation.js";
import { AnimationInfo } from "../Types/Utilities.js";
import { getComputedOpacity } from "../Helpers/Utility.js";
class Fadeout implements FadeAnimation {
    execute(element: HTMLElement, info: AnimationInfo): void {
        this.fadeoutHandlerProxy(element,info);
        this.fadeoutDispatcherProxy(element , info );
    }
    protected fadeoutHandlerProxy(element : HTMLElement , info: AnimationInfo):void {
        const elementOpacity :number  = getComputedOpacity(element);
        if(elementOpacity==0)
            return; 

        this.fadeoutHandler(element,info);
    }
    protected fadeoutDispatcherProxy(element : HTMLElement , info: AnimationInfo){
        const elementOpacity  = getComputedOpacity(element);
        if(elementOpacity==0)
            return; 

        this.fadeoutElementDispatcher(element,info);
    }
    protected fadeoutElementDispatcher(element : HTMLElement  ,info: AnimationInfo){
        window.setTimeout(this.fadeoutHandler , info.timeout , element ,info );
    }
    protected fadeoutHandler = (element : HTMLElement , info: AnimationInfo):void => {
        const opacity = getComputedOpacity(element);
        if(opacity==0)
            return;
        const calculatingOpacity :number = opacity - info.step ;
        if(calculatingOpacity<=0){
            element.style.opacity = '0';
            return;
        }
        element.style.opacity = calculatingOpacity.toString();
        this.fadeoutElementDispatcher(element,info);
    }
}
export default Fadeout ;
