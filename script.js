'use strict';
/*
let today = true;
console.log(today);
console.log(typeof today);
const lastName = 'Semenchenko';
console.log(lastName);


///////////////////////////////////
// Basic operators
const now = 2023;
const ageAndriy = now - 1981;
const ageKseniia = now - 1983;
console.log(ageAndriy);
console.log(ageKseniia);
console.log(ageAndriy / 2, 2 ** 3);
// 2 ** 3 = 2 * 2 * 2

const firstName = 'Andriy';
const lastName = 'Semenchenko';
console.log(`${firstName} ${lastName}`);

/////////////////////////////////
// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
console.log(x);

/////////////////////////////////
// Comparison operators
console.log(ageAndriy > ageKseniia);
console.log(ageKseniia >= 18);


///////////////////////////////
// Multiple strings
console.log(
  'String with \n\
multiple \n\
lines'
);

console.log(`And this string
with
multiple lines`);

/////////////////////////////////
// IF ELSE
const age = 15;

if (age >= 18) {
  console.log(`Sara can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



///////////////////////////////////
// Type Conversion and Coersion

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(+inputYear + 18);
console.log(String(23));

// Type coercion
console.log('I am ' + 42 + ' years old'); // string 'I am 42 years old'
console.log('23' - '10' - 3); // number 10
console.log('21' * '2'); // number 42




///////////////////////////////////
// Truthy and Falsy Values
// falsy values: 0, '', undefined, null, NaN, false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('String'));
console.log(Boolean({}));




///////////////////////////////////
// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);



///////////////////////////////////
// SWITCH STATEMENT
const day = 'sunday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to the cooding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend 😌');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to the cooding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend 😌');
} else {
  console.log('Not a valid day');
}


switch (key) {
  case value:
    break;

  default:
    break;
}



///////////////////////////////////
// STATEMENTS AND EXPRESSIONS
// Expressions this is a peace of code that produced a VALUE

// Statement this is a big peace of code that NOT produced a value on itself
// In template literal `` we can place only EXPRESSIONS but not statements

console.log(`I'm a ${2023 - 1981} years old.`);
 


///////////////////////////////////
// TERNARY OPERATOR
let age = 42;
age >= 18
  ? console.log(`I like to drink beer 🍺`)
  : console.log(`I like to drink milk 🥛`);

const drink = age >= 18 ? 'beer 🍺' : 'milk 🥛';
console.log(`I like to drink ${drink}`);
console.log(`I like to drink ${age >= 18 ? 'beer 🍺' : 'milk 🥛'}`);

const rBan = 'ban';
const bBan = 'blackban';
const dUrl = 'https://www.diesel.com/shop/';
const firstCondition =
  block.block == `${rBan}-01` || block.block == `${bBan}-01`;
const secondCondition =
  block.block == `${rBan}-02` || block.block == `${bBan}-02`;

data[condition] = firstCondition
  ? '<% if (recipient.flagFast) {%>'
  : secondCondition
  ? '<% } else if (recipient.dummyPassword) { %>'
  : '<% } else { %>';

data[url] = firstCondition
  ? `${dUrl}register`
  : secondCondition
  ? `${dUrl}uppwcampaign`
  : `${dUrl}Login`;

  if (block.block == 'ban-01' || block.block == 'banblack-01') {
		data['condition'] = '<% if (recipient.flagFast) {%>';
		data['url'] = 'https://www.diesel.com/shop/account/register';
	}
	if (block.block == 'ban-02' || block.block == 'banblack-02') {
		data['condition'] = '<% } else if (recipient.dummyPassword) { %>';
		data['url'] = 'https://www.diesel.com/shop/uppwcampaign';
	}
	if (block.block == 'ban-03' || block.block == 'banblack-03') {
		data['condition'] = '<% } else { %>';
		data['url'] = 'https://www.diesel.com/shop/Login';
	}
*/
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
