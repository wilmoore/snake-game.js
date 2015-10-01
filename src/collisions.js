'use strict'

/*!
 * exports.
 */

module.exports = init

/*!
 * initialize snake object.
 */

function init (snake, food) {
  return new Collisions(snake, food)
}

/*!
 * Collisions object constructor.
 */

function Collisions (snake, food) {
  this.snake = snake
  this.food = food
}

/*!
 * collisions check.
 */

Collisions.prototype.check = function check () {
  if (this.snake.bodyScale[0].x === this.food.x && this.snake.bodyScale[0].y === this.food.y) {
    console.log('Snake found the food!!!')
    this.food.refresh()
    var tail = {}
    tail.x = this.snake.bodyScale[0].x
    tail.y = this.snake.bodyScale[0].y
    this.snake.bodyScale.unshift(tail)
  }
}
