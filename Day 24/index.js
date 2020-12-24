//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed() {
    pushed = true;
}

//set the target Int
function setTargetInt() {
    var targetElem = document.getElementById('targetNum');
    targetInt = Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    for (var i = 0; i < 110; i++) {
        if (i == 110) {
            i = 0;
        }
        if (pushed) {
            stop(i);
            break;
        } else {
            spinningElem.innerHTML = i;
            await sleep(75);
        }
    }
};
//EDIT THIS FUNCTION
function stop(i) {
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result');
    let message = "";
    let nOver = Math.abs(targetInt - (i-1))
    
    if (nOver === 0) {
        message = "Congratz, You Won!";
    }else if ( nOver <= 3){
        message = `That was a close one. Just off by ${nOver}. Try it again :) `;
    }
    else{
        message = `Ohh nooo...sorry you lost by ${nOver}`;
    }
    result.innerHTML = message;
}


//main
setTargetInt();
spin()