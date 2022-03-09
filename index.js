// variable : A variable is a “named storage” for data.
var productName = "flipkart"
let personName= "raju"

//limitations
// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.
//When the name contains multiple words, camelCase is commonly used.

//constants : The const keyword was also introduced in the ES6(ES2015) version to create constants.Once a constant is initialized, we cannot change its value.
const x = 5;
x = 10;  // Error! constant cannot be changed.
console.log(x)

// Simply, a constant is a type of variable whose value cannot be changed.

// Also, you cannot declare a constant without initializing it. For example,
const x;  // Error! Missing initializer in const declaration.
x = 5;
console.log(x)

//identifier:variables and constants are usually call identifiers.
//naming roles of identifers : identifiers consists of letters,numbers, underscore(_) and the dollar sign($)

//valid
const a = 'hello';
const _a = 'hello';
const $a = 'hello';
//unicode character are allowed

//identifier cannot be reserve word
//invalid
const new = 5; // Error! new is a keyword.

//Identifier names cannot start with numbers
//invalid
const 1a = 'hello'; // this gives an error


//literals: literals means you are providing a value directly in the program . literals is just the way to create identifier with the value.
let goal = "be happy"//literal-behappy 
