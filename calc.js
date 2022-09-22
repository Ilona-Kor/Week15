const aInput = document.querySelector ('#a');
const bInput = document.querySelector ('#b');
const buttonDivide = document.querySelector ('#button-divide');
const buttonMultiply = document.querySelector ('#button-multiply');
const buttonMinus = document.querySelector ('#button-minus');
const buttonPlus = document.querySelector ('#button-plus');
const result = document.querySelector ('#result');

const divide = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
        
    if (b == 0) 
        alert ('На ноль делить нельзя!');
    
    result.innerHTML = a / b;
    }
buttonDivide.addEventListener('click', divide);

const multiply = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
    
    result.innerHTML = a * b;
}
buttonMultiply.addEventListener('click', multiply);

const minus = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
    
    result.innerHTML = a - b;
}
buttonMinus.addEventListener('click', minus);

const sum = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
    
    result.innerHTML = a + b;
}
buttonPlus.addEventListener('click', sum);