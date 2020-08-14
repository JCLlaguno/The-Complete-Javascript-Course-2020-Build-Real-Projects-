/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;


// Event listener function
// Roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying) {
        
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        // Clear the entire score when the user rolls two 6 in a row
        
        /*if(dice == 6 && lastDice == 6) {

            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();

        } else if(dice !== 1 && dice2 !== 1) {

            // Add score
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        } else {

            // Next player
            nextPlayer();

        }
        
        lastDice = dice;*/
        
        // 3. Update the round score IF the rolled number in BOTH dices is NOT a 1
        if(dice1 !== 1 && dice2 !== 1) {
            
            // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        } else {
            
            // Next player
            nextPlayer();
            
        }
        
    }
    
});
        

// Hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {
        
        // Add the CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
    
        // Display to the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
//        console.log(input);
        var winningScore;
        
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            
            winningScore = input;
            
        } else {
            
            winningScore = 100;
            
        }

        // Check if player won the game
        if(scores[activePlayer] >= winningScore) {
    
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        
            // hide the dice
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
        
            // Add the .winner class
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
            // Remove the .active class
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            
            gamePlaying = false;
    
        } else {
        
            // Next Player
            nextPlayer();
 
        }
        
    }
    
});


// New game initializer
document.querySelector('.btn-new').addEventListener('click', init);


// Next Player method (DRY principle)
function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        // set the current score to 0 if the dice rolls to one
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // Change the active panel bg
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
    
}

// Game Initialization
// New Game
function init() {
    
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousDice = 0;


    // change the style of an element
    // hide the dice
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    // getElementById method - faster than querySelector method
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // Set the player name
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    // Remove the .winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    // Remove the .active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    // Add the active class on the first player (default)
    document.querySelector('.player-0-panel').classList.add('active');
    
}

function getWinningScore() {
    
    winScore = document.getElementById('winningScore').value;
    
}



//dice = Math.floor(Math.random() * 6 + 1);
//console.log(dice);

// used as a setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//used as a getter
//var x = document.querySelector('#score-0').textContent;
//console.log(x);






































