import p5Types from 'p5';

interface IBall {
  move(): void;
  bounce(): void;
  display(p5: p5Types): void;
}

export class BounceBall implements IBall {
  xSpeed: number = 2.5;
  ySpeed: number = -2;
  radius: number = 48;

  location: p5Types.Vector;
  velocity: p5Types.Vector;

  constructor(p5: p5Types, x: number, y: number) {
    this.location = p5.createVector(x, y);
    this.velocity = p5.createVector(this.xSpeed, this.ySpeed);
  }

  public move(): void {
    this.location.add(this.velocity);
  }
  public bounce(): void {
    if (this.location.x > window.innerWidth || this.location.x < 0) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.location.y > window.innerHeight || this.location.y < 0) {
      this.velocity.y = this.velocity.y * -1;
    }
  }

  public display(p5: p5Types): void {
    p5.background(255);
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.fill(127);
    p5.ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }
}
