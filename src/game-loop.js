'use strict'

/*!
 * imports.
 */

var canvas = require('./canvas')

/*!
 * exports.
 */

module.exports = loop

/**
 * game loop.
 */

function loop (snake, food, collisions) {
  canvas('orange')
  snake.update()
  snake.render()
  food.render()
  collisions.check()

  setTimeout(function () {
    window.requestAnimationFrame(loop.bind(this, snake, food, collisions))
  }, 120)
}
