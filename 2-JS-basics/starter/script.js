console.log("Hello World!");

var firstname = "Gawain";
var lastname = "XIE";

function calAge(birthYear){
    return 2019 - birthYear;
}
age = calAge(1989);

console.log("Firstname %s, Lastname %s, Age %d.", firstname, lastname, age);

age >= 18 ? console.log("can drink.") : console.log("No drink.")

//undefined
var job;
console.log(job);

job = "Engineer";
console.log(firstname + " " + job);

//alert pops
alert(firstname + " is a " + job);

//switch statement
switch(job) {
    case "Engineer":
        console.log(firstname + " build amazing stuffs!.");
        break;
    default:
        break;
}

//prompt user input
var ans = prompt("What is his last name?");
console.log(ans);
//check type
console.log(typeof ans);


if (ans == "xie")
{
    alert("Correct!");
}
else
{
    alert("Wrong!");
}

var height;

height = 23;

if (height || height === 0){
    console.log('Variable is defined!');
}else{
    console.log("Variable is not defined!");
}

//NOTE: Equality operators
if (height == '23'){
    console.log('1: The == operator does type coercison!');
}
if (height === 23){
    console.log('2: The === operator does exact comparasion!');
}



//Function Statements and Expressions

//Function declaration
function whatDoYouDo(job, firstname) {}

//Fucntion expression
var whatDoYouDo = function(job,firstname) {
    switch(job){
        case "Engineer":
            return firstname + ' is engineer.';
        case "Teacher":
            return firstname + ' is teacher.';
    }
    return job;
}

console.log(whatDoYouDo(job, firstname));



/* Arrays */
var names = ['John', 'Mark', 'James', 'Gawain'];
var years = new Array(1990, 1986, 1991, 1989);

console.log(names);
console.log(names.length);

names[1] = "Ben";
console.log(names);

names[4] = "Mary";
console.log(names);

//array with different data type
var john = ['John', 'Smith', 1989, 'teacher', false];

//add element to the end
john.push('blue');
//???
john.unshift('Mr.');
console.log(john);
//pop items
john.pop()
console.log(john);
//???
john.shift()
console.log(john);
//find index
idx = john.indexOf(1989);
console.log(idx);
//find index
idx = john.indexOf(23);
console.log(idx);

isDesigner = john.indexOf('designer') === -1 ? "John is NOT a designer.": "John is  a designer.";
console.log(isDesigner);


