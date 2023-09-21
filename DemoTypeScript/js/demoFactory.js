import { Employee, Customer } from "./demoExportImport.js";
class Factory {
    //input from user
    static getUserInput(choice) {
        //condition check
        if (choice === 1) {
            return new Employee("IT", 1001, "Das", "TSR");
        }
        else {
            return new Customer("VU TV", 405, "Abhi", "ekm");
        }
    }
}
//Entry Point
let enterChoice = Factory.getUserInput(1);
console.log(enterChoice.getDetails());
