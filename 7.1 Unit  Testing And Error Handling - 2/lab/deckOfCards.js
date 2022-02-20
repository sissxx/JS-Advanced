function printDeckOfCards(cards) {

    function createCard(face, suit) {

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (!(faces.includes(face) && suits[suit])) {
            return 'invalid';
        }

        return {
            face,
            suit,
            toString() {
                return (this.face + suits[this.suit]);
            }
        }


    }

    const sequenceOfCards = cards.map(x => {
        const face = x.slice(0, x.length - 1);
        const suit = x[x.length - 1];

        return createCard(face, suit).toString();
    });


    if (sequenceOfCards.includes('invalid')) {
        let index = sequenceOfCards.indexOf('invalid');
        console.log('Invalid card: ' + cards[index]);
    } else {
        console.log(sequenceOfCards.join(' '));
    }
}

printDeckOfCards(['5S', '3D']);