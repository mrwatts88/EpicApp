import { Component, OnInit } from '@angular/core';
declare var p5: any;

@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.css']
})
export class P5Component implements OnInit {

  public p5ref: any;
  public learners: Learner[];
  public deadLearners: Learner[];
  public obstacles: Obstacle[];
  public openingHeights: number[];
  public static NUM_OBSTACLES = 3;
  public static NUM_LEARNERS = 10;
  public home;

  constructor() {
    this.learners = [];
    this.deadLearners = [];
    this.obstacles = [];
    this.home = this;
  }

  ngOnInit() { }

  ngAfterViewInit() {

    var sketch = (p) => {
      this.p5ref = p;

      this.p5ref.setup = () => {
        //this.p5ref.frameRate(5);
        let width = document.getElementById("container").offsetWidth
        this.p5ref.createCanvas(width, document.documentElement.clientHeight - 100);
        for (let i = 0; i < P5Component.NUM_OBSTACLES; i++) {
          this.obstacles.push(new Obstacle(this.p5ref.width * (1 / (P5Component.NUM_OBSTACLES + 1)) * (i + 1), this.p5ref));;
        }
        for (let i = 0; i < P5Component.NUM_LEARNERS; i++) {
          this.learners.push(new Learner(this.p5ref.random(0, this.p5ref.width), this.p5ref.random(0, this.p5ref.height), 0, this.p5ref, this.home));
        }
      }

      this.p5ref.draw = () => {
        this.p5ref.background(0);
        this.drawObstacles();
        if (this.learners.length == 0) {          
          this.p5ref.noLoop();
          this.calculateFitness();
          this.reproduce();
        }else{
          this.drawLearners();
          this.removeDeadLearners();
        }
      }
    }

    var myp5 = new p5(sketch, 'container');

    this.p5ref.mousePressed = () => {
      this.learners.push(new Learner(this.p5ref.random(0, this.p5ref.width), this.p5ref.random(0, this.p5ref.height), 0, this.p5ref, this.home));
      console.log(this.learners.length);
    }

    this.p5ref.windowResized = () => {
      let width = document.getElementById("container").offsetWidth
      this.p5ref.resizeCanvas(width, document.documentElement.clientHeight - 100);
      this.p5ref.background(0);
      this.drawObstacles();
    }
  }

  private drawObstacles() {
    for (let obstacle of this.obstacles) {
      obstacle.draw();
    }
  }

  private drawLearners() {
    for (let learner of this.learners) {
      learner.draw();
      learner.update();
    }
  }

  private removeDeadLearners() {
    for (let i = this.learners.length - 1; i >= 0; i--) {
      if (this.learners[i].isDead()) {
        let l = this.learners.splice(i, 1);
        this.deadLearners.push(l[1]);
      }
    }
  }

  private calculateFitness() {
    console.log("Calculating fitness.");
  }

  private reproduce() {
    console.log("Reproducing.");
    for (let i = 0; i < P5Component.NUM_LEARNERS; i++) {
      this.learners.push(new Learner(this.p5ref.random(0, this.p5ref.width), this.p5ref.random(0, this.p5ref.height), 0, this.p5ref, this.home));
    }
  }
}

class Learner {

  private posX: number;
  private posY: number;
  private lastX: number;
  private lastY: number;
  private fitness: number;
  private p5ref: any;
  private componentRef: any;
  private movements: Array<any>;
  private movementCounter;
  private dead: boolean;

  constructor(posX, posY, fitness, p5ref, componentRef: P5Component) {
    this.posX = posX;
    this.posY = posY;
    this.lastX = posX;
    this.lastY = posY;
    this.fitness = fitness;
    this.p5ref = p5ref;
    this.componentRef = componentRef;
    this.movements = [];
    this.movementCounter = 0;
    this.dead = false;

    for (let i = 0; i < 1000; i++) {
      this.movements[i] = this.p5ref.createVector(this.p5ref.random(-10, 10), this.p5ref.random(-10, 10));
    }
  }

  public draw() {
    this.p5ref.rect(this.posX, this.posY, 15, 15);
  }

  public update() {
    this.lastX = this.posX;
    this.lastY = this.posY;
    this.posX += this.movements[this.movementCounter++].x;
    this.posY += this.movements[this.movementCounter].y;
    for (let ob of this.componentRef.obstacles) {
      if (this.hits(ob)) {
        console.log("Hit obstacle!!!");
        this.posX = this.lastX;
        this.posY = this.lastY;
      }
    }
    if (this.posX + 15 >= this.p5ref.width || this.posX <= 0 || this.posY + 15 >= this.p5ref.height || this.posY <= 0) {
      console.log("Hit wall!!!");
      this.posX = this.lastX;
      this.posY = this.lastY;
    }
    if (this.movementCounter == this.movements.length - 1) {
      this.dead = true;
    }
  }

  public hits(ob: Obstacle) {
    return (this.posX + 15 >= ob.getX() && this.posX <= ob.getX() + 15) && !(this.posY > ob.getOpeningHeight() - 100 && this.posY + 15 < ob.getOpeningHeight() + 100);
  }

  public isDead() {
    return this.dead;
  }
}

class Obstacle {

  constructor(posX, p5ref) {
    this.posX = posX;
    this.p5ref = p5ref;
    this.openingHeight = this.p5ref.random(100, document.documentElement.clientHeight - 200);
  }

  private posX: number;
  private openingHeight: number;
  private p5ref: any;

  public getX() {
    return this.posX;
  }

  public getOpeningHeight() {
    return this.openingHeight;
  }



  public draw() {
    this.p5ref.rect(this.posX, 0, 15, this.openingHeight - 100);
    this.p5ref.rect(this.posX, this.openingHeight + 100, 15, this.p5ref.height);
  }
}