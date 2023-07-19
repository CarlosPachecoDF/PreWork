abstract class Shape{
  color: string;

  constructor(color : string){
    this.color = color;
  }

  public abstract getArea() : number;


}

class Circle extends Shape {
  
  radius: number;

  constructor(color: string, radius : number){
    super(color);
    this.radius = radius;
  }

  public getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area;
  }
  
}

class Rectangle extends Shape {
  
  width : number;
  height: number;

  constructor(color: string, width: number, height: number){
    super(color);
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    const area = this.width * this.height;
    return area;
  }
  
}

const redCircle = new Circle("red", 5);
const redCircleArea = redCircle.getArea();
console.log(redCircleArea);

const blueRectangle = new Rectangle("blue", 4, 6);
const blueRectangleArea = blueRectangle.getArea();
console.log(blueRectangleArea)