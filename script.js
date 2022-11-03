$(function(){
    $('body').css('font-family','lato','sans-serif');
  
const currentScore0 = document.getElementById('currentScore0')
const currentScore1 = document.getElementById('currentScore1')
const totalScore0 = document.getElementById('totalScore0')
const totalScore1 = document.getElementById('totalScore1')
const buttonLancer = document.getElementById('lancer')
const de = document.getElementById('image-de')
const hold = document.getElementById('hold')  
const newGame = document.getElementById('newGame')
  
let scores;
let current;
let activePlayer;
  
function game() {
    totalScore0.textContent = 0;
    totalScore1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    current = 0
    scores = [0,0];
    activePlayer = 0;
}
  
game();
let playerChange = function(){
    current = 0;
    document.getElementById('currentScore'+`${activePlayer}`).textContent = current;
    activePlayer = activePlayer ===0 ? 1 :0;
}
  
    
buttonLancer.addEventListener('click', function(){
    const resultat  = Math.floor(Math.random() * 6) + 1;
    de.src = 'images/dice-'+resultat+'.svg';
    if (resultat !== 1){
    current += resultat;
    document.getElementById('currentScore'+`${activePlayer}`).textContent = current;
    }else{
    playerChange();
}
}) 
  
hold.addEventListener('click',function(){
    scores[activePlayer] = scores[activePlayer] += current;
    document.getElementById('totalScore'+`${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >=100){
    document.getElementById('name'+`${activePlayer}`).textContent = 'WINNER!'
    }else{
    playerChange();
    }
})
  
newGame.addEventListener('click',game);
    
});  
  