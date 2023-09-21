import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";

class Rocket {
  name: string;
  totalCapacity: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacity: number) {
    this.name = name;
    this.totalCapacity = totalCapacity;
  }

  public addCargo(cargo:Cargo):boolean {
    if (this.canAdd(cargo.massKg)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }
  public addAstronaut(astr:Astronaut):boolean {
    if (this.canAdd(astr.massKg)) {
      this.astronauts.push(astr);
      return true;
    } else {
      return false;
    }

  }
  public sumMass(Payload): number {
    let currentWeight = 0;
    Payload.forEach((element) => {
      currentWeight += element.massKg;
    });
    return currentWeight;
  }
  public currentMass(): number {
    let astrMass = this.sumMass(this.astronauts);
    let carMass = this.sumMass(this.cargoItems);
    return astrMass + carMass;
  }

  public canAdd(weight: number): boolean {
    let curWeight = this.currentMass();
    if (curWeight + weight <= this.totalCapacity) {
      return true;
    } else {
      return false;
    }
  }
}

export { Rocket };
