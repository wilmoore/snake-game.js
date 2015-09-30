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

function loop (snake) {
  canvas('orange')
  snake.update()
  snake.render()

  setTimeout(function () {
    window.requestAnimationFrame(loop.bind(this, snake))
  }, 120)
}
