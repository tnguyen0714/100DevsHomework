//Playing a card game

let deckId = "";
//Uses API to grab deck of cards 
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    deckId = data.deck_Id;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", drawCards);

function drawCards() {
  //Draws a number of cards from API
  const choice = document.querySelector("input");
  const url = `https://deckofcardsapi.com/api/deck/ilq76hc88gpj/draw/?count=2`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      //Shows the data that is populating from the API
      console.log(data);
      //Shows image into HTML page
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image
      let player1Value = convertToNum(data.cards[0].value)
      let player2Value = convertToNum(data.cards[1].value)

      if(player1Value > player2Value){
        document.querySelector('h3').innerText = 'Player 1 Wins!'
      }else if(player1Value < player2Value){
        document.querySelector('h3').innerText = 'Player 2 Wins!'
      }else{
        document.querySelector('h3').innerText = 'Time for War!'
      }

    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }
  else if(val === 'KING'){
    return 13
  }
  else if(val === 'QUEEN'){
    return 12
  }
  else if(val === 'JACK'){
    return 11
  }
  else{
    return Number(val)
  }
}