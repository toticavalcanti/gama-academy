function somar(n1, n2){
    return n1 + n2;
}

//###################################################
//*******Boolean********
//The most basic datatype is the simple true/false value, 
//which JavaScript and TypeScript call a boolean value.
let isDone: boolean = false;

//###################################################
//*******Number********
/*As in JavaScript, all numbers in TypeScript are floating 
point values. These floating point numbers get the type number. 
In addition to hexadecimal and decimal literals, TypeScript 
also supports binary and octal literals introduced in ECMAScript 2015.
*/
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//###################################################
//*******String********
/**Another fundamental part of creating programs in JavaScript for 
 * webpages and servers alike is working with textual data. 
 * As in other languages, we use the type string to refer to these 
 * textual datatypes. Just like JavaScript, TypeScript also uses double quotes (")
 *  or single quotes (') to surround string data. 
 * */
let color: string = "blue";
color = 'red';

/**You can also use template strings, which can span multiple lines and have embedded expressions. 
 * These strings are surrounded by the backtick/backquote (`) character, and embedded expressions 
 * are of the form ${ expr }. */
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence01: string = `Hello, my name is ${ fullName }.I'll be ${ age + 1 } years old next month.`;

//This is equivalent to declaring sentence like so:
let sentence02: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";


//###################################################
//*******Array********
/**TypeScript, like JavaScript, allows you to work with arrays of values. 
 * Array types can be written in one of two ways. In the first, you use 
 * the type of the elements followed by [] to denote an array of that element type:
 * */
let list: number[] = [1, 2, 3];
//The second way uses a generic array type, Array<elemType>:
let list2: Array<number> = [1, 2, 3];


//###################################################
//*******Tuple********
/**Tuple types allow you to express an array with a fixed number of 
 * elements whose types are known, but need not be the same. 
 * For example, you may want to represent a value as a pair of a 
 * string and a number: */
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

//When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

//Accessing an element outside the set of known indices fails with an error:
x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.

console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.

//###################################################
//*******Enum********
/**
 * A helpful addition to the standard set of datatypes 
 * from JavaScript is the enum. As in languages like C#, 
 * an enum is a way of giving more friendly names to sets 
 * of numeric values.
 */
enum Status {aprovado, pendent, failed}
let s: Status = Status.aprovado;

/**
 * By default, enums begin numbering their members starting at 0.
 * You can change this by manually setting the value of one of its members. 
 * For example, we can start the previous example at 1 instead of 0:
 */
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
//Or, even manually set all the values in the enum:
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

//###################################################
//*******Any********
/**We may need to describe the type of variables that we do not know 
 * when we are writing an application. These values may come from dynamic 
 * content, e.g. from the user or a 3rd party library. In these cases, 
 * we want to opt-out of type checking and let the values pass through 
 * compile-time checks. To do so, we label these with the any type: */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

/**The any type is a powerful way to work with existing JavaScript, allowing 
 * you to gradually opt-in and opt-out of type checking during compilation. 
 * You might expect Object to play a similar role, as it does in other languages. 
 * However, variables of type Object only allow you to assign any value to them. 
 * You can’t call arbitrary methods on them, even ones that actually exist: */
//let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

/**
 * Note: Avoid using Object in favor of the non-primitive object type as described in our Do’s and Don’ts section.

The any type is also handy if you know some part of the type, but perhaps not all of it.
For example, you may have an array but the array has a mix of different types:
 */
let lst: any[] = [1, true, "free"];

lst[1] = 100;

//###################################################
//*******Void********
/**void is a little like the opposite of any: the absence 
 * of having any type at all. You may commonly see this as 
 * the return type of functions that do not return a value: */
function warnUser(): void {
    console.log("This is my warning message");
}

/**Declaring variables of type void is not useful because you 
 * can only assign null (only if --strictNullChecks is not specified, 
 * see next section) or undefined to them: */
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given

//###################################################
//*******Null and Undefined********
/**In TypeScript, both undefined and null actually have 
 * their own types named undefined and null respectively. 
 * Much like void, they’re not extremely useful on their own: */
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/**Basically null indicates the absence of an OBJECT, 
 * while undefined indicates the absence of a primitive value, 
 * such as an integer variable for example */

 //###################################################
//*******Union types********
function showNote(note: number | string){
    console.log(`A nota é: ${note}`)
}

showNote('10')
showNote(10)