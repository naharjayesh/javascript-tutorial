// Student object
const students = [
    { name: "Ash", branch: "Science" },
    { name: "Brock", branch: "Humanities" },
];

function enrollStudents(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (student.name === "Perry") {
                students.push(student);
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
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
    }, 3000);
}

let newStudent = { name: "Perry", branch: "Commerce" };
enrollStudents(newStudent)
    .then(fetchStudents)
    .catch(function () {
        console.log("Rejected");
    });
