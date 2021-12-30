import { Subject } from "rxjs";

const bus:Subject<object> = new Subject(); 
const getBus = ():Subject<object>=>{
    return bus;
}

export default getBus;