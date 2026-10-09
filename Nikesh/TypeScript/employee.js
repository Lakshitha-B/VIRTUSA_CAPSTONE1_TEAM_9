class EmployeeService {
    constructor() {
        this.employees = [];
    }

    // CREATE
    addEmployee(employee) {
        this.employees.push(employee);
        console.log("Employee added successfully");
    }

    // READ
    getEmployees() {
        return this.employees;
    }

    // UPDATE
    updateEmployee(id, name, department, salary) {
        let employee = this.employees.find(emp => emp.id === id);

        if (employee) {
            employee.name = name;
            employee.department = department;
            employee.salary = salary;
            console.log("Employee updated successfully");
        } else {
            console.log("Employee not found");
        }
    }

    // DELETE
    deleteEmployee(id) {
        let index = this.employees.findIndex(emp => emp.id === id);

        if (index !== -1) {
            this.employees.splice(index, 1);
            console.log("Employee deleted successfully");
        } else {
            console.log("Employee not found");
        }
    }
}

// Create service object
let service = new EmployeeService();

// CREATE
service.addEmployee({
    id: 1,
    name: "Arun",
    department: "IT",
    salary: 40000
});

service.addEmployee({
    id: 2,
    name: "Rahul",
    department: "HR",
    salary: 35000
});

// READ
console.log("Employees:");
console.log(service.getEmployees());

// UPDATE
service.updateEmployee(1, "Arun Kumar", "CSE", 50000);

// READ after update
console.log("After Update:");
console.log(service.getEmployees());

// DELETE
service.deleteEmployee(2);

// READ after delete
console.log("After Delete:");
console.log(service.getEmployees());