// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log('ellie\'s book');

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter
// 1증가된 counter의 값을 preIncrement에 저장한다.
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1
// counter의 값을 postIncrement에 저장한 다음 counter의 값이 1 증가한다.

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; 
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: ||(or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), or연산자는 true를 발견하면 거기서 멈추고(이미 true니까) 
// 다음 코드를 실행하지 않음
console.log(`or: ${value1 || value2 || check()}`);
 
function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('@');
    }
    return true;
}

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()} `);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

// ! (not) 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for mulitple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome': 
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy, 
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, 
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}