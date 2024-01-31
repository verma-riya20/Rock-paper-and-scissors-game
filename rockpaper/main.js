const playerChoice=document.querySelector("#playerChoice");
const computerChoice=document.querySelector("#computerChoice");
const resulttext=document.querySelector("#resulttext");
const choicebtn=document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;
choicebtn.forEach(button=> button.addEventListener("click",()=>{
    player=button.textContent;
    Computerturn();
    playerChoice.textContent=`Player: ${player}`;
    computerChoice.textContent=`Computer: ${computer}`;
    resulttext.textContent=checkwinner()

}))
const Computerturn=()=>{
    const randomNo=Math.floor(Math.random()*3);
    switch(randomNo){
        case 1:
            computer="ROCK";
            break;
        case 2:
                computer="PAPER";
                break;
    
        case 3:
                    computer="SCISSORS";
                    break;
        
        }
   
}
function checkwinner(){
    if (player==computer){
        return "Draw";
    }
    else if(computer=="ROCK"){
        return (player=="PAPER")?"You Win!":" You Lose!";
    }
    else if(computer=="PAPER"){
        return (player=="SCISSORS")?"You Win!": "You Lose!";
    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK")?"You Win!": "You Lose!";
    }
    
}