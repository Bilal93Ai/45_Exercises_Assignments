

// Equality and inequality tests Test 1

console.log("Equality test with strings: ", "Apple" === "Apple");
console.log("Equality test with strings;", ("Apple")as string === "Banana")

// Inequality test 2

console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");
console.log("Inequality test with strings:",("car"as string) != "car")

// Test using the lower case function 

console.log("lower case funstion test: ", "HELLO".toLowerCase() === "hello");
console.log("lower case function test:", ("Sector".toUpperCase() as string) !== "SECTOR" )

// Numerical test involving equality

console.log("Equality test with numbers:", 23 === 23);
console.log("Equality test with Numbers:", 45 != 45 )

// Numerical test involving inequality

console.log("Inquality test with numbers:", (33 as number) != 444);
console.log("Test involving Inequality:", (33 as number) != 33)

// Greater than test

console.log("Greater than test", 10 > 5);
console.log("Greater than test", 14 > 16)

// Less than Test

console.log("Less than test", 1 < 200);
console.log("Less than test", 130 < 15);

// Greater than and equal to Test

console.log("Greater than and Equal to test", 12 >= 12);
console.log("Greater than and equal to Test", 50 >= 51)

// Less than and equal to Test

console.log("Less than and equal to Test:", 132 <= 132);
console.log("Less than and equal to Test:", 21 <= 19);

// Test uing && operator (&& ka comparison true hona chahye, jabtak 2no true na ho true nai dega)

console.log("And operator Test:", 5===5 && 34 > 2);
console.log("And operator Test:", 40 == 40 && 30 > 40);

// Test uing OR | operator (if one is true it will give true)

console.log("OR operator Test:", (166 as number) === 166 || (3567 as number) > 12312);
console.log("OR operator test", (50 as number) == 40 || 47 > 255)

// Test using that item is in an array

const shits :string[] = ['batting','bowling','crickets','wickets'];

console.log('Test weather "crickets" included in array?:', shits.includes("crickets"));
console.log('Test weather "horse riding" included in array?:', shits.includes("horse riding"));

// Test using that item in not in an array

console.log('Test weather "tennis" is not included in array:', !shits.includes("tennis"));
console.log('Test weather "dog fight" is not included in array:', shits.includes("dog fight"));


