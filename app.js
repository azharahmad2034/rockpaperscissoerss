let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const usersscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");



const showWinner =(userwin,userchoice,compschoice ) => {
   if(userwin){
      userscore++;
      usersscorepara.innerText = userscore;
      
      console.log("you win!");
      msg.innerText = `You Win! ${userchoice} beats ${compschoice}` ;
      msg.style.backgroundColor = "Green";

   }else{
      console.log("you lose,Computer wins");
      computerscore++;
      compscorepara.innerText = computerscore;
      msg.innerText = "You lose!";
      msg.style.backgroundColor = "Red";
      msg.innerText = `You lose! ${compschoice} beats ${userchoice}` ;
   }
}

const gamedraw = ()=>{
   console.log("game was draw");
   msg.innerText = "Game was Draw , Play again !"
   msg.style.backgroundColor = "purple";
   
}



   //function
const gencompchoice = () =>{

   const options = ["rock","paper","scissors"];
   const ranidx = [Math.floor(Math.random()*options.length)];
   return options[ranidx];
}
 


   //function
const playgame =  (userchoice) =>{
console.log("user choice =" ,userchoice);
//generate computer choice

const compschoice = gencompchoice();
console.log("computer choice =",compschoice);

      //// if-else statement
 if(userchoice === compschoice){
 gamedraw();
 }else {
   let userwin = true; 
   if(userchoice === "rock"){
      userwin = compschoice === "paper"?false : true;
   }else if (userchoice === "paper"){
      userwin = compschoice === "scissors"?false : true;
   }else{
      userwin = compschoice === "rock"?false : true;
   }showWinner(userwin,userchoice,compschoice);
 }

};

choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
  const userchoice = choice.getAttribute("id");
   playgame(userchoice);


  });
});