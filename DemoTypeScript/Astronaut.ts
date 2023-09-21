import { Payload } from "./Payload.js";

class Astronaut implements Payload{
    massKg: number;
    name:string;
    constructor(massKg,name){
        this.massKg = massKg;
        this.name=name;
    }
}
export{Astronaut}