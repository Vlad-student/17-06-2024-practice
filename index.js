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
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
function calculateareaTriangle(number1,number2) {
    return number1*number2/2;
}
console.log(calculateareaTriangle(7.5,8));
console.groupEnd();

console.group('5 task')
/**
 * 
 * @param {number} cost 
 * @param {number'} percent default =20
 * @returns {number}
 */
function costProductPlusPercent(cost,percent) {
    let PDV = cost*percent/100;
    let totalCost = cost+PDV;
    return totalCost
}
console.log(costProductPlusPercent(12,10));
console.groupEnd();

console.group('6 task')
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {boolean}
 */
function isNumbersDifferensEven(number1,number2) {
    return (number1-number2)%2===0;
}
console.log(isNumbersDifferensEven(4,2));
console.groupEnd();

console.group('7 task')
const inch=2.54;
/**
 * 
 * @param {number} number 
 * @returns {number}
 */
function inchToСentimeter(number) {
    let result = number*inch;
    return result
}
console.log(inchToСentimeter(2));
console.groupEnd();
