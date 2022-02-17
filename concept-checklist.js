//1. write 3 variables (number, string, boolean);
// answer:
//number var
var number = 89;
console.log('number', number);
//string var
var string = 'Mahmodul';
console.log('string', string);
//boolean var
var name = true;
console.log('boolean', name);

//2. 2 variables using (let, const)
let i = 0;
const animal = 'cow';

//3. Simple Math Operation (+, -, *, /, %)
const mobilePrice = 14000;
const mobileQuantity = 2;
const laptopPrice = 23000;
const myBudget = 100000;
//multiply
const totalMobilePrice = mobilePrice * mobileQuantity;
console.log(totalMobilePrice);
//sum
const totalCost = totalMobilePrice + laptopPrice;
console.log('totalCost', totalCost);
//minus
const moneyHave = myBudget - totalCost;
console.log('moneyHave', moneyHave);
//divide
const canIBuyMobile = moneyHave / mobilePrice;
console.log('canIBuyMobile with my last money', canIBuyMobile);
//modulus
const ifIBuyJustMobileRemaining = myBudget % mobilePrice;
console.log('ifIBuyJustMobile then the rest is:', ifIBuyJustMobileRemaining);

//4. Comparison(==,<,>,<=,&&,||)
const number1 = 20;
const number2 = 34;
const number3 = 49;
const number4 = 20;
const number5 = 84;
const number6 = 3443;

// ==
if (number1 == number4) {
    console.log(true);
}
else {
    console.log(false);
}
// <
if (number2 < number1) {
    console.log(true);
}
else {
    console.log(false);
}
// >
if (number2 > number1) {
    console.log(true);
}
else {
    console.log(false)
}
// <=
if (number3 <= number5) {
    console.log(true);
}
else {
    console.log(false)
}
//&&
if (number1 && number4) {
    console.log('&&', true)
}
else {
    console.log(false)
}
//||
if ((number3 <= number5) || (number1 && number4)) {
    console.log(true)
}
else {
    console.log(false)
}
//!=
if (number1 != number4) {
    console.log(true)
}
else {
    console.log(false)
}

//5. Two conditions. case-1: fulfill both conditions. case-2: fulfill atleast one condition
//already answered
//6. if-else
//already answered
//7. While loop to display 7 to 19 all numbers. Only display odd numbers including 7 to 19;
i = 7;
while (i <= 19) {
    console.log('odd numbers', i)
    i = i + 2;
}
//8. declare an array. number of elements. Update or change 4th position element. add or remove elements. Check whether specific value exists in the array
const countryNames = ['Bangladesh', 'Germany', 'Finland', 'Irland', 'Japan', 'South Korea', 'Australia', 'USA', 'Uk', 'India'];
console.log(countryNames);
countryNames.push('Singapur');
console.log('push', countryNames);
countryNames.pop();
console.log('pop', countryNames);
console.log('In 4th :', countryNames[4]);
countryNames[4] = ('china')
console.log('After update 4th position', countryNames)
//9. Use any for loop to display every elements of an array
const phoneCompanies = ['Iphone', 'Google Pixel', 'Samsung', 'Oppo', 'Oneplus', 'Tecno', 'Xiomi', ' Realme']
for (let i = 0; i < phoneCompanies.length; i++) {
    const element = phoneCompanies[i];
    console.log(element);
}
//10. You have an array of numbers. Display only the numbers bigger then 80;
//11. write a fucntion that takes three numbers and return multiplication of the three numbers;
function multiplyWith3Numbers(one, two, three) {
    const totalMultiply = one * two * three;
    return totalMultiply;
}
const getNumberForMultiply = multiplyWith3Numbers(5, 5, 5)
console.log('multiply result is :', getNumberForMultiply);

//12. Declare an object and change any property of that object
var phone = {
    brand: 'samsung',
    camera: 108,
    display: 'super amulad',
    bettery: '5000 mah',
    model: 'samsung galaxy s22 plus',
    price: 82000,
}
console.log(phone);
console.log('phone model name is:', phone.model);
phone.price = 76000;
console.log(phone);
phone.bettery = '4500 mah';
console.log(phone);




