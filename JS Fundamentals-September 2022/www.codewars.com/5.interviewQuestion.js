function solve(data){
  if(data.length<3){
    console.log('Invalid input!');
    return
  }
  let first = Number.MIN_SAFE_INTEGER
  let second = Number.MIN_SAFE_INTEGER
  let third = Number.MIN_SAFE_INTEGER


  let index =0
  let indexSecond=0
  let indexThird=0


  for (let i = 0; i < data.length; i++) {
    let current = data[i]
    if (current === first || current === second || current === third) {
      continue;
    };

    if (current > first) {
      if (second > third){
        indexThird = indexSecond
        indexSecond = index
      }
      [first, second, third] = [current, first, second]; 
      continue;
    }
    else if (current > second) {
      if (second > third) {
        indexThird=indexSecond
      }
      [second, third] = [current, second]; 
      indexSecond = i
      continue;
    }
    else if (current > third) {
      indexThird=i
      third = current; continue;
    };
  }

  console.log(third);
  console.log(indexThird);

  // tests with methods
  let unique = [...new Set(data)].sort((a, b) => b - a)
  console.log(unique);
  console.log(unique[2]);
  console.log(data.indexOf(unique[2]));
}
solve([91, 2, 33, 51, 54, 39, 34, 61, 34, 91])

console.log('----------------');
solve([91, 2, 33, 51, 54, 39, 34, 61, 34, 91, 312321,1,2,312,321,2,1,3,453,2,1,5646456,12,3,4,3,2,1])


// - Алгоритъм за намиране на 3 - тото най - голямо число в масив, но без да бъдат размествани оригиналните индекси на числата в масива.
 
// - Бонус точки, ако бъде решен само с един цикъл и без никакви методи(за да е по - бърз).
 
// - Накрая трябва да се принтира 3 - тото най - голямо число и индекс позицията му в дадения масив.

//   Подсказка: внимавайте за повтарящи числа.
 
 
// >> Примерен вход: [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];