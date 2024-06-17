console.group('1 task')
/**
 * 
 * @param {number} number default value 2024
 * @returns {boolean}
 */

function yearMultipleHundred(number) {
    return number%100===0 ? true:false;
}

console.log(yearMultipleHundred());
console.groupEnd();

console.group('2 task')
const oneDegreeCelsius = 33.8;
const coefCElsiusFahrenheit=9/5;
/**
 * 
 * @param {number} number 
 * @returns {number}
 */
function celsiusFahrenheit(number) {
    let result = number*coefCElsiusFahrenheit+oneDegreeCelsius;
    return result
}
console.log(celsiusFahrenheit(0));
console.groupEnd();

console.group('3 task')
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {boolean}
 */
function numberMultiple(number1,number2) {
    return number1%number2===0;
}

console.log(numberMultiple(4,2));
console.groupEnd();

console.group('4 task')




console.groupEnd();

