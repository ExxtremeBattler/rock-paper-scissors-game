let choices = ['rock', 'paper', 'scissors'];

alert("Hey, rock, paper, or scissors?");
let userChoice = prompt("Enter 'rock', 'paper', or 'scissors'");

switch(userChoice){
    case 'rock':
        userChoice = choices[0];
        break;
    case 'paper':
        userChoice = choices[1];
        break;
    case 'scissors':
        userChoice = choices[2];
        break;

}

let compChoice = (Math.random() * 3);

if (compChoice <= 1){
    compChoice = choices[0];
}
else if (compChoice > 1 && compChoice <= 2 ){
    compChoice = choices[1];
}
else if (compChoice >= 2) {
    compChoice = choices[2];
};

console.log(userChoice);
console.log(compChoice);


if (userChoice === compChoice){
    alert("Its a tie!")
}
else if (userChoice === 'rock' && compChoice === 'paper' ){
    alert("The computer has won!")
}
else if (userChoice === 'rock' && compChoice === 'scissors' ){
    alert("The user has won!")
}
else if (userChoice === 'paper' && compChoice === 'rock' ){
    alert("The user has won!")
}
else if (userChoice === 'paper' && compChoice === 'scissors' ){
    alert("The computer has won!")
}
else if (userChoice === 'scissors' && compChoice === 'paper' ){
    alert("The user has won!")
}
else if (userChoice === 'scissors' && compChoice === 'rock' ){
    alert("The computer has won!")
};
