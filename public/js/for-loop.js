// For loop

let string = "";

for(let i=1; i<5; i++){
    for(let j=5; j>i; j--){
        string += '*';
    }
    string += '\n';
}

console.log(string);
