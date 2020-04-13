/*
1. If card is selected, reveal it
2. If 2 cards are selected and don't match, hide them, and reshuffle

*/



window.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');
    const selectedCards = [];
    const matchedCards = [];
    
    // Reveal card
    
    function revealCard (el) {
        el.classList.add('is-selected');    
    }
    
    //Flip back cards

    function flipCard(el) {
        el.classList.remove('is-selected');
    }


  cards.forEach(function(card) {
      
    card.addEventListener('click', function() {
        
      // If the card has already been matched, ignore it.
      if (card.classList.contains('is-matched')) {
        return;
      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
        
          
      selectedCards.push(card); 

      // 1.           
      revealCard(card);
        
      // 2. 
        
      // If we have selected two cards, see if they match.
        
      if (selectedCards.length === 2) {
                    
          var card1 = selectedCards[0];
          var card2 = selectedCards[1];

          // If the cards match, add them to the collection of matched cards and
          // apply the correct CSS class.
          
          if (card1.innerText === card2.innerText) {
             
              alert ("There's a match");
            
              matchedCards.push(card1, card2);
              card1.classList.add('is-matched');
              card2.classList.add('is-matched');
              
          } else {    
                            
              // Flip back cards
              
              alert ("Flip back cards");
                            
              let selected = document.querySelectorAll('.is-selected');
              
              /*Set timeout to let user see change before flipping*/
              
              setTimeout(function(){ 
                  
                  selected.forEach(function(el) {
                      flipCard(el);
                  });
                  
              }, 1000);
                            


              
              // Reshuffle
              
          }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
/*        card1.classList.remove('is-selected');
        card3.classList.remove('is-selected');
        selectedCards = [];*/
      }

      // If we've matched all the cards, display a message.
      if (matchedCards.length > cards.length) {
        alert('You matched all the cards, nice job!');
      }
        
    });
      
  });
    
});
