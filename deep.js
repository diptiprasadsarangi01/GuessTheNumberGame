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
