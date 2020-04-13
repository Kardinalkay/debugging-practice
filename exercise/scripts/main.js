/*
1. If card is selected, reveal it
2. If 2 cards are selected and don't match, hide them, and reshuffle

*/



window.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');
    const selectedCards = [];
    const matchedCards = [];
    
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
        
        // If the card has already been matched, ignore it.
        /*if (card.classList.contains('is-matched')) {
              return;
        }*/
          
        // 1.           
        revealCard(card, selectedCards, card);

        // 2. 

        if (selectedCards.length > 1) {
            
            console.log(selectedCards);
            
            let card1 = selectedCards[selectedCards.length - 1];
            let card2 = selectedCards[selectedCards.length - 2];
            
            console.log("card 2 :");
            console.log(card2);


            // If the cards match, add them to the collection of matched cards and
            // apply the correct CSS class.

            if (card1.innerText === card2.innerText) {

                alert ("There's a match");

                //matchedCards.push(card1, card2);
                console.log(matchedCards);

                /*card1.classList.add('is-matched');
                card2.classList.add('is-matched');*/

            } else {    

                // Flip back cards

                alert ("Flip back cards");

                let selected = document.querySelectorAll('.is-selected');

                /*Set timeout to let user see change before flipping*/

                setTimeout(() => { 

                    selected.forEach((el) => {
                        flipCard(el);
                    });

                }, 1000);
                                
                selectedCards = [];


                  // Reshuffle

              }

            // Regardless of whether or not the cards match, deselect them and reset
            // the collection of matched cards.
    /*        card1.classList.remove('is-selected');
            card3.classList.remove('is-selected');*/
          }

        // If we've matched all the cards, display a message.
        if (matchedCards.length > cards.length) {
            alert('You matched all the cards, nice job!');
        }
        
    });
      
  });
    
});
