'use strict';

// let (added in ES6)
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// number = special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number ' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// // null - 텅텅 비어있는 상태
let nothing = null; 
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// // undefined - 텅텅 비었는지 아닌지 정해지지 않은 상태
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// Dynamic typing
let text = 'hello';
console.log(text.charAt(0));
console.log(`value ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));



// object
const ellie = { name: 'ellie', age: '20'};
ellie.age = 21;