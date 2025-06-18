let result = document.querySelector("#result");
    console.log(result);
let score = document.querySelector("#score");
    console.log(score);
let final = document.querySelector("#final");
    console.log(final);
let humanChoice = "";
let computerChoice = 0;
let humScore = 0;
let comScore = 0;
function getHumanChoice(hc)
{
    console.log(hc);
    return hc;
}

let btnR = document.querySelector("#btnR");
   btnR.addEventListener("click", () => {
    humanChoice = "Rock";
    console.log(humanChoice);
    if(comScore < 5 && humScore < 5){
    playRound(getHumanChoice(humanChoice), getComputerChoice());}
    else
    result.innerText = "Game End";
    });

let btnP = document.querySelector("#btnP");
    btnP.addEventListener("click", () => {
    humanChoice = "Paper";
    if(comScore < 5 && humScore < 5){
        playRound(getHumanChoice(humanChoice), getComputerChoice());}
        else
        result.innerText = "Game End";
    });

let btnS = document.querySelector("#btnS");
    btnS.addEventListener("click", () => {
    humanChoice = "Sessior";
    if(comScore < 5 && humScore < 5){
        playRound(getHumanChoice(humanChoice), getComputerChoice());}
        else
        result.innerText = "Game End";
    });
let restart = document.querySelector("#btnRs");  
    console.log(restart);
    restart.addEventListener('click', () => {
        humScore = 0;
        comScore = 0;
        result.innerText = "";
        final.innerText = "";
        score.innerText = "Restart the Game"
    });

function getComputerChoice(){
    computerChoice = Math.random();
    return computerChoice;
    }

    function playRound(humanSelection , computerSelection){
      
        if(humanSelection=="Rock")
        {
            if(computerSelection<=0.30)
                    
                    result.innerText = "You: Rock \n Com: Rock \nTry Again";
            else if(computerSelection<=0.65)
                    {  
                        result.innerText = "You: Rock \n Com: Paper \nYou Loose";
                        comScore++; }
            else
                {
                    result.innerText = "You: Rock \n Com: Sessior \nYou Win";
                    humScore++;}
        }
        else if(humanSelection=="Paper")
            {
                if(computerSelection<=0.30)
                    {
                        result.innerText = "You: Paper \n Com: Rock \nYou Win!";
                        humScore++;}
                else if(computerSelection<=0.65)
                
                    result.innerText = "You: Paper \n Com: Paper \nTry Again";
                else 
             {
                
                result.innerText = "You: Paper \n Com: Sessior \nYou Loose";
                comScore++; }
            }
        else
        {
            if(computerChoice<=0.30)
                {//console.log('You loose!');
                    result.innerText = "You: Sessior \n Com: Rock \nYou Loose";
                    comScore++; }
            else if(computerChoice<=0.65)
                {//console.log('You Win!');
                    result.innerText = "You: Sessior \n Com: Paper \nYou Win!";
                    humScore++;}
            else
            //console.log('Try Again');
            result.innerText = "You: Sessior \n Com: Sessior \nTry Again";
        }    
        
        score.innerText = "Your Score:"+ humScore + "\nComputer Score:" + comScore;
        
      if(humScore == 5)
        final.innerText = "You won the game";
      if(comScore == 5)
        final.innerText = "Computer won the game";
        
        }



