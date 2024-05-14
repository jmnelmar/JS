const minimun = 1;
const maximun = 100;
const asnwer = Math.random() * (maximun - minimun + 1) + minimun;

console.log(asnwer);
let guess;
let running = true;

while(isNaN(running)){
    guess = window.prompt(`Guess a number between ${minimun} - ${maximun}`)
    guess = Number(guess);

    if (isNaN(guess)){
        window.alert("please put a valid number")
    }

    if(guess === asnwer){
        window.alert(please)
        running = false;
    }else if (guess < asnwer || guess > minimun){
        window.alert("Please enter a valid number");
    }
    else{
        attemps++;
        if(guess < asnwer){
            window.alert("Too low");
        }
        else if (guess > asnwer){
            window.alert("Too High")
        }else{
            window.alert(`Correct!, the answer was ${asnwer}`)
        }
    }
    console.log(typeof guess, guess)
    
}