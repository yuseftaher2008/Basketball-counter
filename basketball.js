let lfirstScore = 0
let rfirstScore = 0

function updateDisplay() {
    
    document.getElementById("score1-el").textContent = rfirstScore;

    document.getElementById("score2-el").textContent = lfirstScore;
}
function radd1(){
    rfirstScore ++  
    updateDisplay()  

}
function radd2(){
    rfirstScore = rfirstScore + 2
    updateDisplay()
}

function radd3(){
    rfirstScore = rfirstScore + 3
    updateDisplay()
}

function ladd1(){
    lfirstScore ++
    updateDisplay()
}

function ladd2(){
    lfirstScore = lfirstScore + 2
    updateDisplay()
}

function ladd3(){
    lfirstScore = lfirstScore + 3
    updateDisplay()
}

function reset(){
    lfirstScore = 0
    rfirstScore = 0
    updateDisplay()
}