let compNum = 0;
let compScore = [];
let userScore = [];
let userTotal = 0;
let compTotal = 0;
let count = 0;
var resultsOffCanvas = document.getElementById('offcanvasExample');
var result = " ";
var resultHeading = " ";
function showModal(){

    document.getElementById("exampleModal").modal('show');
}

//Code in showResultOC() was gotten from: https://stackoverflow.com/questions/66816000/how-to-open-offcanvas-programmatically-in-bootstrap-5
function showResultOC(){
    var bsOffcanvas = new bootstrap.Offcanvas(resultsOffCanvas)
    bsOffcanvas.show()
    resultsOffCanvas.show;
}

// 
//('#exampleModal').modal('show');
//}


function newGame(){
    count = 0;
    result = " ";
    resultHeading = " ";
    compScore = [];
    userScore = [];
    userTotal = 0;
    compTotal = 0;
    showButton();
    
}

function playerWin(){
    compScore.push(0);
    userScore.push(1);
}

function compWin(){
    compScore.push(1);
    userScore.push(0);
}

function tie(){
    compScore.push(1);
    userScore.push(1);
}

function checkCount(){
    if(count >= 5){
        hide();
        getScore();
        displayResult();
        showResultOC();
        
    }
}

function leave(){
 window.location.href = "leave/index.html";
}

function getScore(){
    
    for(i = 0; i < userScore.length; i++){
        userTotal += userScore[i];
        console.log(userTotal);
        compTotal += compScore[i];
        console.log(compTotal);
    }

    if (compScore > userScore){
     resultHeading = "Bummer! You lose!!!";
     result = "Sorry you lost. The computer had " + compTotal + " points, you had " + userTotal;
//     
        
    }else if (compScore < userScore){
     resultHeading = "WHOOP! You WON!!!";
     result = "You won! You had " + userTotal + " points, the computer had " + compTotal
//     
    }else{
     resultHeading = "OOPS! It's a TIE!!!";
     result = "It's a tie! Both you and the computer had " + compTotal + " points!"
//     
    }
    
    compScore = [];
    userScore = [];
    
}

//0 = Rock
//1 = Paper
//2 = Scissors

function displayResult(){
    document.getElementById("resultHeading").innerHTML = resultHeading;
    
    document.getElementById("resultDisplay").innerHTML = result;
}
    

function rock(){
    compNum = Math.round(Math.random() * 2);
    if(compNum == 1){
            alert("Lose: Paper beats Rock! The Computer chose Paper.")
            compWin();
            count++;
            checkCount();
        }else if(compNum == 2){
            alert("Win: Rock beats Scissors! The Computer chose Rock!")
            playerWin()
            count++;
            checkCount();
        }else{
            alert("It's a tie! Computer chose Rock!")
            tie();
            count++;
            checkCount();
        }
    }

function paper(){
    compNum = Math.round(Math.random() * 2);
    if(compNum == 0){
            alert("Win: Paper beats Rock! The Computer chose Rock.");
            playerWin();
            count++;
            checkCount();
        }else if(compNum == 2){
            alert("Lose: Scissors beats Paper! The Computer chose Scissors.");
            compWin();
            count++;
            checkCount();
        }else{
            alert("It's a tie! Computer chose Paper!");
            tie();
            count++;
            checkCount();
        }
    }

function scissors(){
    compNum = Math.round(Math.random() * 2);
    if(compNum == 0){
            alert("Lose: Rock beats Scissors! The Computer chose Rock.");
            compWin();
            count++;
            checkCount();
        }else if(compNum == 1){
            alert("Win: Scissors beats Paper! The Computer chose Paper.");
            playerWin();
            count++;
            checkCount();
        }else{
            alert("It's a tie! Computer chose Scissors!");
            tie();
            count++;
            checkCount();
        }
    }

function hide(){
        document.getElementById("rockBtn").style.visibility = "hidden";
        document.getElementById("paperBtn").style.visibility = "hidden";
        document.getElementById("scissorsBtn").style.visibility = "hidden";

}

function showButton(){
        document.getElementById("rockBtn").style.visibility = "visible";
        document.getElementById("paperBtn").style.visibility = "visible";
        document.getElementById("scissorsBtn").style.visibility = "visible";

}


