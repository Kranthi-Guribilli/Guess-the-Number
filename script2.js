const numBox = document.getElementById("numBox")
const result = document.getElementById("result")
const checkBtn = document.getElementById("checkBtn")
const newGameBtn = document.getElementById("newGameBtn")
const remChecks = document.getElementById("remChecks")
const image = document.getElementById("image")
const settings = document.getElementById("settings")
const changeChecks = document.getElementById("changeChecks")
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

//counter for the amount of guesses the user has had
let noOfGuesses = 1;

//array list of the numbers the user has guessed
let guessedNumbers = [];

//variable that stores the prompt of the user's name
let name = prompt("Enter name");


let orgNum
let enterNum
let isStarted = false
let checks

function check(){
    
    enterNum = numBox.value
    if(isStarted == false){
        result.innerHTML = "Start the game first😒"
    }else if(checks === 0){
        result.innerHTML = "You lose! No Problem try again😄"
        updatechecks()
        checkBtn.disabled = true
    }
    else if(enterNum != ""){
        if(isNaN(enterNum)){
            alert("This page says, you've entered an invalid input\n Please enter a number");
        }
        else if(enterNum == orgNum){
            document.body.style.background='green';
            result.innerHTML ="🎉Woohoo! "+name+" You won!!🎉<br>The Number was " + orgNum+'<br>'+ "You guessed it in " + noOfGuesses + " attempts<br>";
            checkBtn.disabled = true
        }
         else if(enterNum < orgNum){
            guessedNumbers.push(enterNum);
            result.innerHTML = "Your guess is too low.<br>Try a larger number(++)😁<br> No. of guesses: " + noOfGuesses+"<br>Guessed Numbers are: " + guessedNumbers;
            noOfGuesses += 1;
            updatechecks()
        } else{
            guessedNumbers.push(enterNum);
            result.innerHTML = "Your guess is too high.<br> Oh! Try a smaller number(--)😁<br> No. of guesses: " + noOfGuesses+"<br> Guessed Numbers are: " + guessedNumbers;
            noOfGuesses += 1;
            updatechecks()
        }
    }
    else{
        result.innerHTML = "Where's the number?🙄"
        alert("Guess a number");
    }

    
}

function newGame(){
    isStarted = true
    checkBtn.disabled = false
    orgNum = Math.floor(Math.random() *100)
    numBox.value = ""
    checks = changeChecks.value
    result.innerHTML = "Start guessing....."
    remChecks.innerText = "Remaining Checks : " + checks
}

function updatechecks(){
    checks--
    remChecks.innerText = "Remaining Checks : " + checks
}

function settingsOpen(){
    if(settings.style.display === "none"){
        settings.style.display = "block"
    }else{
        settings.style.display = "none"
    }
}

function doneBtn(){
    checks = changeChecks.value
    newGame()
}