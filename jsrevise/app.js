const game=()=>{
   let pScore=0;
//    let cScore=0;
//    pScore++;
   let cScore=0 ;
   const startGame=()=>{
    const playBtn=document.querySelector('.intro button');
    const introScreen=document.querySelector('.intro');
    const match=document.querySelector('.match');
    playBtn.addEventListener('click',()=>{
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    });
   };
   //play match
   const playMatch=()=>{
    const options=document.querySelectorAll('.option button');
    const playerHand=document.querySelector('.player-hand');
    const computerHand=document.querySelector('.computer-hand');
    const computerOptions=['rock','paper','scissors'];
    const hands=document.querySelectorAll('.hands img');
    hands.forEach(hand=>{
        hand.addEventListener('animationend',function(){
            this.style.animation="";
        })
    })
   console.log(computerOptions[0]);
     options.forEach(option=> {
         option.addEventListener('click',function() {
    //         console.log(this);
    const computerNumber=Math.floor(Math.random()*3);
    const computerChoice=computerOptions[computerNumber]

    setTimeout(()=>{
        compareHands(this.textContent,computerChoice);
    // images update
console.log(this.innerHTML);
    playerHand.src="images/"+this.innerHTML+".png";
    computerHand.src="images/"+computerChoice+".png";
    },2000)
// compareHands(this.textContent,computerChoice);
//     // images update
// console.log(this.innerHTML);
//     playerHand.src="images/"+this.innerHTML+".png";
//     computerHand.src="images/"+computerChoice+".png";

    //animation


    playerHand.style.animation="shakeplayer 2s ease";
    computerHand.style.animation="shakecomputer 2s ease";
    // console.log(computerChoice);
        });
     });
    // for(var i=0;i<options.length;i++)
    // {
    //     options[i].addEventListener('click',function(){
    //         console.log(this);
    //     })
    // }
  
   };
   const updateScore=()=>{
    const playerScore=document.querySelector('.player-score p');
    const computerScore=document.querySelector('.computer-score p');
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;
   }
   const compareHands=(playerChoice,computerChoice)=>{
    const winner=document.querySelector('.winner');
    if(playerChoice===computerChoice){
        winner.textContent='It is a tie';
        return;
    }
    if(playerChoice==='rock'){
        if(computerChoice=='scissors'){
            winner.textContent='player wins';
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='computer wins';
            cScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice==='paper'){
        if(computerChoice=='scissors'){
            winner.textContent='computer wins';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='player wins';
            pScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice==='scissors'){
        if(computerChoice=='rock'){
            winner.textContent='computer wins';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent='player wins';
            pScore++;
            updateScore();
            return;
        }
    }
   }
   //call all the inner function
   startGame();
   playMatch();
//    updateScreen();
};
//start the game function
game();