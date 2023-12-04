function getComputedOpacity(element) {
    const opacity = getComputedStyle(element).opacity;
    return parseFloat(opacity);
}
function setZeroOpacity(element) {
    element.style.opacity = "0";
}
export { getComputedOpacity, setZeroOpacity };
//# sourceMappingURL=Utility.js.map