import { default as Service } from "../Scroll.js";
class Scroll {
    static getInstance() {
        if (this.instance == null)
            return this.instance = new Service;
        return this.instance;
    }
}
Scroll.instance = null;
export default Scroll;
//# sourceMappingURL=Scroll.js.map