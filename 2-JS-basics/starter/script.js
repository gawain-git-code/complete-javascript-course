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

/* Object and Properties */

// Object literal
var john = {
    firstname: 'John',
    lastname: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false
};
console.log(john.firstname);
console.log(john['lastname']);
var x = 'family';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstname = 'Jane';
jane.birthYear = 1996;
jane['lastname'] = 'Smith';
console.log(jane);

/* Objects and Methods */

var john = {
    firstname: 'John',
    lastname: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false,
    calAge: function(){
        this.age = 2019 - this.birthYear;
    },
    height: 1.96,
    mass: 92,
    calBMI: function(){
        this.BMI = this.mass / this.height;
        return this.BMI;
    }
};
john.calAge();
john.calBMI();
console.log(john);

var mark = {
    firstname: 'Mark',
    height: 1.69,
    mass: 78,
    calBMI: function(){
        this.BMI = this.mass / this.height;
        return this.BMI;
    }
};

mark.calBMI();
console.log(mark);

console.log(((john.BMI > mark.BMI) ? john.firstname: mark.firstname) + ' has higher BMI.');


/* Loops and iteration */

// for loop
for (var i = 0; i < 5; i++)
{
    //iterate throught the array *name
    console.log(names[i]);
}

// while loop
var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

// loop continue
mylist = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < mylist.length; i++)
{
    if(typeof mylist[i] !== 'string') continue;
    console.log(mylist[i]);
}

// loop break
for (var i = 0; i < mylist.length; i++)
{
    if(typeof mylist[i] !== 'string') break;
    console.log(mylist[i]);
}


var john_spend = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalpaid: [],
    calTip: function()
    {
        for (var i = 0; i < this.bills.length; i++)
        {
            if(this.bills[i] < 50)
            {
                this.tips[i] = this.bills[i] * 0.20;
            }
            else if(this.bills[i] < 200)
            {
                this.tips[i] = this.bills[i] * 0.15;
            }
            else
            {
                this.tips[i] = this.bills[i] * 0.10;
            }
            this.finalpaid[i] = this.bills[i] + this.tips[i];
        }
    }
};

john_spend.calTip();
console.log(john_spend);

var mark_spend = {
    bills: [77, 475, 110, 45],
    tips: [],
    finalpaid: [],
    calTip: function()
    {
        for (var i = 0; i < this.bills.length; i++)
        {
            if(this.bills[i] < 100)
            {
                this.tips[i] = this.bills[i] * 0.20;
            }
            else if(this.bills[i] < 300)
            {
                this.tips[i] = this.bills[i] * 0.10;
            }
            else
            {
                this.tips[i] = this.bills[i] * 0.25;
            }
            this.finalpaid[i] = this.bills[i] + this.tips[i];
        }
    }
};
mark_spend.calTip();

var avgTip = function(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++)
    {
        sum += tips[i];
    }
    return sum / tips.length;
}

console.log(avgTip(john_spend.tips));
console.log(avgTip(mark_spend.tips));
console.log((avgTip(john_spend.tips) > avgTip(john_spend.tips) ? 'John' : 'Mark') + ' spent the highest tips.');