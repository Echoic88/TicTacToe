"use strict";


// Set up grid classes
let grid = [[],[],[]]

grid[0] = ["x","x","x"]
grid[1] = ["x","x","x"]
grid[2] = ["x","x","x"]


function checkRows(grid, player) {
    let i;
    let j;
    let row = []
    let result = false
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            if (grid[i][j] === player) {
                row.push(player);
            }
        }
        if (row.length === 3) {
            result = true;
        }
    }
    return result;
}

function checkColumns(grid, player) {
    let i;
    let j;
    let column = [];
    let result = false;
    for (i = 0; i <= 2; i++) {
        for(j = 0; j <= 2; j++) {
            if (grid[j][i] === player) {
                column.push(player)
            }
        }
        if (column.length == 3) {
            result = true;
        }
        column = [];
    }
    return result;
}

function checkDiagonal(grid, player) {
    let result = false;
    let i;
    let diagonalRight = [];
    let diagonalLeft = [];

    for (i = 0; i <= 2; i++) {
        if (grid[i][i] === player) {
            diagonalRight.push(player);
        }
        if (grid[i][2-i] === player) {
            diagonalLeft.push(player);
        }
    }

    if (diagonalRight.length === 3 || diagonalLeft.length === 3) {
        result = true;
    }
    return result;
}

let player = "x";
let result = checkRows(grid, player);

// let result = checkRows(grid);

console.log(grid);
console.log(result);



// Accept user input //



// game loop //
