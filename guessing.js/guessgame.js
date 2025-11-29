let guess = prompt("Enter your Guess Here");
const random = Math.floor(Math.random()*100)+1;
while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    if(guess == random){
        console.log("Hurrah! Correct Answer,random number was",random);
        break;
    }else if(guess > random){
        guess = prompt("Your Guess was too larger!Try Smaller")
    }else if(guess < random){
        guess = prompt("Your Guess was too smaller!Try larger")
    }
    else{
        guess = prompt("Oops! Wrong Answer!Enter your guess again")
    }
}