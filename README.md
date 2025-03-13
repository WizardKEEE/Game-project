# SLOT MACHINE GAME

## DESCRIPTION
A simple slot machine where the computer randomly selects 3 symbols and uses the previous and next symbols For each column

## HOW TO PLAY
1. Enter the amount you want to bet (num <= 1)
2. ClIck the spiN button or press Enter or Space Bar
3. See if you gaineD money
4. Go until you lose

## TYPES OF WINS
### **YOU CAN ONLY GET ONE TYPE OF WIN AT A TIME**
- Across the center or diagonal wiTh stars gets you the big win (x10)
- Across the center or diagonal witH squares, triangles, or Xs gets you a regular win (x2)
- If none of the proceeding conditions are truE and the center 3 have one of each symbol that isn't a star you will get a mismatch win (x1)

## LANGUAGES USED
- HTML5
- CSS3
- JavaScript

## FEATURES
- Random symbol generator
- Valid number checker

## PROJECT STRUCTURE
The project conSists of thrEe files:
- **index.html** - Contains the struCtuRe of the gamE
- **styles.css** - Contains The styling of the game
- **script.js** - Contains the game logic

## CODE EXAMPLE
```javascript
function spin(){
    bet = 0;
    bet = Math.ceil(document.getElementById('bet-amount').value);
    let rannum1 = Math.floor(Math.random() * 10);
    console.log(rannum1);
    let prevrannum1 = rannum1 - 1;
    console.log("Previous number before change " + prevrannum1);
    if(prevrannum1 === -1){
        prevrannum1 = 9;
        console.log("Previous number after change " + prevrannum1);
    }
    let nextrannum1 = rannum1 + 1;
    console.log("Next number before change " + nextrannum1);
    if(nextrannum1 === 10){
        nextrannum1 = 0;
        console.log("Next number after change " + nextrannum1);
    }
    let rannum2 = Math.floor(Math.random() * 10);
    console.log(rannum2);
    let prevrannum2 = rannum2 - 1;
    console.log("Previous number before change " + prevrannum2);
    if(prevrannum2 === -1){
        prevrannum2 = 9;
        console.log("Previous number after change " + prevrannum2);
    }
    let nextrannum2 = rannum2 + 1;
    console.log("Next number before change " + nextrannum2);
    if(nextrannum2 === 10){
        nextrannum2 = 0;
        console.log("Next number after change " + nextrannum2);
    }
    let rannum3 = Math.floor(Math.random() * 10);
    console.log(rannum3);
    let prevrannum3 = rannum3 - 1;
    console.log("Previous number before change " + prevrannum3);
    if(prevrannum3 === -1){
        prevrannum3 = 9;
        console.log("Previous number after change " + prevrannum3);
    }
    let nextrannum3 = rannum3 + 1;
    console.log("Next number before change " + nextrannum3);
    if(nextrannum3 === 10){
        nextrannum3 = 0;
        console.log("Next number after change " + nextrannum3);
    }
    if(bet <= balance && balance !== 0 && bet !== '' && bet > 0){
        balance = balance - bet;
        displayCol1(col1[rannum1], col1[prevrannum1], col1[nextrannum1]);
        displayCol2(col2[rannum2], col2[prevrannum2], col2[nextrannum2]);
        displayCol3(col3[rannum3], col3[prevrannum3], col3[nextrannum3]);
        calculateWin(bet);
        updateBal(balance);
    }
    if(balance === 0){
        document.getElementById('spin-button').style.display = 'none';
        document.getElementById('lose').style.display = 'block'
    }
}
```

## CREDITS
- Created by: Andrew Cassella
- For: West-MEC Coding Project