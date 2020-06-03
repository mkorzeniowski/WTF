import {sayHello, changeFooterByClassName} from '/function.js';

sayHello();

changeFooterByClassName('footer')

function calculate(myNumber) {
  return myNumber * 7;
}


function scale(num1, num2) {
  const result = num1 * num2;
  console.log(result);
  return result;
}

console.log('siema')

let scaleResult = scale(2, 6);
// const sayHello = (content) => console.log(`hello ${content}`);


// const myElement = document.querySelector('.main');
// console.log(myElement)

// // myElement.addEventListener('click', (event) => console.log(event));

// myElement.addEventListener('click', function(event){
//     console.log(this);
// });




const button = document.querySelector('.button-js');
button.addEventListener('click', crazyFunction);

function crazyFunction(e){
  console.log(e);
}