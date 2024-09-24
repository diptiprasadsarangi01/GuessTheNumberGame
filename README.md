# GuessTheNumberGame
It is a child game full of fun .
## HTML 
``` HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deepy's Game</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="gameDisclamer">
        <h1>Welcome To <br />🤖 Deepy's World 🤖</h1>
        <p style="color: #ffd900">
          ⚠️!!Deepy is on action !!⚠️<br /><br />Deepy will guess a number
          between 1 to 100. You have 10 Chances to guess the correct number.
        </p>
        <p>If You Guess The Correct Number You Will Win Deepy's Heart❤️</p>
        <p>👍🏼ALL THE BEST FOR YOUR GAME👍🏼</p>
      </div>
      <form action="">
        <label for="Guessvalues">!!Guess The Number!!</label>
        <input type="text" id="Guessvalues" class="Guessvalues" />
        <input type="submit" class="subt" />
        <h2 id="lowhigh"></h2>
        <button id="startAgain">Start Again</button>
      </form>
      <div class="facts">
        <p>Previous Guesses: <span id="prvGuess"></span></p>
        <p>Remaining Guesses:<span id="remGuess">10</span></p>
      </div>
    </div>
    <footer>
      <p>Design & Develop with 💜 by <a href="https://github.com/diptiprasadsarangi01" target="_blank">Deep</a> &copy; 2024</p>
    </footer>
    <script src="deep.js"></script>
  </body>
</html>
```
## CSS
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #1d142f;
    color: antiquewhite;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 99vh;
}
.gameDisclamer{
    text-align: center;
}
.gameDisclamer h1{
    font-family: Arial, Helvetica, sans-serif;
    font-size:3.5rem;
    margin-bottom: 30px;
}
.gameDisclamer p{
    font-size: 1.2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 8px;
    color: rgb(0, 255, 234);
} 
form{
    background-color: #ccadff1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding:40px ;
    text-align: center;
}
label{
    background-color: #ffffff00;
    font-size: 3rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
   
}
.Guessvalues{
    font-size: 40px;
    padding: 10px;
    text-align: center;
    width: 300px;
    background-color: wheat;
    color: #1d142f;
    border: none;
    outline: none;
    transition: all 0.1s;

}
.Guessvalues:hover{
    box-shadow: 0 0 10px #a26dfd;
}
.Guessvalues:focus{
    box-shadow: 0 0 20px #c3a1ff;
    border-radius: 5px;
}
.subt{
    font-size: 40px;
    padding: 10px;
    text-align: center;
    width: 300px;
}
.subt:hover{
    box-shadow: 0 0 10px rgba(255, 240, 211, 0.314); 
}
#startAgain{
    font-size: 40px;
    padding: 10px;
    text-align: center;
    width: 300px;
    display: none;
}
#startAgain:hover{
    box-shadow: 0 0 10px rgba(255, 240, 211, 0.314); 
}
.facts{
    text-align: center;
}
form h2{
    font-size: 30px;
    font-family:cursive;
    background-color: #ffffff00;
    color: #ff0055;
    text-shadow: 0 0 3px ;
    /* #14ff7e */
}
.facts p{
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
}
footer{
    
    margin-top: 40vh;
    text-align: center;  
}
footer p{
    background-color: #00000057;
    padding: 10px 8px; 
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
}
footer a{
    color: #c3a0ff;
    background-color: #00000000;
    text-decoration: none;
}
footer a:hover{
    text-shadow: 0 0 4px#8d41ff;
}


@media (max-width: 425px){
    .gameDisclamer h1{
       font-size: 1.8rem;
       margin-bottom: 10px;
    }
    .gameDisclamer p{
        font-size: 1rem;
        
    }  
    label{
        font-size: 2.5rem;
    }
    .Guessvalues{
        font-size: 30px;
        width: 280px;
    }
    .subt{
        font-size: 30px;
        width: 280px;
    }
    #startAgain{
        font-size: 30px;
        width: 280px;
    }
    form h2{
        font-size: 20px;
        text-shadow: 0 0 2px ;
    }
    .facts p{
        font-size: 16px;
        padding: 6px;
    }
}
@media (min-width: 426px) and (max-width: 600px){
    .gameDisclamer h1{
       font-size: 2.5rem;
       margin-bottom: 10px;
    }
    .gameDisclamer p{
        font-size: 1.1rem;
        
    }  
    label{
        font-size: 2.8rem;
    }
    .Guessvalues{
        font-size: 35px;
        width: 320px;
    }
    .subt{
        font-size: 35px;
        width: 320px;
    }
    #startAgain{
        font-size: 35px;
        width: 320px;
    }
    form h2{
        font-size: 24px;
        text-shadow: 0 0 2px ;
    }
   
}
```
## JS
```
let randomNumber=parseInt((Math.random()*100)+1)
console.log (randomNumber)

const guessValues=document.querySelector("#Guessvalues")
const submit=document.querySelector(".subt")
const prvGuess=document.querySelector("#prvGuess")
const remGuess=document.querySelector("#remGuess")
const lowhigh=document.querySelector("#lowhigh")
const startOver=document.querySelector("#facts")


let playGame=true
let allGuesses=[]
let noOfGuess=1
let success=false

if(playGame){
    submit.addEventListener('click' , (e)=>{
     e.preventDefault()
     let guess=parseInt(guessValues.value)
     console.log(guess);
     validGuess(guess)
     guessValues.value=''
    })
}

function validGuess(guess){
    if(isNaN(guess)){
        let message=`Enter a Valid Guess 😠`
        displayMessage(message)
        endgame()
    }else if(guess>100){
        let message=`Give a guess less than equal 100 😏`
        displayMessage(message)
    }else if(guess<1){
        let message=`Give a guess more than equal 1 😏`
        displayMessage(message)
    }else{
        checkGuess(guess)
    }
}

function checkGuess(guess){
if(noOfGuess<11){
    displayGuess(guess)
    if(guess===randomNumber){
        success=true
        let message=`🎉Yahoo,You guessed it right.🎉 <br>❤️🤖 The number given by Deepy was ${randomNumber} 🤖❤️`
        displayMessage(message)
        endgame(); 
     }else if(guess>randomNumber && guess>(randomNumber+10)){
        let message=`Your Guess is TOOOO High 😵‍💫`
        displayMessage(message) 
     }else if(guess>randomNumber && guess<(randomNumber+10)){
        let message=`Your Guess is High 🫤`
        displayMessage(message) 
     }else if(guess<randomNumber && guess<(randomNumber-10)){
        let message=`Your Guess is TOOOO Low 😵‍💫`
        displayMessage(message) 
     }else if(guess<randomNumber && guess>(randomNumber-10)){
        let message=`Your Guess is Low 🫤`
        displayMessage(message) 
     }

    if(noOfGuess===10){
        let message=`😖 GAME OVER , BETTER LUCK NEXT TIME 😖 <br>💔🤖 The number given by Deepy was ${randomNumber} 🤖💔`
        displayMessage(message)
        endgame()

    }
}
 noOfGuess++;
}

function displayGuess(guess){
    allGuesses.push(guess)
    prvGuess.innerHTML=`${allGuesses} `
    remGuess.innerHTML=`${10-noOfGuess}`
    
}
function displayMessage(message){
    lowhigh.innerHTML=`${message}`
    if(success){
        lowhigh.style.color="#14ff7e";
    }
}
function endgame(){
   guessValues.value= ''
   guessValues.setAttribute('disabled','')
   playGame=false
   submit.style.display="none";
   startAgain.style.display="inline-block"
   newgame()
}
function newgame(){
    const startAgain=document.querySelector("#startAgain")

    startAgain.addEventListener('click', (e)=>{
       randomNumber=parseInt((Math.random()*100)+1)
       playGame=true
       allGuesses=[]
       noOfGuess=1
       prvGuess.innerHTML=` `
       remGuess.innerHTML=`${10-noOfGuess}`
       guessValues.removeAttribute('disabled')
       })
    
}
```
