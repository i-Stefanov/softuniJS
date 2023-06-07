class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
}
const p1 = new Point(1, 3);
const p2 = new Point(3, 5);
Point.distance(p1, p2);
