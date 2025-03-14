// Alert to let Player know how to play
alert("How To Play \nEnter an amount into the 'Enter Bet' area less than the balance and more that 0 \nThen click the button to spin or press Enter or Space \nWARNING \nClicking the button then pressing enter or space will cause a multipress and can break the game click off of the button before using enter");

// shapes △▢X✰
// Declaration of arrays for each column
const col1 = ['x', 'square', 'x', 'triangle', 'square', 'star', 'triangle', 'triangle', 'square', 'x'];
const col2 = ['star', 'square', 'x', 'x', 'triangle', 'square', 'square', 'triangle', 'x', 'triangle'];
const col3 = ['x', 'triangle', 'square', 'square', 'star', 'triangle', 'triangle', 'x', 'square', 'x'];

// Top row of the slots
// Column 1
const topLeft = document.getElementById('top-row-left');
// Column 2
const topMiddle = document.getElementById('top-row-middle');
// Column 3
const topRight = document.getElementById('top-row-right');

// Middle row of the slots
// Column 1
const middleLeft = document.getElementById('middle-row-left');
// Column 2
const middleMiddle = document.getElementById('middle-row-middle');
// Column 3
const middleRight = document.getElementById('middle-row-right');

// Bottom Row of the slots
// Column 1
const bottomLeft = document.getElementById('bottom-row-left');
// Column 2
const bottomMiddle = document.getElementById('bottom-row-middle');
// Column 3
const bottomRight = document.getElementById('bottom-row-right');

// Starting balance
let balance = 50;

// Bet Amount declaration
let bet = 0;

// Event Listener to see if the Enter key is pressed and if it is then it will spin
window.addEventListener('keyup', function(event){
    if(event.key === "Enter" || event.key === ' '){
        spin();
    }
});

// Calling the display functions to display the first set of numbers that have no effect on the gameplay
displayCol1(col1[0], col1[9], col1[1]);
displayCol2(col2[0], col2[9], col2[1]);
displayCol3(col3[0], col3[9], col3[1]);

// Setting the default color for the top row
topLeft.style.color = 'rgb(250,100,100)';
topMiddle.style.color = 'rgb(250,100,100)';
topRight.style.color = 'lightblue';

// Setting the default color for the middle row
middleLeft.style.color = 'lightgreen';
middleMiddle.style.color = 'yellow';
middleRight.style.color = 'lightgreen';

// Setting the default color for the bottom row
bottomLeft.style.color = 'lightgreen';
bottomMiddle.style.color = 'lightblue';
bottomRight.style.color = 'lightgreen';

let rannum1;
// Set the default balance
updateBal(balance);

// This function will update the balance wherever it's called
function updateBal(bal){
    let HTML = document.getElementById('balance'); // Capture the area for where the balance will go
    HTML.innerHTML = `Balance = ${bal}`; // Update the HTML to the current balance
}
// Get the random symbol
function spin(){
    console.clear();
    
    // Set the bet to 0 at the beginning so it doesn't accidently add up
    bet = 0;

    // Get the user inputed bet
    bet = Math.ceil(document.getElementById('bet-amount').value);

    // Get a random number for the first column to be the middle row
    rannum1 = Math.floor(Math.random() * 10);
    console.log(rannum1);

    // Get the number for the row below it
    let prevrannum1 = rannum1 - 1;
    console.log("Previous number before change " + prevrannum1);
    // In the case of the random number being equal to 0 where the previous number will be equal to -1 it will instead set the previous number to 9
    if(prevrannum1 === -1){
        prevrannum1 = 9;
        console.log("Previous number after change " + prevrannum1);
    }

    // Get the number for the row above
    let nextrannum1 = rannum1 + 1;
    console.log("Next number before change " + nextrannum1);
    // In the case of the random number being equal to 9 where the next number will be equal to 10 it will instead set the next number to 0
    if(nextrannum1 === 10){
        nextrannum1 = 0;
        console.log("Next number after change " + nextrannum1);
    }

    // Get a random number for the second column on to be the middle row
    let rannum2 = Math.floor(Math.random() * 10);
    console.log(rannum2);
    
    // Get the number for the row below it
    let prevrannum2 = rannum2 - 1;
    console.log("Previous number before change " + prevrannum2);
    // In the case of the random number being equal to 0 where the previous number will be equal to -1 it will instead set the previous number to 9
    if(prevrannum2 === -1){
        prevrannum2 = 9;
        console.log("Previous number after change " + prevrannum2);
    }

    // Get the number for the row above
    let nextrannum2 = rannum2 + 1;
    console.log("Next number before change " + nextrannum2);
    // In the case of the random number being equal to 9 where the next number will be equal to 10 it will instead set the next number to 0
    if(nextrannum2 === 10){
        nextrannum2 = 0;
        console.log("Next number after change " + nextrannum2);
    }

    // Get a random number for the third column to be the middle row
    let rannum3 = Math.floor(Math.random() * 10);
    console.log(rannum3);

    // Get the number for the row below it
    let prevrannum3 = rannum3 - 1;
    console.log("Previous number before change " + prevrannum3);
    // In the case of the random number being equal to 0 where the previous number will be equal to -1 it will instead set the previous number to 9
    if(prevrannum3 === -1){
        prevrannum3 = 9;
        console.log("Previous number after change " + prevrannum3);
    }

    // Get the number for the row above
    let nextrannum3 = rannum3 + 1;
    console.log("Next number before change " + nextrannum3);
    // In the case of the random number being equal to 9 where the next number will be equal to 10 it will instead set the next number to 0
    if(nextrannum3 === 10){
        nextrannum3 = 0;
        console.log("Next number after change " + nextrannum3);
    }

    // If the bet is less then the balance and the balance is not 0 and the bet is not blank and greater than 0
    if(bet <= balance && balance !== 0 && bet !== '' && bet > 0){

        // Reseting the color to it's default background color
        topLeft.style.backgroundColor = "rgb(200, 20, 200)";
        topMiddle.style.backgroundColor = "rgb(200, 20, 200)";
        topRight.style.backgroundColor = "rgb(200, 20, 200)";
        middleLeft.style.backgroundColor = "rgb(200, 20, 200)";
        middleMiddle.style.backgroundColor = "rgb(200, 20, 200)";
        middleRight.style.backgroundColor = "rgb(200, 20, 200)";
        bottomLeft.style.backgroundColor = "rgb(200, 20, 200)";
        bottomMiddle.style.backgroundColor = "rgb(200, 20, 200)";
        bottomRight.style.backgroundColor = "rgb(200, 20, 200)";

        // The "Spinning" "Animation"
        let interval;
        for(i = 0; i < 1000; i++){
            setTimeout(function(){
            interval = setInterval(spinWheel(), 100); // Runs every 100ms
            }, 100); // Run after 100 ms
        }

        // Clear the Interval so the Timeout can start immediately after
        clearInterval(interval)

        // Run after the "Animation"
        setTimeout(function(){
            balance = balance - bet; // take away the bet amount away from the balance
            displayCol1(col1[rannum1], col1[prevrannum1], col1[nextrannum1]); // Call the function with the randomly generated numbers
            displayCol2(col2[rannum2], col2[prevrannum2], col2[nextrannum2]); // Call the function with the randomly generated numbers
            displayCol3(col3[rannum3], col3[prevrannum3], col3[nextrannum3]); // Call the function with the randomly generated numbers
            calculateWin(bet); // Call function to check to see if the player won
            updateBal(balance); // Call function to update the HTML
            // If the balance reaches zero the player loses and has to refresh the browser (The intention is to eventually make a game where if you run out of money it is no longer playable at all)
            if(balance === 0){
                document.getElementById('spin-button').style.display = 'none';
                document.getElementById('lose').style.display = 'block'
            }
        }, 200)// run after 200ms
    }

    
}

// Function for making the wheel look animated;
function spinWheel(){
    displayCol1(col1[Math.floor(Math.random() * 10)], col1[Math.floor(Math.random() * 10)], col1[Math.floor(Math.random() * 10)]);
    displayCol2(col2[Math.floor(Math.random() * 10)], col2[Math.floor(Math.random() * 10)], col2[Math.floor(Math.random() * 10)]);
    displayCol3(col3[Math.floor(Math.random() * 10)], col3[Math.floor(Math.random() * 10)], col3[Math.floor(Math.random() * 10)]);
}

// Function to display the first column
function displayCol1(symbol, prev, next){
    console.log(symbol);
    console.log(prev);
    console.log(next);
    
    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(symbol === 'x'){
        middleLeft.innerHTML = 'X'; // 0, 1, 9
        middleLeft.style.color = 'lightgreen';
    }else if(symbol === 'square'){
        middleLeft.innerHTML = '▢'; // 2, 4, 8
        middleLeft.style.color = 'rgb(250,100,100)';
    }else if(symbol === 'triangle'){
        middleLeft.innerHTML = '△'; // 3, 6, 7
        middleLeft.style.color = 'lightblue';
    }else if(symbol === 'star'){
        middleLeft.innerHTML = '✰'; // 5
        middleLeft.style.color = 'yellow';
    }
    
    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(prev === 'x'){
        bottomLeft.innerHTML = 'X'; // 0, 1, 9
        bottomLeft.style.color = 'lightgreen';
    }else if(prev === 'square'){
        bottomLeft.innerHTML = '▢'; // 2, 4, 8
        bottomLeft.style.color = 'rgb(250,100,100)';
    }else if(prev === 'triangle'){
        bottomLeft.innerHTML = '△'; // 3, 6, 7
        bottomLeft.style.color = 'lightblue';
    }else if(prev === 'star'){
        bottomLeft.innerHTML = '✰'; // 5
        bottomLeft.style.color = 'yellow';
    }
    
    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(next === 'x'){
        topLeft.innerHTML = 'X'; // 0, 1, 9
        topLeft.style.color = 'lightgreen';
    }else if(next === 'square'){
        topLeft.innerHTML = '▢'; // 2, 4, 8
        topLeft.style.color = 'rgb(250,100,100)';
    }else if(next === 'triangle'){
        topLeft.innerHTML = '△'; // 3, 6, 7
        topLeft.style.color = 'lightblue';
    }else if(next === 'star'){
        topLeft.innerHTML = '✰'; // 5
        topLeft.style.color = 'yellow';
    }
}

// Function to display the second column
function displayCol2(symbol, prev, next){
    console.log(symbol);
    console.log(prev);
    console.log(next);
    
    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(symbol === 'x'){
        middleMiddle.innerHTML = 'X'; // 2, 3, 8
        middleMiddle.style.color = 'lightgreen';
    }else if(symbol === 'square'){
        middleMiddle.innerHTML = '▢'; // 1, 5, 6
        middleMiddle.style.color = 'rgb(250,100,100)';
    }else if(symbol === 'triangle'){
        middleMiddle.innerHTML = '△'; // 4, 7, 9
        middleMiddle.style.color = 'lightblue';
    }else if(symbol === 'star'){
        middleMiddle.innerHTML = '✰'; // 0
        middleMiddle.style.color = 'yellow';
    }
    
    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(prev === 'x'){
        bottomMiddle.innerHTML = 'X'; // 2, 3, 8
        bottomMiddle.style.color = 'lightgreen';
    }else if(prev === 'square'){
        bottomMiddle.innerHTML = '▢'; // 1, 5, 6
        bottomMiddle.style.color = 'rgb(250,100,100)';
    }else if(prev === 'triangle'){
        bottomMiddle.innerHTML = '△'; // 4, 7, 9
        bottomMiddle.style.color = 'lightblue';
    }else if(prev === 'star'){
        bottomMiddle.innerHTML = '✰'; // 0
        bottomMiddle.style.color = 'yellow';
    }

    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(next === 'x'){
        topMiddle.innerHTML = 'X'; // 2, 3, 8
        topMiddle.style.color = 'lightgreen';
    }else if(next === 'square'){
        topMiddle.innerHTML = '▢'; // 1, 5, 6
        topMiddle.style.color = 'rgb(250,100,100)';
    }else if(next === 'triangle'){
        topMiddle.innerHTML = '△'; // 4, 7, 9
        topMiddle.style.color = 'lightblue';
    }else if(next === 'star'){
        topMiddle.innerHTML = '✰'; // 0
        topMiddle.style.color = 'yellow';
    }
}

// Function to dislay third column
function displayCol3(symbol, prev, next){
    console.log(symbol);
    console.log(prev);
    console.log(next);

    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(symbol === 'x'){
        middleRight.innerHTML = 'X'; // 0, 7, 9
        middleRight.style.color = 'lightgreen';
    }else if(symbol === 'square'){
        middleRight.innerHTML = '▢'; // 2, 3, 8
        middleRight.style.color = 'rgb(250,100,100)';
    }else if(symbol === 'triangle'){
        middleRight.innerHTML = '△'; // 1, 5, 6
        middleRight.style.color = 'lightblue';
    }else if(symbol === 'star'){
        middleRight.innerHTML = '✰'; // 4
        middleRight.style.color = 'yellow';
    }

    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(prev === 'x'){
        bottomRight.innerHTML = 'X'; // 0, 7, 9
        bottomRight.style.color = 'lightgreen';
    }else if(prev === 'square'){
        bottomRight.innerHTML = '▢'; // 2, 3, 8
        bottomRight.style.color = 'rgb(250,100,100)';
    }else if(prev === 'triangle'){
        bottomRight.innerHTML = '△'; // 1, 5, 6
        bottomRight.style.color = 'lightblue';
    }else if(prev === 'star'){
        bottomRight.innerHTML = '✰'; // 4
        bottomRight.style.color = 'yellow';
    }

    // Depending on what number the random number is it will get a number from the array and will set the spot to that symbol and associated color
    if(next === 'x'){
        topRight.innerHTML = 'X'; // 0, 7, 9
        topRight.style.color = 'lightgreen';
    }else if(next === 'square'){
        topRight.innerHTML = '▢'; // 2, 3, 8
        topRight.style.color = 'rgb(250,100,100)';
    }else if(next === 'triangle'){
        topRight.innerHTML = '△'; // 1, 5, 6
        topRight.style.color = 'lightblue';
    }else if(next === 'star'){
        topRight.innerHTML = '✰'; // 4
        topRight.style.color = 'yellow';
    }
}

// Function to calculate if the player has won and how much the player has won
function calculateWin(betAmount){
    let win = false
    console.log(betAmount);
    let outcome = document.getElementById('outcome');
    outcome.style.padding = "10px";

    // If there is a line straight across or diagonal with only stars on it the player wins 10x the amount they put in
    if(topLeft.innerHTML === '✰'  && topLeft.innerHTML === middleMiddle.innerHTML && topLeft.innerHTML === bottomRight.innerHTML){
        console.log("Big Win");
        betAmount *= 10;
        balance += betAmount;
        console.log(betAmount);
        console.log(balance);
        outcome.innerHTML = "Big Win";
        topLeft.style.backgroundColor = 'darkorange';
        middleMiddle.style.backgroundColor = 'darkorange';
        bottomRight.style.backgroundColor = 'darkorange';
        win = true;
        return;
    }else if(middleLeft.innerHTML === '✰' && middleLeft.innerHTML === middleMiddle.innerHTML && middleLeft.innerHTML === middleRight.innerHTML){
        console.log("Big Win");
        betAmount *= 10;
        balance += betAmount;
        console.log(betAmount);
        console.log(balance);
        outcome.innerHTML = "Big Win";
        middleLeft.style.backgroundColor = 'darkorange';
        middleMiddle.style.backgroundColor = 'darkorange';
        middleRight.style.backgroundColor = 'darkorange';
        win = true;
        return;
    }else if(bottomLeft.innerHTML === '✰' && bottomLeft.innerHTML === middleMiddle.innerHTML && bottomLeft.innerHTML === topRight.innerHTML){
        console.log("Big Win");
        betAmount *= 10;
        balance += betAmount;
        console.log(betAmount);
        console.log(balance);
        outcome.innerHTML = "Big Win";
        bottomLeft.style.backgroundColor = 'darkorange';
        middleMiddle.style.backgroundColor = 'darkorange';
        topRight.style.backgroundColor = 'darkorange';
        win = true;
        return;
    }

    // If there is a line straight across or diagonal with only Squares, Triangles, or Xs the player wins 2x the amount the put in
    if(topLeft.innerHTML === middleMiddle.innerHTML && topLeft.innerHTML === bottomRight.innerHTML){
        console.log("Win");
        betAmount *= 2;
        balance += betAmount;
        console.log(betAmount);
        console.log(balance);
        outcome.innerHTML = "Win";
        topLeft.style.backgroundColor = 'darkorange';
        middleMiddle.style.backgroundColor = 'darkorange';
        bottomRight.style.backgroundColor = 'darkorange';
        win = true;
    }else if(middleLeft.innerHTML === middleMiddle.innerHTML && middleLeft.innerHTML === middleRight.innerHTML){
        console.log("Win");
        betAmount *=2;
        balance += betAmount;
        console.log(betAmount);
        console.log(balance);
        outcome.innerHTML = "Win";
        middleLeft.style.backgroundColor = 'darkorange';
        middleMiddle.style.backgroundColor = 'darkorange';
        middleRight.style.backgroundColor = 'darkorange';
        win = true;
    }else if(bottomLeft.innerHTML === middleMiddle.innerHTML && bottomLeft.innerHTML === topRight.innerHTML){
        console.log("Win");
        betAmount *= 2;
        balance += betAmount;
        console.log(betAmount);
        console.log(balance);
        outcome.innerHTML = "Win";
        bottomLeft.style.backgroundColor = 'darkorange';
        middleMiddle.style.backgroundColor = 'darkorange';
        topRight.style.backgroundColor = 'darkorange';
        win = true;
    }

    // If there is a line straight across the center with no Stars, hasn't already won, and no matching symbols meaning there is only one square, one triangle, and one x in any position they get back the money they put in
    if(middleMiddle.innerHTML !== middleRight.innerHTML &&middleLeft.innerHTML !== middleRight.innerHTML && middleLeft.innerHTML !== middleMiddle.innerHTML && middleLeft.innerHTML !== '✰' && middleMiddle.innerHTML !== '✰' && middleRight.innerHTML !== '✰' && !win){
        console.log("Mismatch Win");
        betAmount *= 1;
        balance += betAmount;
        console.log(betAmount);
        console.log(balance);
        outcome.innerHTML = "Mistmatch Win";
        middleLeft.style.backgroundColor = 'darkorange';
        middleMiddle.style.backgroundColor = 'darkorange';
        middleRight.style.backgroundColor = 'darkorange';
        win = true;
    }
    
    // If win isn't true than you lose
    if(!win){
        outcome.innerHTML = "Lose";
        console.log("Lose");
    }
}

// This is just for fun there is a secret button that pretty much just forces you to refresh the page since it just removes every aspect of the game
function no(){
    document.getElementById('spinOutput').style.display = 'none';
    document.getElementById('balance').style.display = 'none';
    document.getElementById('bet-amount').style.display = 'none';
    document.getElementById('spin-button').style.display = 'none';
    document.getElementById('lose').innerHTML = "Bad Choice No More Game For You";
    document.getElementById('lose').style.display = 'block';
    document.getElementById('lose').style.fontSize = '36px';
    document.getElementById('lose').style.fontWeight = '1000';
    document.getElementById('no').style.display = 'none';
    document.getElementById('outcome').style.display = 'none';
    document.getElementById('help').style.display = 'none';
    document.getElementById('helpLabel').style.display = 'none';
    console.clear(); // Clears console since game is irrelavent at this point and you have to refresh the page
    console.log(";P");
}
