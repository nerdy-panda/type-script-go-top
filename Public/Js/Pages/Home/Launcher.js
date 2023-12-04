import Program from "./Program.js";
import Scroll from "../../Services/Singleton/Scroll.js";
import Fadeout from "../../Services/Fadeout.js";
import Fadein from "../../Services/Fadein.js";
import Math from "../../Services/Math.js";
const scrollService = Scroll.getInstance();
const math = new Math();
const fadeout = new Fadeout();
const fadein = new Fadein();
const application = new Program(scrollService, math, fadeout, fadein);
application.main();
//# sourceMappingURL=Launcher.js.map