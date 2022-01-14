//
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", fetchButtonClickHandler);

function fetchButtonClickHandler() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
    xhr.onprogress = function () {
        console.log("Progress");
    };

    xhr.onload = function () {
        // console.log(this.responseText);
    };

    xhr.send();
}

//
let sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", sendButtonClickHandler);

function sendButtonClickHandler() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhr.getResponseHeader("Content-type", "application/json");

    xhr.onprogress = function () {
        console.log("Progress");
    };

    xhr.onload = function () {
        console.log(this.responseText);
    };

    params = { name: "Perry the Platypus", salary: "38743432", age: "43" };
    xhr.send(params);

    if (xhr.send(params)) {
        console.log("sent");
    }
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
    xhr.getResponseHeader("Content-type", "application/json");

    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);

            let list = document.getElementById("employeeList");
            str = "";
            for (key in obj.data) {
                str += `<tr >
                        <td>${obj.data[key].id}</td>
                        <td>${obj.data[key].employee_name}</td>
                        <td>${obj.data[key].employee_salary}</td>
                        <td>${obj.data[key].employee_age}</td>
                        </tr>`;
            }
            list.innerHTML = str;
        }
    };

    xhr.send();
}
