//creating class
class Student {
    constructor(id, name, division, age, gender, location) {
        this.id = id,
            this.name = name,
            this.division = division,
            this.age = age,
            this.gender = gender,
            this.location = location
    }

}

//create empty array
var students = [];

//function to add student
function addStudent() {
    //let tempId = prompt("Enter id: ")
    let tempName = prompt("Enter name: ");
    tempName = tempName.trim().charAt(0).toUpperCase() + tempName.slice(1).toLowerCase();
    tempName = tempName.replace(" ", "");
    let tempDiv = prompt("Enter Division: ");
    tempDiv = tempDiv.replace(" ", "");
    let tempAge = prompt("Enter Age: ");
    let tempGender = prompt("Enter Gender");
    let tempLocation = prompt("Enter Location");

    var tempStudent = new Student(students.length + 1, tempName, tempDiv, tempAge, tempGender, tempLocation);
    students.push(tempStudent);
    console.log(tempStudent);
    //document.write(students);
    alert("Student added successfully")
}

//delete student
function deleteStudent(deleteId) {
    var flag = 0;
    students.forEach(element => {
        if (element.id == deleteId) {
            students.pop(element);
            flag = 1;
        }
    });
    if (flag === 0) {
        alert("Student not found!!");
    } else {
        alert("Student deleted");
    }
}

//edit student details
function updateStudent(editId) {
    var flag = 0;
    students.forEach(element => {
        if (element.id == editId) {
            // element.division = prompt("Enter division: ");
            // element.location = prompt("Enter Location: ")
            flag = 1;
            var iter = 0;
            var output = '';
            for (var property in element) {
                output += iter + " : " + property + '\n';
                iter++;
            }

            //accepting property to be updated
            var opt = prompt(output + "\nEnter property to be updated: ");
            // var iterUpdate = 0;
            // for (var property in element) {
            //     //output += iter + " " + property + ': ' + element[property] + '; ';
            //     if (property === opt) {
            //         element.property = prompt("Enter " + property)
            //     }
            //     iterUpdate++;
            // }


            //switch for updation

            switch (opt) {
                case "1":
                    element.name = prompt("Enter name: ");
                    break;
                case "2":
                    element.division = prompt("Enter division: ");
                    break;
                case "3":
                    element.age = prompt("Enter age: ");
                    break;
                case "4":
                    element.gender = prompt("Enter gender: ");
                    break;
                case "5":
                    element.location = prompt("Enter location: ");
                    break;
                default:
                    alert("Value cannot be updated or invalid item");
            }
        }
    });
    if (flag === 0) {
        alert("Student not found!!");
    } else {
        alert("Data updated successfully!");
    }
}

//menu 
var opt = 1;
while (opt != 5) {
    var opt = prompt("Menu\n1.Add new Student\n2.Delete Student\n3.View all students\n4.Edit details\n5.Exit")
    switch (opt) {
        case "1":
            addStudent();
            break;
        case "2":
            var deleteId = prompt("Enter id to be deleted: ")
            deleteStudent(deleteId);
            break;
        case "3":
            students.forEach(element => {
                var output = '';
                for (var property in element) {
                    output += property + ': ' + element[property] + '; ';
                }
                alert(output);
                if (students.length === 0) {
                    alert("Empty List");
                }
                //document.writeln("Id: " + element.id + " Name: " + element.name + " Age: " + element.age + " Division: " + element.division);
                //prompt("Id: " + element.id + " Name: " + element.name + " Age: " + element.age + " Division: " + element.division);
            });
            break;
        case "4":
            var editId = prompt("Enter id of student");
            updateStudent(editId);
            break;
        case "5":
            break;
    }
}