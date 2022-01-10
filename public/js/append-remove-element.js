let childElement = document.createElement('li');
let childElementSub = document.createElement('a');
let message = document.createTextNode('Message node (visible in Child 1)')
childElement.append(message);

// Creating class & id for child element

childElement.className = 'createdChild';
childElement.id = 'createdChild';
/* childElement.innerText = 'Append message'; */ 

// Creating class & id for child element of child 

childElementSub.className = 'createdChild';
childElementSub.id = 'createdChild';
childElementSub.setAttribute('href','//google.com');
childElementSub.innerHTML = '<br>Appended link';

// Appending sub child & child to respective parent elements

childElement.appendChild(childElementSub);

let parentElement = document.querySelector('ul.parent');
parentElement.appendChild(childElement);

let newChild = document.createElement('li');
newChild.id = 'newChild';
newChild.className = 'newChild';

let tNode = document.createTextNode('Text node for new child');
newChild.append(tNode);

childElement.replaceWith(newChild);

let documentChild = document.getElementById('parent');
documentChild.replaceChild(childElement, document.getElementById('child3')); 
documentChild.removeChild(document.getElementById('child4'))

// Exercise - Create heading inside <a> tag directed to a website

let headingElement = document.createElement('a');
let headingElementSub = document.createElement('h1');
headingElement.style.fontSize= '30px';
headingElement.style.color= 'red';

headingElement.setAttribute('href','//google.com');

headingElementSub.className = 'createdHeading';
headingElementSub.id = 'createdHeading';
headingElementSub.innerHTML = 'Google';

headingElement.appendChild(headingElementSub);

let exerciseElement = document.querySelector('ul.exerciseElement')
exerciseElement.append(headingElement);