/*
1. If card is selected, reveal it
2. If pairs of cards are selected and don't match, hide them
    2b. ...and reshuffle
3. If card has been selected already, ignore

*/


window.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');
    let selectedCards = [];
    let matchedCards = [];
    
    // Reveal card
    
    function revealCard (el, selCards, card) {
        el.classList.add('is-selected'); 
        selCards.push(card); 
    }
    
    //Flip back cards

    function flipCard(el) {
        el.classList.remove('is-selected');
    }


    cards.forEach(function(card) {
      
        card.addEventListener('click', function() {
        
        //3. 
            
        if (card.classList.contains('is-selected')) {
            alert ('Same selection disallowed!')
            return;
        }
          
        // 1.      
            
        revealCard(card, selectedCards, card);

        // 2. 

        if ((selectedCards.length)%2 == 0 && selectedCards.length > 1) {
            
            let card1 = selectedCards[selectedCards.length - 1];
            let card2 = selectedCards[selectedCards.length - 2];
            
            if (card1.innerText === card2.innerText) {

                alert ("There's a match!");

                matchedCards.push(card1, card2);
                console.log(matchedCards);

                card1.classList.add('is-matched');
                card2.classList.add('is-matched');

            } else {    

                // Flip back cards
                alert ("Sorry, cards do not match.");

                let selected = document.querySelectorAll('.is-selected');

                /*Set timeout to let user see change before flipping*/
                setTimeout(() => { 

                    selected.forEach((el) => {
                        flipCard(el);
                    });

                }, 1000);
                                
                selectedCards = [];
                matchedCards = [];

                  // Reshuffle

              }

          }

        // If we've matched all the cards, display a message.
        if (matchedCards.length > cards.length) {
            alert('You matched all the cards, nice job!');
        }
        
    });
      
  });
    
});
