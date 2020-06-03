export const sayHello = function(){
    console.log('hello')
}

export const changeFooterByClassName = function(className){
    const domElement = document.querySelector(`.${className}`);
    console.log(domElement);
    domElement.innerHTML = 'Footer Changed'
}