interface Scroll {
    smoothToHome(step : number , timeout :number):void ;
    max():number;
    current():number;
}
export default Scroll;
