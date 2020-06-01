console.log("hello");

let hello_message = "hello siemanko";
const name = "Maciek";
const age = 32;

console.log(`Chciałbym wam powiedzieć ${hello_message}`);

function calculate(myNumber) {
  return myNumber * 7;
}

const myResult = calculate(age);
console.log(myResult);

function scale(num1, num2) {
  const result = num1 * num2;
  console.log(result);
  return result;
}



let scaleResult = scale(2, 6);
console.log(typeof scaleResult);

const sayHello = (content) => console.log(`hello ${content}`);

sayHello('Maciek');

// const myElement = document.querySelector('.main');
// console.log(myElement)

// // myElement.addEventListener('click', (event) => console.log(event));

// myElement.addEventListener('click', function(event){
//     console.log(this);
// });

console.table(console);

console.time();


const button = document.querySelector('.button-js');
button.addEventListener('click', crazyFunction);

function crazyFunction(e){
  console.log(e);
}