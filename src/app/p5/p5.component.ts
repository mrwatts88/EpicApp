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
  public topLearners: Learner[];
  public obstacles: Obstacle[];
  public openingHeights: number[];
  public static NUM_OBSTACLES = 3;
  public static NUM_LEARNERS = 40;
  public static STEP_SIZE = 8;
  public static LIFESPAN = 3000;
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
        this.p5ref.frameRate(100);
        let width = document.getElementById("container").offsetWidth
        this.p5ref.createCanvas(width, width*.65);
        for (let i = 0; i < P5Component.NUM_OBSTACLES; i++) {
          this.obstacles.push(new Obstacle(this.p5ref.width * (1 / (P5Component.NUM_OBSTACLES + 1)) * (i + 1), this.p5ref));;
        }
        for (let i = 0; i < P5Component.NUM_LEARNERS; i++) {
          let movements = [];
          for (let i = 0; i < P5Component.LIFESPAN; i++) {
            movements[i] = this.p5ref.createVector(this.p5ref.random(-P5Component.STEP_SIZE, P5Component.STEP_SIZE * 1.01), this.p5ref.random(-P5Component.STEP_SIZE, P5Component.STEP_SIZE));
          }
          this.learners.push(new Learner(8, this.p5ref.height - 8, 0, movements, this.p5ref, this.home));
        }
      }

      this.p5ref.draw = () => {
        this.p5ref.background(0);
        this.drawObstacles();
        if (this.learners.length == 0) {
          let run: boolean = true;
          this.p5ref.noLoop();
          if (run) {
            this.calculateFitness();
            this.selectParents();
            this.reproduce();
            run = false;
          } else {
            console.log("dont run me");
          }
        } else {
          this.drawLearners();
          this.removeDeadLearners();
        }
      }
    }

    var myp5 = new p5(sketch, 'container');

    this.p5ref.mousePressed = () => { }

    this.p5ref.windowResized = () => {
      try {
        let width = document.getElementById("container").offsetWidth
        this.p5ref.resizeCanvas(width, width*.65);
        this.p5ref.background(0);
        this.drawObstacles();        
      } catch (error) { }
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
        this.deadLearners.push(l[0]);
      }
    }
  }

  private calculateFitness() {

    let maxDistToGoal = this.p5ref.dist(0, 0, this.p5ref.width, this.p5ref.height);
    let maxDistancesToNextOpening = [];
    let maxDistIndex = 0;
    let openingLocations = [{ 'x': 0, 'y': 0 }];

    for (let i = 0; i < P5Component.NUM_OBSTACLES; i++) {
      openingLocations.push({ 'x': this.obstacles[i].getX(), 'y': this.obstacles[i].getOpeningHeight() })
    }
    openingLocations.push({ 'x': this.p5ref.width, 'y': 0 });

    for (let i = 0; i < P5Component.NUM_OBSTACLES + 1; i++) {
      maxDistancesToNextOpening.push(this.p5ref.dist(openingLocations[i].x, openingLocations[i].y, openingLocations[i + 1].x, openingLocations[i + 1].y));
    }

    for (let learner of this.deadLearners) {
      let nextOpening = openingLocations[1];
      for (let i = openingLocations.length - 1; i <= 0; i++) {
        if (openingLocations[i].x > learner.getX()) {
          nextOpening = openingLocations[i];
          maxDistIndex = i;
        }
      }

      let distToNextOpening = this.p5ref.dist(learner.getX(),learner.getY(),nextOpening.x, nextOpening.y);
      let distToGoal = this.p5ref.dist(learner.getX(), learner.getY(), 0, this.p5ref.width);
      let obstacleBonus = 0;

      if (learner.getX() > (this.p5ref.width / 4)) {
        obstacleBonus += 40;
      }

      if (learner.getX() > (this.p5ref.width / 2)) {
        obstacleBonus += 40;
      }

      if (learner.getX() > (this.p5ref.width * 0.75)) {
        obstacleBonus += 40;
      }

      let fit = (((learner.getX()) / (this.p5ref.width)) + (1 - (distToGoal / maxDistToGoal)) + (1 - (distToNextOpening / maxDistancesToNextOpening[maxDistIndex]))) * 33;
      fit += obstacleBonus;
      learner.setFitness(fit);
    }
  }

  private selectParents() {

    this.topLearners = [];
    let topLearnerValue = 0;
    let topLearnerIndex = 0;

    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < this.deadLearners.length; j++) {
        if (this.deadLearners[j].getFitness() > topLearnerValue) {
          topLearnerValue = this.deadLearners[j].getFitness();
          topLearnerIndex = j;
        }
      }
      let tl = this.deadLearners.splice(topLearnerIndex, 1);
      this.topLearners.push(tl[0]);
      console.log(topLearnerValue);
      topLearnerIndex = 0;
      topLearnerValue = 0;
    }
  }

  private reproduce() {

    this.learners = [];
    this.deadLearners = [];

    for (let i = 0; i < P5Component.NUM_LEARNERS; i++) {
      let movements = [];
      let parent: Learner = this.p5ref.random(this.topLearners);
      for (let i = 0; i < P5Component.LIFESPAN; i++) {
        let parentVector = parent.getMovements()[i];

        if (Math.random() < 0.02) {
          movements[i] = this.p5ref.createVector(this.p5ref.random(-P5Component.STEP_SIZE, P5Component.STEP_SIZE*1.05));
        } else {
          movements[i] = this.p5ref.createVector(this.p5ref.random(parentVector.x, parentVector.x + 0.5), this.p5ref.random(parentVector.y - 1, parentVector.y + 1));
        }
      }
      this.learners.push(new Learner(8, this.p5ref.height - 8, 0, movements, this.p5ref, this.home));
    }
    this.p5ref.loop();
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

  constructor(posX, posY, fitness, movements: Array<number>, p5ref, componentRef: P5Component) {
    this.posX = posX;
    this.posY = posY;
    this.lastX = posX;
    this.lastY = posY;
    this.fitness = fitness;
    this.p5ref = p5ref;
    this.componentRef = componentRef;
    this.movements = movements;
    this.movementCounter = 0;
    this.dead = false;
  }

  public draw() {
    this.p5ref.ellipse(this.posX, this.posY, 16);
  }

  public update() {
    this.lastX = this.posX;
    this.lastY = this.posY;
    this.posX += this.movements[this.movementCounter++].x;
    this.posY += this.movements[this.movementCounter].y;
    for (let ob of this.componentRef.obstacles) {
      if (this.hits(ob)) {
        this.posX = this.lastX;
        this.posY = this.lastY;
      }
    }
    if (this.posX + 8 >= this.p5ref.width || this.posX - 8 <= 0 || this.posY + 8 >= this.p5ref.height || this.posY - 8 <= 0) {
      this.posX = this.lastX;
      this.posY = this.lastY;
    }
    if (this.movementCounter == this.movements.length - 1) {
      this.dead = true;
    }
  }

  public hits(ob: Obstacle) {
    return (this.posX + 8 >= ob.getX() && this.posX - 8 <= ob.getX() + 15) && !(this.posY - 8 > ob.getOpeningHeight() - 100 && this.posY + 8 < ob.getOpeningHeight() + 100);
  }

  public isDead() {
    return this.dead;
  }

  public setFitness(x) {
    if (x >= 0) {
      this.fitness = x;
    }
  }

  public getFitness() {
    return this.fitness;
  }

  public getX() {
    return this.posX;
  }

  public getY() {
    return this.posY;
  }

  public getMovements() {
    return this.movements;
  }

}

class Obstacle {

  constructor(posX, p5ref) {
    this.posX = posX;
    this.p5ref = p5ref;
    this.openingHeight = this.p5ref.random(.30*(this.p5ref.height), this.p5ref.height - .30*(this.p5ref.height));
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
    this.p5ref.rect(this.posX, 0, 15, this.openingHeight - .30*(this.p5ref.height));
    this.p5ref.rect(this.posX, this.openingHeight + .30*(this.p5ref.height), 15, this.p5ref.height);
  }
}