let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');

const userScorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const gencomchoice=() =>{
    const options=["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];

}
const drawGame=()=>{
 
    msg.innerText="game was draw!";

}
const showwinner=(userwin,userchoiceId,compChoice)=>{
    if(userwin){
       userScore++;
       userScorePara.innerText=userScore;
        msg.innerText=`you win! Your ${userchoiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
       compScore++;
       compscorePara.innerText=compScore;
        msg.innerText=`you lose!  ${compChoice} beats Your ${userchoiceId}`;
        msg.style.backgroundColor="red";
    }
}


const playGame=(userchoiceId)=>{
    console.log("user choice",userchoiceId);
    const compChoice=gencomchoice();
    console.log("comp choice",compChoice);

    if(userchoiceId==compChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoiceId==="rock"){
            userwin= compChoice==="paper"? false: true;
        }
        else if(userchoiceId==="paper"){
            userwin= compChoice==="scissor" ? false: true;
        }
        else{
            userwin= compChoice==="rock" ? false:true;
        }
        showwinner(userwin,userchoiceId,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoiceId=choice.getAttribute("id");
        console.log("choices is clicked",userchoiceId);
        playGame(userchoiceId);
    })
})