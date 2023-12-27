import {mainChange} from "./mainChange";
import iconClick from "./iconClick";

const main = () =>{
    mainChange()
    window.setTimeout(iconClick(), 100);
}


export default main;

