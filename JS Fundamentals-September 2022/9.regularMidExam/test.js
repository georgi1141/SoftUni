//------Infinity closure---------//

function lifeStart(start) {
  start % 2 === 0 ? console.log('1') : console.log('2');
  lifeStart(start + 1)
}
lifeStart(0)