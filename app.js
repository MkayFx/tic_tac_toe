const Box = () => {
    const content = '';
    return {content}
}
const Player = (mark, winner) => {
    //some func
    return {mark, winner}
}


const board = document.querySelector('.gameboard');
const player1 = Player("X", false)
const player2 = Player("O", false)
let current = player1



const PlayGame = (() => {
    const start = () => {
        CellMaker.displayCells();
    }
    const currentPlayer = () => {
        if(current == player1) {
            current = player2
            return player1
        }
        else{
            current = player1
            return player2
        }
    }
    const playerAction = (player, box, target) => {
        box.content = player.mark
        target.textContent = box.content
    }
    const callWinner = () => {
        //checks for player.winner
        //displays the winner
    }
    const stop = () => {
        //stops game
    }

    return{start, playerAction, currentPlayer}
})()

const CellMaker = (() => {
    const cells = [];
    const addCell = (cell) => {
        cells.push(cell);
    }
    const displayCells = () => {
        createCells();
        cells.forEach(cell => {
            const div = document.createElement('div');
            const span = document.createElement('span');
            div.classList.add("box");
            div.appendChild(span);
            board.appendChild(div);

            div.addEventListener("click", function(){
                const play = PlayGame.currentPlayer;
                PlayGame.playerAction(play(), cell, span);
                GameBoard.threeInARow()
            })
        })
    }
    const createCells = () =>{
        for(let i = 0; i <= 8; i++){
            const newBox = Box();
            addCell(newBox);
        }
    }
    return {cells, displayCells}
})();
PlayGame.start()

const GameBoard = (() => {
    const cells = CellMaker.cells;
    let o = false;
    let x = false;
    const rows = {
        row1:  [cells[0], cells[1], cells[2]],
        row2:  [cells[3], cells[4], cells[5]],
        row3:  [cells[6], cells[7], cells[8]],
        row4:  [cells[0], cells[3], cells[6]],
        row5:  [cells[1], cells[4], cells[7]],
        row6:  [cells[2], cells[5], cells[8]],
        row7:  [cells[0], cells[4], cells[8]],
        row8:  [cells[2], cells[4], cells[6]],
    }
    const checkForX = () => {
        for(const row in rows){
            let mark = rows[row]
            x = mark.every(cell => {
                return cell.content == 'X'
            })
            if(x){return}
            console.log(x)
        }
    }
    const checkForO = () => {
        for(const row in rows){
            let mark = rows[row]
            o = mark.every(cell => {
                return cell.content == 'O'
            })
        }
    }
    const threeInARow = () => {
        //set player.winner to true
        //checkForO()
        //checkForX()
        for(const row in rows){
            let mark = rows[row]
            const x = mark.every(cell => {
                return cell.content == 'X'
            })
            const o = mark.every(cell => {
                return cell.content == 'O'
            })
            console.log(row, x, o)
        }
    }
    return {threeInARow}
})()