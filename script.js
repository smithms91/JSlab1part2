//Exercise 1
var number = parseInt(prompt("Enter a number!"));
var total = 0;
//Exercise 2
var play, word, string = "";
//Exercise 3
var name, printName = "";
//Exercise 4
var breakfast = "eggs and toast";
var lunch = "a salad";
var dinner = "chicken and rice";
var timeOfDay = "";

//-------------------------//

//Exercise 1
for (var i = number; i >= 0; i--) {
    total += i;
}
console.log(total);

//Exercise 2
play = prompt("Do you want to play?");
do {
    if (play === "yes") {
        word = prompt("Enter a word!");
        string += word + " ";
        play = prompt("Do you want to play again?");
    };
} while(play === "yes");

console.log(string);

//Exercise 3
name = prompt("What is your name?");
printName = prompt("Would you like to print your name?");
while (printName === "yes") {
    console.log("Hello. My name is " + name);
    name += "!";
    printName = prompt("Would you like to print your name again?");
}

//Exercise 4
timeOfDay = prompt("What time of day is it?");
    if (timeOfDay === "morning" || timeOfDay === "breakfast") {
        console.log("Since it is morning, you should be eating breakfast. We suggest " + breakfast + ".");    
    } else if (timeOfDay === "noon" || timeOfDay === "lunch") {
        console.log("Since it is noon, you should be eating lunch. We suggest " + lunch + ".");
    } else console.log("Since it is evening, you should be eating dinner. We suggest " + dinner + ".");