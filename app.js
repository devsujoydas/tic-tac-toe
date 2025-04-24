const boxes = document.querySelectorAll('.box');
const newGameBtn = document.querySelector('.new-btn')
const resetBtn = document.querySelector('.reset-btn')
const msgContainer = document.querySelector('.msg-container')
const msg = document.querySelector('#msg')

const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let turn = 'true';
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn === 'true') {
            box.innerText = 'X';
            box.classList.add('text-red');
            box.classList.remove('text-blue');
            turn = 'false';
        } 
        else {
            box.innerText = 'O';
            box.classList.add('text-blue');
            box.classList.remove('text-red');
            turn = 'true';
            
        }
        box.disabled = true;
        cheakWinner();
    })
})

const cheakWinner = () =>{
    for (const partern of winPatterns) {
        let posi1Val = boxes[partern[0]].innerText;
        let posi2Val = boxes[partern[1]].innerText;
        let posi3Val = boxes[partern[2]].innerText;

        if (posi1Val != "" && posi2Val != "" && posi3Val != "") {
            if (posi1Val === posi2Val && posi2Val === posi3Val) {
                showWinner(posi1Val);
            }
        }  
    };
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();   
}
const showdraw = () => {
    msg.innerText = `Uppssss.. The Match is Drow
    Try Again`;
    msgContainer.classList.remove('hide');
    disableBoxes();   
}

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    enableBoxes();
    msgContainer.classList.add("hide")
};



newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);