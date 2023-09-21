//IPerson
interface IPerson{
    getDetails():string;

}

//Person
class Person implements IPerson {

    constructor( public no:number,
        public name:string,
        public address:string){

        }
    getDetails(): string {
        return this.no + " " +this.name+" "+this.address;
    }
    
}

//Employee
class Employee extends Person{
    constructor(
        public dept: string,
        public no:number,
        public name:string,
        public address:string
    ){
        super(no,name,address);
    }

    getDetails(): string {
        return "Employee Details " + super.getDetails()+ " "+ this.dept;
    }
}

//Customer
class Customer extends Person{
    constructor(
        public orderDetails: string,
        public no:number,
        public name:string,
        public address:string
    ){
        super(no,name,address);
    }

    getDetails(): string {
        return "Customer Details " + super.getDetails()+ " "+ this.orderDetails;
    }
}

export{IPerson,Person,Employee,Customer}