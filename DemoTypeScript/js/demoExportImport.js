//Person
class Person {
    constructor(no, name, address) {
        this.no = no;
        this.name = name;
        this.address = address;
    }
    getDetails() {
        return this.no + " " + this.name + " " + this.address;
    }
}
//Employee
class Employee extends Person {
    constructor(dept, no, name, address) {
        super(no, name, address);
        this.dept = dept;
        this.no = no;
        this.name = name;
        this.address = address;
    }
    getDetails() {
        return "Employee Details " + super.getDetails() + " " + this.dept;
    }
}
//Customer
class Customer extends Person {
    constructor(orderDetails, no, name, address) {
        super(no, name, address);
        this.orderDetails = orderDetails;
        this.no = no;
        this.name = name;
        this.address = address;
    }
    getDetails() {
        return "Customer Details " + super.getDetails() + " " + this.orderDetails;
    }
}
export { Person, Employee, Customer };
