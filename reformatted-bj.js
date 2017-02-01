//create button to stand
const standBtn = document.getElementById('stand');
//create button to hit
const hitBtn = document.getElementById('hit');
//create playBlackJack object so that we can call the methods we need to play the game
const playBlackJack = (function() {

  //declare const variable of cards (A-K)
  const cardOptions = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

  //declare display variable which will be updated with our cards array
  let display = document.getElementById('cards');

  //create empty array of player's cards which will hold all of our cards throughout the game
  let playerCards = [];



  //create random card creator to cut-down on repeated code
  function randomCard() {
     let randomCard = Math.floor(Math.random() * cardOptions.length);
     return randomCard;
  }

  function check21() {
    if (newTotal === 21) {
      alert('you win!');
    }
  }



  //create start method which will call 2 randomcards and push them to the player's array of cards
  function start() {
    let card = cardOptions[randomCard()]; //make sure it creates random # and gets array index value
    playerCards.push(card); //push new card to array
    card = cardOptions[randomCard()]; //make sure it creates random # and gets array index value
    playerCards.push(card); //push new card to array
    display.innerHTML = playerCards; //make our player's array of cards visible
    console.log(playerCards);

    cardValueTotal();
    check21();

  }

  //find the sum of all our cards using cardValueSum with a function


  function cardValueTotal() {

    let cardValueSum = 0;
    for (let i=0; i<playerCards.length; i++) {
        if (playerCards[i] === "J", playerCards[i] === "Q", playerCards[i] === "K"){
          cardValueSum += 10;
        } else if (playerCards[i] === "A") {
          cardValueSum += 11;
        } else {
          cardValueSum += playerCards[i];
        }
      };

    console.log(cardValueSum);
    newTotal = cardValueSum;
  }




  function hit() {
      //add 1 randomcard to playerCards array
      card = cardOptions[randomCard()]; //make sure it creates random # and gets array index value
      playerCards.push(card); //push new card to array
      display.innerHTML = playerCards; //make our player's array of cards visible
      cardValueTotal();

      if (newTotal === 21) {
        alert('you win');
      } else if (newTotal > 21) {
        alert('you bust');
      }


  }

  function stand() {
      cardValueTotal();
      if (newTotal < 16) {
          alert('Dealer wins.');
      } else if (newTotal < 19) {
          alert('Push!');
      } else if (newTotal > 21) {
          alert('You Bust.');
      } else if (newTotal > 18 || newTotal < 22) {
          alert('You win!');
      }
    }

  return {
    start: start,
    hit: hit,
    stand: stand
  };

})();

playBlackJack.start();

standBtn.addEventListener('click', function() {
  playBlackJack.stand();
});
hitBtn.addEventListener('click',function(){
  playBlackJack.hit();
});
