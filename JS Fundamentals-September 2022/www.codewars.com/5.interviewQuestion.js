function solve(data){
  
  let first = Number.MIN_SAFE_INTEGER
  let second = Number.MIN_SAFE_INTEGER
  let third = Number.MIN_SAFE_INTEGER

  
  for (let i = 0; i < data.length; i++) {

    if (data[i] === first || data[i] === second || data[i] === third) {
      continue;
    };
    if (data[i] > first) {
      [first, second, third] = [data[i], first, second]; continue;
    };
    if (data[i] > second) {
      [second, third] = [data[i], second]; continue;
    };
    if (data[i] > third) {
      third = data[i]; continue;
    };
  }
  console.log(third);
  console.log(data.indexOf(third));
}
solve([91, 2, 33, 51, 54, 39, 34, 61, 34, 91])


// - Алгоритъм за намиране на 3 - тото най - голямо число в масив, но без да бъдат размествани оригиналните индекси на числата в масива.
 
// - Бонус точки, ако бъде решен само с един цикъл и без никакви методи(за да е по - бърз).
 
// - Накрая трябва да се принтира 3 - тото най - голямо число и индекс позицията му в дадения масив.

//   Подсказка: внимавайте за повтарящи числа.
 
 
// >> Примерен вход: [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];