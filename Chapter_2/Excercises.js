// Looping a triangle

function loopTriangle() {
    for (let i = 0; i < 7; i++) {
        console.log("#".repeat(i+1));
    }
}

// loopTriangle()


// FizzBuzz
// use console.log to print out all numbers from 1 to 100. Exceptions: numbers divisible by 3 should print "Fizz", numbers divisible by 5 should print "Buzz" and numbers divisible by both should print "FizzBuzz".

function fizzBuzz () {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output == 0 ? i : output);
    }
}

// ChessBoard

function createChessBoard(size) {
    board = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i % 2 == 0) {
                board += j % 2 == 0 ? " " : "#";
            } else {
                board += j % 2 == 0 ? "#" : " ";
            }
        }
        board += "\n";
    }
    return board;
}

console.log(createChessBoard(20));