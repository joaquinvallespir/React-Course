console.log("hola mundo");


// false booleano

console.log("----------------BOOL-------------------");
let isOnline = false

function checkStatus(status) {
  return Boolean(status) ? "ONLINE" : "OFFLINE"
}

console.log(checkStatus(isOnline)) // OFFLINE

//el numero 0
console.log("----------------0-------------------");
let unreadMessages = 0
let hasUnreadMessages = Boolean(unreadMessages)
console.log(hasUnreadMessages) // false


// "" '' `` string vacío
console.log("----------------STRING VACIO-------------------");
let userInput = "";
let defaultText = "No input provided";

let displayText = Boolean(userInput) || defaultText;
console.log(displayText);


//null
console.log("----------------null-------------------");
let user = null;

if (user && user.name) {
    console.log("Welcome, " + user.name + "!");
} else {
    console.log("Please log in to access the website.");
}

// UNDEFINED
console.log("----------------undefined-------------------");
let age;
if (age) {
    console.log("You are " + age + " years old.");
}else
{
    console.log("The age is undefined.");
}

//NaN
console.log("----------------NaN-------------------");
let value1 = "mauro";
let value2 = 10;

let result = value1 / value2;

if (!result) {
    console.log("The result is not a number.");
} else {
    console.log(result);
}