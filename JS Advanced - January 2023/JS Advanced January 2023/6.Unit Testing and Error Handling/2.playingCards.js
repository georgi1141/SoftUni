function cardFactory(face, suit) {

  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const suits = {
    S: '♠',
    H: '♠',
    D: '♦',
    C: '♣'
  }
  if (!faces.includes(face) && !suits[suit]) {
    throw new Error('Invalid face or suit ')
  }



  let card = {
    face,
    suit,
    toString() {
      console.log(this.face + suits[this.suit]);
    }
  }
  return card
}

let card = cardFactory('A', 'S')

card.toString()

module.exports = cardFactory

