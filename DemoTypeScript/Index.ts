//importing class files
import { Rocket } from "./Rocket.js";
import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";


let rocketName:string = prompt("Enter rocket name");
let maxWeight:string = prompt("Enter max capacity");

var maxCapacity = parseInt(maxWeight)

//create rocket object
let rocketObj = new Rocket(rocketName,maxCapacity);

//create cargo object

let carWt:number = parseInt(prompt("Enter cargo weight"))
let carName:string = prompt("Enter material name")
let cargo = new Cargo(carWt,carName);

//checking and adding cargo
if(rocketObj.addCargo(cargo)){
    console.log(cargo.material + " added");
    alert(cargo.material + " added")
}
else{
    console.log("Cargo cannot be added");
    alert("Cargo cannot be added")

}

//astronaut object creation

let astrName:string = prompt("Enter astronaut name: ")
let astrWt:number = parseInt(prompt("Enter weight: "))
let astr = new Astronaut(astrWt,astrName);


//checking and adding astronaut

if(rocketObj.addAstronaut(astr)){
    console.log(astr.name + " added");
    alert(astr.name + " added");
}
else{
    console.log("Astronaut cannot be added");
    alert("Astronaut cannot be added");
}

