class Point {



  constructor(x, y) {
    this.x = x,
      this.y = y
  }

  static distance(first, second) {
    let a = Math.abs(first.x - second.y)
    let b = Math.abs(first.y - second.x)

    let distance = Math.sqrt(a ** 2 + b ** 2)
    return distance

  }


}

let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));