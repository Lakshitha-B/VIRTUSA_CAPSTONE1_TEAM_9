class Employee {
    constructor(name) {
        this.name = name;

        if (this.constructor === Employee) {
            throw new Error("Cannot create object of Abstract Class");
        }
    }

    calculateSalary() {
        throw new Error("Abstract method must be implemented");
    }

    displayName() {
        console.log("Employee Name: " + this.name);
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }

    calculateSalary() {
        return this.salary;
    }
}

let employee = new Developer("Arun", 50000);

employee.displayName();

console.log("Salary: " + employee.calculateSalary());