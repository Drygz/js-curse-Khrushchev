function Shape() {}

function circle(radius) {
    this.radius = radius;
}

Shape.prototype.duplicate = function () {
    log('duplicate')
}

Circle.prototype.draw = function () {
    console.log('draw')
}

Circle.prototype = Object.create(shape.prototype);
Circle.prototype.constructor = Circle;

const s = new shape();
const c = new circle(1)
