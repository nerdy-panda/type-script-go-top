import { AnimationInfo } from "../../Types/Utilities.js";

interface FadeAnimation {
    execute(element : HTMLElement , info : AnimationInfo ):void;
}
export default FadeAnimation;