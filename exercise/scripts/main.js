/*
1. If card is selected, reveal it
2. If pairs of cards are selected and don't match, hide them
    2b. ...and reshuffle
3. If card has been selected already, ignore

4. Check if game has ended

*/


window.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');
    let selectedCards = [];
    let matchedCards = [];
    let $alert = document.getElementById('alert');

    
    // Click anywhere on panel to hide

    $alert.onclick = () => {
        $alert.classList.remove('show');            
    };

    
    // Reveal card
    
    revealCard = (el, selCards, card) => {
        el.classList.add('is-selected'); 
        selCards.push(card); 
    }
    
    // Flip back cards

    flipCard = (el) => {
        el.classList.remove('is-selected');
    }
    
    // Notify
    
    notify = (note="", notify="false") => {

        $alert.classList.add('show');
        $alert.textContent = (note);

    }
    
    // Reset 
    
    reset = (el) => {
        
        selectedCards = [];
        matchedCards = [];  
        
        let selected = document.querySelectorAll(el);

        /*Set timeout to let user see change before flipping*/
        setTimeout(() => { 

            selected.forEach((el) => {
                flipCard(el);
            });

        }, 1000);
        
        // reshuffle();

    }

    cards.forEach(function(card) {
      
        card.addEventListener('click', function() {
            
            //4.
            

            if (cards.length === (selectedCards.length + 1)) {
                
                let note = "Congratulations! You won."
                
                notify(note);
                                
                reset('.is-selected');
                
                
            } else {
                
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
                        
                        let note = "There's a match!"

                        notify(note);
                        
                        matchedCards.push(card1, card2);

                        card1.classList.add('is-matched');
                        card2.classList.add('is-matched');

                    } else {    

                        // Flip back cards
                        let note = ("Sorry, cards do not match.");
                        
                        notify (note);

                        reset('.is-selected');

                      }

                  }


            }

        });

    });
    
});
