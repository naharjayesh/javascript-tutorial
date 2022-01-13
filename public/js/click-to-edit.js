let divElement = document.querySelector("div");

let inputElement = document.createElement("input");
inputElement.className = "inputElement";
inputElement.placeholder = "Type here";

divElement.addEventListener("click", function () {
    document.body.append(inputElement);
    divElement.style.display = "none";
});

inputElement.addEventListener("blur", function () {
    if (inputElement.value.length > 0) {
        // console.log(inputElement.value.length);
        divElement.style.display = "block";
        localStorage.setItem(
            Math.random().toString(36).substr(2, 5),
            inputElement.value
        );
        inputElement.value = "";
        document.body.removeChild(inputElement);
        return;
    }
});

// localStorage.clear();
