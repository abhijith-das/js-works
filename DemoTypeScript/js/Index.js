import { Rocket } from "./Rocket.js";
import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
let rocketObj = new Rocket("Racoon", 200);
let cargo = new Cargo(50, "fuel");
if (rocketObj.addCargo(cargo)) {
    console.log(cargo.material + " added");
}
else {
    console.log("Cargo cannot be added");
}
let astr = new Astronaut(120, "Das");
if (rocketObj.addAstronaut(astr)) {
    console.log(astr.name + " added");
}
else {
    console.log("Astronaut cannot be added");
}
