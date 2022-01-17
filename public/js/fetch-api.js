let getData = document.getElementById("getData");
getData.addEventListener("click", () => {
    getDataFunction();
});

let pushData = document.getElementById("pushData");
pushData.addEventListener("click", () => {
    pushDataFunction();
});

function getDataFunction() {
    url = "http://api.github.com/users";
    html = ``;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((fetchedData) => {
            str = "";
            // str += `<p>${fetchedData}</p>`;
            let employeeList = document.getElementById("employeeList");
            for (key in fetchedData) {
                str += `<tr >
                        <td>${fetchedData[key].id}</td>
                        <td>${fetchedData[key].login}</td>
                        <td>${fetchedData[key].node_id}</td>
                        <td>${fetchedData[key].url}</td>
                        </tr>`;
            }
            employeeList.innerHTML = str;
        });
}

function pushDataFunction() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    let data = { name: "AsfdsfdhBrock", salary: "123", age: "23" };
    // let data = {
    //     login: "fdsakjbk@gmail.com",
    //     node_id: "fsdhjkfhsdf",
    //     url: "dshjefn.com",
    // };
    let params = {
        method: "post",
        headers: {
            "Content-type": "application/json",
        },
        body: data,
    };
    fetch(url, params)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // str = "";
            // let id = 0;
            // let employeeList = document.getElementById("employeeList");
            // for (key in data) {
            //     id += 1;
            //     str += `<tr >
            //             <td>${data}</td>
            //             </tr>`;
            // }
            // employeeList.innerHTML = str;
        });
}
