function getComputedOpacity(element:HTMLElement):number {
    const opacity:string = getComputedStyle(element).opacity;
    return parseFloat(opacity);
}
function setZeroOpacity(element:HTMLElement):void {
    element.style.opacity = "0";
}
export {getComputedOpacity , setZeroOpacity};