//qn1
var digit = 12345;
var arrDigit = [];
arrDigit = String(digit).split('').map((digit) => {
    return Number(digit);
});
console.log(arrDigit);
//qn2
var strInp = '🥲Hello🤣🔥🥲';
//to remove out of ascii range characters
strInp = strInp.replace(/[^\x20-\x7E]/g, '');
console.log(strInp);
//qn3
//checker function for even numbers
const isEven = (inputValue) => inputValue % 2 === 0;
const array1 = [12, 30, 32, 24, 10, 130];
console.log(array1.every(isEven));
//qn4
var userName = "abhijith";
var resultName = "";
var userNameArray = [];
userNameArray = userName.split('');
userNameArray[0] = userNameArray[0].toUpperCase();
userNameArray.forEach(element => {
    resultName += element;
});
console.log(resultName);
//qn9
const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
    arr.length;
console.log(averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
//qn10
const reset = '\x1b[0m'; // Reset text formatting
const red = '\x1b[31m'; // Red text
const green = '\x1b[32m'; // Green text
console.log(`${red}This text is red.${reset}`);
console.log(`${green}This text is green.${reset}`);
