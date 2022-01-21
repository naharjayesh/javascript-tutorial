myArray = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Ash"];

function iteratorFunction(array) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < array.length) {
                return {
                    value: array[nextIndex++],
                    done: false,
                };
            } else {
                return {
                    done: true,
                };
            }
        },
    };
}

let iterator = iteratorFunction(myArray);

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

let nextValue = 0;

while (true) {
    nextValue = iterator.next().value;
    if (nextValue != undefined) {
        console.log(nextValue);
    } else {
        break;
    }
}
