"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var P5Component = P5Component_1 = (function () {
    function P5Component() {
        this.learners = [];
        this.deadLearners = [];
        this.obstacles = [];
        this.home = this;
    }
    P5Component.prototype.ngOnInit = function () { };
    P5Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        var sketch = function (p) {
            _this.p5ref = p;
            _this.p5ref.setup = function () {
                _this.p5ref.frameRate(100);
                var width = document.getElementById("container").offsetWidth;
                _this.p5ref.createCanvas(width, width * .65);
                for (var i = 0; i < P5Component_1.NUM_OBSTACLES; i++) {
                    _this.obstacles.push(new Obstacle(_this.p5ref.width * (1 / (P5Component_1.NUM_OBSTACLES + 1)) * (i + 1), _this.p5ref));
                    ;
                }
                for (var i = 0; i < P5Component_1.NUM_LEARNERS; i++) {
                    var movements = [];
                    for (var i_1 = 0; i_1 < P5Component_1.LIFESPAN; i_1++) {
                        movements[i_1] = _this.p5ref.createVector(_this.p5ref.random(-P5Component_1.STEP_SIZE, P5Component_1.STEP_SIZE * 1.01), _this.p5ref.random(-P5Component_1.STEP_SIZE, P5Component_1.STEP_SIZE));
                    }
                    _this.learners.push(new Learner(8, _this.p5ref.height - 8, 0, movements, _this.p5ref, _this.home));
                }
            };
            _this.p5ref.draw = function () {
                _this.p5ref.background(0);
                _this.drawObstacles();
                if (_this.learners.length == 0) {
                    var run = true;
                    _this.p5ref.noLoop();
                    if (run) {
                        _this.calculateFitness();
                        _this.selectParents();
                        _this.reproduce();
                        run = false;
                    }
                    else {
                        console.log("dont run me");
                    }
                }
                else {
                    _this.drawLearners();
                    _this.removeDeadLearners();
                }
            };
        };
        var myp5 = new p5(sketch, 'container');
        this.p5ref.mousePressed = function () { };
        this.p5ref.windowResized = function () {
            try {
                var width = document.getElementById("container").offsetWidth;
                _this.p5ref.resizeCanvas(width, width * .65);
                _this.p5ref.background(0);
                _this.drawObstacles();
            }
            catch (error) { }
        };
    };
    P5Component.prototype.drawObstacles = function () {
        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
            var obstacle = _a[_i];
            obstacle.draw();
        }
    };
    P5Component.prototype.drawLearners = function () {
        for (var _i = 0, _a = this.learners; _i < _a.length; _i++) {
            var learner = _a[_i];
            learner.draw();
            learner.update();
        }
    };
    P5Component.prototype.removeDeadLearners = function () {
        for (var i = this.learners.length - 1; i >= 0; i--) {
            if (this.learners[i].isDead()) {
                var l = this.learners.splice(i, 1);
                this.deadLearners.push(l[0]);
            }
        }
    };
    P5Component.prototype.calculateFitness = function () {
        var maxDistToGoal = this.p5ref.dist(0, 0, this.p5ref.width, this.p5ref.height);
        var maxDistancesToNextOpening = [];
        var maxDistIndex = 0;
        var openingLocations = [{ 'x': 0, 'y': 0 }];
        for (var i = 0; i < P5Component_1.NUM_OBSTACLES; i++) {
            openingLocations.push({ 'x': this.obstacles[i].getX(), 'y': this.obstacles[i].getOpeningHeight() });
        }
        openingLocations.push({ 'x': this.p5ref.width, 'y': 0 });
        for (var i = 0; i < P5Component_1.NUM_OBSTACLES + 1; i++) {
            maxDistancesToNextOpening.push(this.p5ref.dist(openingLocations[i].x, openingLocations[i].y, openingLocations[i + 1].x, openingLocations[i + 1].y));
        }
        for (var _i = 0, _a = this.deadLearners; _i < _a.length; _i++) {
            var learner = _a[_i];
            var nextOpening = openingLocations[1];
            for (var i = openingLocations.length - 1; i <= 0; i++) {
                if (openingLocations[i].x > learner.getX()) {
                    nextOpening = openingLocations[i];
                    maxDistIndex = i;
                }
            }
            var distToNextOpening = this.p5ref.dist(learner.getX(), learner.getY(), nextOpening.x, nextOpening.y);
            var distToGoal = this.p5ref.dist(learner.getX(), learner.getY(), 0, this.p5ref.width);
            var obstacleBonus = 0;
            if (learner.getX() > (this.p5ref.width / 4)) {
                obstacleBonus += 40;
            }
            if (learner.getX() > (this.p5ref.width / 2)) {
                obstacleBonus += 40;
            }
            if (learner.getX() > (this.p5ref.width * 0.75)) {
                obstacleBonus += 40;
            }
            var fit_1 = (((learner.getX()) / (this.p5ref.width)) + (1 - (distToGoal / maxDistToGoal)) + (1 - (distToNextOpening / maxDistancesToNextOpening[maxDistIndex]))) * 33;
            fit_1 += obstacleBonus;
            learner.setFitness(fit_1);
        }
    };
    P5Component.prototype.selectParents = function () {
        this.topLearners = [];
        var topLearnerValue = 0;
        var topLearnerIndex = 0;
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < this.deadLearners.length; j++) {
                if (this.deadLearners[j].getFitness() > topLearnerValue) {
                    topLearnerValue = this.deadLearners[j].getFitness();
                    topLearnerIndex = j;
                }
            }
            var tl = this.deadLearners.splice(topLearnerIndex, 1);
            this.topLearners.push(tl[0]);
            console.log(topLearnerValue);
            topLearnerIndex = 0;
            topLearnerValue = 0;
        }
    };
    P5Component.prototype.reproduce = function () {
        this.learners = [];
        this.deadLearners = [];
        for (var i = 0; i < P5Component_1.NUM_LEARNERS; i++) {
            var movements = [];
            var parent_1 = this.p5ref.random(this.topLearners);
            for (var i_2 = 0; i_2 < P5Component_1.LIFESPAN; i_2++) {
                var parentVector = parent_1.getMovements()[i_2];
                if (Math.random() < 0.02) {
                    movements[i_2] = this.p5ref.createVector(this.p5ref.random(-P5Component_1.STEP_SIZE, P5Component_1.STEP_SIZE * 1.05));
                }
                else {
                    movements[i_2] = this.p5ref.createVector(this.p5ref.random(parentVector.x, parentVector.x + 0.5), this.p5ref.random(parentVector.y - 1, parentVector.y + 1));
                }
            }
            this.learners.push(new Learner(8, this.p5ref.height - 8, 0, movements, this.p5ref, this.home));
        }
        this.p5ref.loop();
    };
    return P5Component;
}());
P5Component.NUM_OBSTACLES = 3;
P5Component.NUM_LEARNERS = 40;
P5Component.STEP_SIZE = 8;
P5Component.LIFESPAN = 3000;
P5Component = P5Component_1 = __decorate([
    core_1.Component({
        selector: 'app-p5',
        templateUrl: './p5.component.html',
        styleUrls: ['./p5.component.css']
    }),
    __metadata("design:paramtypes", [])
], P5Component);
exports.P5Component = P5Component;
var Learner = (function () {
    function Learner(posX, posY, fitness, movements, p5ref, componentRef) {
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
    Learner.prototype.draw = function () {
        this.p5ref.ellipse(this.posX, this.posY, 16);
    };
    Learner.prototype.update = function () {
        this.lastX = this.posX;
        this.lastY = this.posY;
        this.posX += this.movements[this.movementCounter++].x;
        this.posY += this.movements[this.movementCounter].y;
        for (var _i = 0, _a = this.componentRef.obstacles; _i < _a.length; _i++) {
            var ob = _a[_i];
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
    };
    Learner.prototype.hits = function (ob) {
        return (this.posX + 8 >= ob.getX() && this.posX - 8 <= ob.getX() + 15) && !(this.posY - 8 > ob.getOpeningHeight() - 100 && this.posY + 8 < ob.getOpeningHeight() + 100);
    };
    Learner.prototype.isDead = function () {
        return this.dead;
    };
    Learner.prototype.setFitness = function (x) {
        if (x >= 0) {
            this.fitness = x;
        }
    };
    Learner.prototype.getFitness = function () {
        return this.fitness;
    };
    Learner.prototype.getX = function () {
        return this.posX;
    };
    Learner.prototype.getY = function () {
        return this.posY;
    };
    Learner.prototype.getMovements = function () {
        return this.movements;
    };
    return Learner;
}());
var Obstacle = (function () {
    function Obstacle(posX, p5ref) {
        this.posX = posX;
        this.p5ref = p5ref;
        this.openingHeight = this.p5ref.random(.30 * (this.p5ref.height), this.p5ref.height - .30 * (this.p5ref.height));
    }
    Obstacle.prototype.getX = function () {
        return this.posX;
    };
    Obstacle.prototype.getOpeningHeight = function () {
        return this.openingHeight;
    };
    Obstacle.prototype.draw = function () {
        this.p5ref.rect(this.posX, 0, 15, this.openingHeight - .30 * (this.p5ref.height));
        this.p5ref.rect(this.posX, this.openingHeight + .30 * (this.p5ref.height), 15, this.p5ref.height);
    };
    return Obstacle;
}());
var P5Component_1;
//# sourceMappingURL=p5.component.js.map