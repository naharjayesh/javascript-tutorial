// Creating child element


// Giving functioning to add and remove button

let parentElement = document.querySelector('ul.parent');
console.log(parentElement.lastElementChild);

let i = 1;

document.getElementById('add-button').addEventListener(
    'click',function(){
        let childElement = document.createElement('li');
        
        /* let message = document.createTextNode('Message node (visible in Child 1)');
        childElement.append(message); */ 

        let string = 'Child ' + i;
        childElement.innerHTML = string;
        childElement.className = 'createdChild';
        let parentElement = document.querySelector('ul.parent');
        parentElement.appendChild(childElement);
        i++;
    }
);

document.getElementById('remove-button').addEventListener(
    'click',function(){
        let parentElement = document.querySelector('ul.parent');
        parentElement.removeChild(parentElement.lastElementChild);
        i--;
    }
);
