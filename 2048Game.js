var gameBoard = new Array(4);
var randomNumber = [2, 4];
var gameContinue = true;

// Loop to create 2D array using 1D array
for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(4);
}
  
  
// Loop to initialize 2D array elements.
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        gameBoard[i][j] = 0;
    }
}
  
//Function for randomly selecting an empty location and place a 2 or 4
function generateRandomnumber(){
   
    continueLoop = 1;
    nonEmptycells = 0;
    while(continueLoop == 1){
       //Generating random index between 0 and 3
       i = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;       
       j = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
       
       //Condition to check if there is an empty cell and all cells are not filled
       if (gameBoard[i][j] == 0){
           //Generating random number from 2 and 4 for initialisation and adding a number after each move operation
           gameBoard[i][j] = Math.floor(randomNumber[Math.floor(Math.random()*randomNumber.length)]);
           continueLoop = 0;
       }

        else if(nonEmptycells==16){
            continueLoop = 0;
        }

        nonEmptycells += 1;
       
       }
    }



//Function for printing the board on console
function displayBoard(){
    // Loop to display the elements of 2D array. 
    generateRandomnumber()
    for (var z = 0; z < 4; z++) {
    
        console.log(gameBoard[z]);   
    }
}



//function to check if user has won or all tiles are filled
function continueGame(){
    var count =0;
    var gameFlag = true;

    //Iterating over the gameBoard
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            //Checking if any tile has value of 2048
            if(gameBoard[i][j] > 0){
                if(gameBoard[i][j] == 2048){
                    gameFlag = false;
                    console.log("Hurray you have won the game")
                }
                else{
                    count += 1
                }
            }
        }
    }

    //Checking if all tiles are filled
    if(count == 16 || gameFlag == false){
        gameFlag = false
    }
    return gameFlag;
}


//Transposing the gameboard for moving the tiles up and down
function transposeArray(){
    var newArray = [];
    for(var i = 0; i < gameBoard.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < gameBoard.length; i++){
        for(var j = 0; j < gameBoard.length; j++){
            newArray[j].push(gameBoard[i][j]);
        };
    };

    gameBoard = newArray;
}


//Function for moving the tiles in <-left direction
function moveLeft(){
    //Iterating over rows in gameboard
    for(i = 0; i < gameBoard.length; i++){
        //Iterating over every row in gameboard
        for(k =0; k< gameBoard[0].length; k++){
            if (gameBoard[i][k]>0){
                for(t = k; t >0; t--){
                    if (gameBoard[i][t - 1] == 0 || gameBoard[i][t - 1] == gameBoard[i][t]){
                        gameBoard[i][t - 1] = gameBoard[i][t] + gameBoard[i][t-1]
                        gameBoard[i][t] = 0 
                    }
            }
        }
    }
}
}


//Function for moving the tiles in ->right direction
function moveRight(){
    for(i = 0; i < gameBoard.length; i++){
        for(k =gameBoard[0].length - 1; k>-1; k--){
            if (gameBoard[i][k]>0){
                for(t = k; t <gameBoard[0].length-1; t++){
                    if (gameBoard[i][t + 1] == 0 || gameBoard[i][t + 1] == gameBoard[i][t]){
                        gameBoard[i][t + 1] = gameBoard[i][t] + gameBoard[i][t+1]
                        gameBoard[i][t] = 0 
                    }
            }
        }
    }
}
}


function initialiseBoard(){
    generateRandomnumber()
    displayBoard()
}

initialiseBoard()


//Getting input from user for moving the tiles and continuing till user gets 2048 or all tiles are filled
while(continueGame()){
    console.log("Input number 1,2,3 or 4 to move the tile, 1->Left, 2->Right, 3->Up, 4->Down ")
    const readline = require("readline-sync");
    let user_input = Number(readline.question());
  
    if(user_input<5 && user_input >0){
        
        if (user_input == "1"){
            moveLeft();
            displayBoard();
        }   

        else if (user_input == "2"){    
                moveRight();
                displayBoard();
            }
                        
        else if (user_input == "3"){
            transposeArray();
            moveLeft();
            transposeArray();
            displayBoard();
        }

        else if (user_input == "4"){
            transposeArray();
            moveRight();
            transposeArray();
            displayBoard();
        }
            
        else if (user_input =="5"){
            continue_game = False
        }

        else{
        continue_game = False
        }

        
    }

    else{
        continue;
    }


}
