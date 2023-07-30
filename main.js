/* 
const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const btn = document.querySelector(`#btn`)
const startCells=[
    "", "", "", "", "", "", "", "", "",
]

let go = "circle"
infoDisplay.textContent = "Circle goes first"

function creatBoard(){
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add(`square`)
        cellElement.id = index
        cellElement.addEventListener(`click`, addGo)
        gameBoard.append(cellElement)
    })
}
creatBoard()

function addGo(e){
    const goDisplay = document.createElement(`div`)
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "it is now " + go +"'s go."
    e.target.removeEventListener(`click`, addGo ) 
    checkScore()
}

function checkScore(){
    const allSquares = document.querySelectorAll(`.square`)
    console.log(allSquares);
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains(`circle`))
        
        if (circleWins){
            infoDisplay.textContent = "Circle Wins!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }

        })

        winningCombos.forEach(array => {
            const crossWins = array.every(cell => 
                allSquares[cell].firstChild?.classList.contains(`cross`))
            
            if (crossWins){
                infoDisplay.textContent = "Cross Wins!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    
            })
}
*/

// Butonu sonradan eklediğim için düzeltilmiş kod. eskisini silmek istemedim ileride bakarım.. 

const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = [
  "", "", "", "", "", "", "", "", "",
];

let go = "circle";
infoDisplay.textContent = "Circle goes first";

function creatBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}
creatBoard();

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = "it is now " + go + "'s go.";
  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const array of winningCombos) {
    const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"));

    if (circleWins) {
      infoDisplay.textContent = "Circle Wins!";
      return;
    }

    const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("cross"));

    if (crossWins) {
      infoDisplay.textContent = "Cross Wins!";
      return;
    }
  }
}

function refreshGame() {
  // Clear the game board
  gameBoard.innerHTML = "";

  // Reset the startCells array
  startCells.fill("");

  // Recreate the game board
  creatBoard();

  // Reset game state
  go = "circle";
  infoDisplay.textContent = "Circle goes first";
}