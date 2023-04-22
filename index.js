// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id','victory');

const text = document.createTextNode('Rıfat is the champion');
newHeader.appendChild(text);
