const person = {
    firstName: 'Jayesh',
    lastName: 'Nahar',
    set fullName(value){
        if (typeof value!== 'string' )
            throw new Error('Please enter a valid string');

        const parts = value.split(' ');
        if (parts.length!= 2)
            throw new Error('Please enter a first and last name');

        if (parts[0].length<1)
            throw new Error('Enter a valid first name');

        if (parts[1].length<1)
            throw new Error('Enter a valid last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = 'Mosh Hamedani';
}

catch (e){
    alert(e)
}

console.log(person);