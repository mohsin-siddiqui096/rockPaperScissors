// let arr = ['one', 'two'];
//arr[2] = 'three';
//console.log(arr);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
let cc = Math.random();
if(cc<=0.30)
    console.log("Computer: Rock");
else if (cc<=0.65)
    console.log("Computer: Paper");
else
console.log("Computer: Sessior");
return cc;
}


function getHumanChoice() {
let hc = prompt("Enter a number 1 for Rock, 2 for Paper, 3 for Sessior");
if(hc==1)
    console.log("You: Rock");
else if (hc==2)
    console.log("You: Paper");
else
console.log("You: Sessior");
return hc;
}

let comScore = 0;
let humScore = 0;
function playRound(humanChoice, computerChoice){
    if(humanChoice==1)
    {
        if(computerChoice<=0.30)
        console.log('Try Again');
    else if(computerChoice<=0.65)
        {console.log('You loose!');
            comScore++; }
    else
    {console.log('You Win!');
            humScore++;}
    }
    else if(humanChoice==2)
        {
            if(computerChoice<=0.30)
                {console.log('You Win!');
                    humScore++;}
        else if(computerChoice<=0.65)
            console.log('Try Again');
        else
        {console.log('You loose!');
            comScore++; }
        }
    else
    {
        if(computerChoice<=0.30)
            {console.log('You loose!');
                comScore++; }
        else if(computerChoice<=0.65)
            {console.log('You Win!');
                humScore++;}
        else
        console.log('Try Again');
    }    
    console.log("Your Score:",humScore);
    console.log("Computer Score:",comScore);
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
//playRound(humanSelection,computerSelection);
function playGame(){
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
if(humScore>comScore)
    console.log("You Won the Game!");
    else
    console.log("Computer won the Game!");

}
playGame();