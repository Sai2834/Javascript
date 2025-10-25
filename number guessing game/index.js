const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1)+minNum);
let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`guess no between ${minNum} -${maxNum}`);
    guess=Number(guess);
    
    if(isNaN(guess)||guess<minNum || guess>maxNum){
        window.alert("enter a valid number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("too low");
        }
        else if(guess>answer){
            window.alert("too high");
        }
        else{
            running=false;
            window.alert(`you guessed it in ${attempts} attempts`);
        }
        
    }
}