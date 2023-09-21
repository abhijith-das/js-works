class Rocket {
    constructor(name, totalCapacity) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacity = totalCapacity;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo.massKg)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astr) {
        if (this.canAdd(astr.massKg)) {
            this.astronauts.push(astr);
            return true;
        }
        else {
            return false;
        }
    }
    sumMass(Payload) {
        let currentWeight = 0;
        Payload.forEach((element) => {
            currentWeight += element.massKg;
        });
        return currentWeight;
    }
    currentMass() {
        let astrMass = this.sumMass(this.astronauts);
        let carMass = this.sumMass(this.cargoItems);
        return astrMass + carMass;
    }
    canAdd(weight) {
        let curWeight = this.currentMass();
        if (curWeight + weight <= this.totalCapacity) {
            return true;
        }
        else {
            return false;
        }
    }
}
export { Rocket };
