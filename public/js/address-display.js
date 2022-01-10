let address = {
    houseNumber : 124,
    street : 'Richard Street',
    city : 'New York'
}

function displayAddress(address){
    for (key in address){
        console.log(key, ':', address[key]);
    }
}

displayAddress(address);