'use strict';

    // Understand the problem

    // Break into sub parts
    
    //1.  Dice random generation
    // Change the image when dice is coming
    // Then write the if else function to dice values

    //2. Adding Current scores to the score




    let randomDice = () => Math.trunc(Math.random()*6+1);


    const newGame = document.querySelector(".btn--new");
    const rollDice = document.querySelector(".btn--roll");
    const hold = document.querySelector(".btn--hold");
    const dice = document.querySelector(".dice");
    const player0 = document.querySelector(".player--0");
    const player1 = document.querySelector(".player--1")

    //Functions
    
    const activePlayer = () => document.querySelector(".player--active");
    let currentScore = () => document.querySelector(".player--active .current-score");
    let score = () => document.querySelector(".player--active .score");
    const p0Score = () => document.querySelector("#score--0");
    const p1Score = () => document.getElementById("score--1");
    const p0CurrentScore = () => document.querySelector("#current--0");
    const p1CurrentScore = () => document.querySelector("#current--1");


    
    // Function to switch the player

    // const playerSwitch = function(){
        
    // if (activePlayer().classList.contains("player--0")){
    //     currentScore().textContent = 0;
    //     player1.classList.add("player--active");
    //     player0.classList.remove("player--active");
    //     }
    // else if (activePlayer().classList.contains("player--1")){
    //     currentScore().textContent = 0;
    //     player0.classList.add("player--active");
    //     player1.classList.remove("player--active");
    //     }
    //     return activePlayer()
    // }   


    
    // toggle method is an effective way to remove a class which want to see and if exists to be removed.
    const playerSwitch = function(){
        
            currentScore().textContent = 0;
            player0.classList.toggle("player--active");
            player1.classList.toggle("player--active");
            return activePlayer()
        }   


    // Function to Set Initial Values

    const reset = function(){
    p0Score().textContent = 0;
    p1Score().textContent = 0;
    p0CurrentScore().textContent=0;
    p1CurrentScore().textContent=0;
    dice.classList.add("hidden");
    currentScoreValue = 0;
    playing = true;
    }

    let currentScoreValue;
    let playing;    

    // Setting the board the board
        reset()


    // Roll Dice


    rollDice.addEventListener(
        "click",function(){

            if(playing){
            // Assign the image to the dice
            const currentDice = randomDice();
            console.log(currentDice);
            dice.src =`dice-${currentDice}.png`

            // Display the dice
            dice.classList.remove("hidden");


            if (currentDice === 1){
                // Switch player
                playerSwitch();}
            
                else{
                    currentScore().textContent = currentDice + Number(currentScore().textContent);
                    currentScoreValue = Number (currentScore().textContent);
                    console.log(currentScoreValue)
                }
            }
        }
    )

    
    // Hold Button

    hold.addEventListener(
        'click',function(){

            if(playing){
                score().textContent = currentScoreValue + Number(score().textContent);
                const total = score().textContent;
                if (total >= 100) {
                    activePlayer().classList.add("player--winner");
                    dice.classList.add("hidden");
                    playing = false;    
                }
                else{
                playerSwitch();
                }
            }   
        }
    )


    // New Game Button

    newGame.addEventListener(
        'click',function(){
            reset();
            activePlayer().classList.remove("player--winner") ; // remove winner class
            player0.classList.add("player--active");
            player1.classList.remove("player--active");
        }
    )