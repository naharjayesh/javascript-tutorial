// Student object
const students = [
    { name: "Ash", branch: "Science" },
    { name: "Brock", branch: "Humanities" },
];

function enrollStudents(student, callback) {
    setTimeout(() => {
        students.push(student);
        console.log(`${student.name} enrolled`);
        callback();
        console.log(`Callback initiated`);
    }, 5000);
}

function fetchStudents() {
    setTimeout(() => {
        let str = ``;
        students.forEach(function (student) {
            str += `<tr >
            <td>${student.name}</td>
            <td>${student.branch}</td>
            </tr>`;
        });
        let list = document.getElementById("studentList");
        list.innerHTML = str;
    }, 1000);
}

let newStudent = { name: "Gwen", branch: "Commerce" };
enrollStudents(newStudent, fetchStudents);
