// click on start/reset button
let isActive = false;
let startReset = document.getElementById("start");
let score = document.getElementById("score-num");
let currAnswer = null;

function endGame() {
    isActive = false;
    document.getElementById("final").innerHTML = score.innerHTML;
    let gameover = document.getElementById("game-over");
    gameover.style.display = "block";
    startReset.innerHTML = "Start Game";
}

function generateNewQuestion() {
    // generate new question and answers
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let answer = num1 * num2;
    document.getElementById("math-section").innerHTML = num1 + "x" + num2;
    let boxNum = Math.floor(Math.random() * 4) + 1
    switch (boxNum) {
        case 1:
            document.getElementById("box-1").innerHTML = answer;
            document.getElementById("box-2").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-3").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-4").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            break;

        case 2:
            document.getElementById("box-1").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-2").innerHTML = answer;
            document.getElementById("box-3").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-4").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            break;

        case 3:
            document.getElementById("box-1").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-2").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-3").innerHTML = answer;
            document.getElementById("box-4").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            break;

        case 4:
            document.getElementById("box-1").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-2").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-3").innerHTML = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);
            document.getElementById("box-4").innerHTML = answer;
            break;
    }
    return answer;
}


startReset.addEventListener("click", function() {
    // if playing, reload page
    if (isActive) {
        window.location.reload();
    }
    // if not playing:
    else {
        document.getElementById("game-over").style.display = "none";
        isActive = true;
        // set score to 0
        score.innerHTML = 0;

        // show countdown box
        let countdownTime = document.getElementById("countdown")
        countdownTime.style.display = "inline";
        
        // change button to reset
        startReset.innerHTML = "Reset Game";
        
        // generating starting Q&A
        currAnswer = generateNewQuestion();
        
        // start reducing time
        let num = 60;
        let counter = setInterval(function() {
            // check if time left
            num--;
            document.getElementById("time").innerHTML = num;
            if (num == 0) {
                clearInterval(counter);
                endGame();
            }
        }, 1000);
    }
})  

function showBox(box) {
    box.style.display = "block";
    setTimeout(function() {
        box.style.display = "none";
    }, 1000)
    
}

// if we click on answer box
let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; ++i) {
    boxes[i].addEventListener("click", function() {
        if (isActive) {
            if (boxes[i].innerHTML == currAnswer) {
                // if yes, increase score
                score.innerHTML++;
                // show correct box
                let correctBox = document.getElementById("right-answer");
                showBox(correctBox);
                // load new question and answers
                currAnswer = generateNewQuestion();
            }
            else {
                // if no, show try again box
                let wrongBox = document.getElementById("wrong-answer");
                showBox(wrongBox);
            }
        }
        
    })
}

    
        
        
        

        
