import Program from "./Program.js";
import { default as ScrollContract } from "../../Contracts/Service/Scroll.js";
import Scroll from "../../Services/Singleton/Scroll.js";
import Fadeout from "../../Services/Fadeout.js";
import Fadein from "../../Services/Fadein.js";
import {default as MathContract } from "../../Contracts/Service/Math.js";
import Math from "../../Services/Math.js";

const scrollService : ScrollContract = Scroll.getInstance() ;
const math : MathContract  = new Math();
const fadeout :Fadeout = new Fadeout(); 
const fadein : Fadein = new Fadein();

const application:Program = new Program(scrollService , math ,fadeout,fadein);
application.main();