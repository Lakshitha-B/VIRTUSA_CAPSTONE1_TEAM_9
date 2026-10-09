class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails() {
        console.log("\nStudent Details:");
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

let name = prompt("Enter student name:");
let age = prompt("Enter age:");
let course = prompt("Enter course:");

const student = new Student(name, age, course);

student.displayDetails();
