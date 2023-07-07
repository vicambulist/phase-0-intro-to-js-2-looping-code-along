// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    /*debugger;*/
}



const messages = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

writeCards([Guadalupe, Ollie, Aki], surprise);


function countDown(number){
let counter = number;
while (counter >= 0) {
        console.log(counter--);
}
}