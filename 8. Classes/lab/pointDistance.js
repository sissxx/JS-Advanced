class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

   static distance(firstPoint, secondPoint) {
        let a = firstPoint.x - secondPoint.x;
        let b = firstPoint.y - secondPoint.y;

        let distance = Math.sqrt(a ** 2 + b ** 2);
        return distance;
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));