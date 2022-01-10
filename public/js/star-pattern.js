// Star Pattern

stars(5);

function stars(rows){
    let p='';
    let i;
    let j;
    let k;
    for(i =0; i<rows; i++){
        for(j = 1; j<rows-i; j++){
            p+=' ';
        }
        for(k = 0; k<=i; k++){
            p+='*';
        }
        p+='\n';
    }
    console.log(p);
}

