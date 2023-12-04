import { default as Contract } from "../Contracts/Service/Scroll.js";
class Scroll implements Contract {
    max(): number {
        return window.document.body.scrollHeight - window.innerHeight;
    }
    current(): number {
        return window.scrollY;
    }
    smoothToHome(step: number, timeout: number): void {
        window.setTimeout(this.travelToHomeHandler,timeout,step,timeout);
    }
    protected travelToHomeHandler = (step: number, timeout: number):void => {
        const current : number = window.scrollY ;
        if(current==0)
            return ;
        const nextPosition = current - step;
        window.scrollTo(0,nextPosition);
        if(nextPosition<=0)
            return;
        this.smoothToHome(step , timeout);
    }
}
export default Scroll;