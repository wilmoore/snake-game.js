'use strict'

/*!
 * exports.
 */

module.exports = init

/**
 * Draw canvas borders.
 */

function init (color) {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')

  context.clearRect(0, 0, canvas.width, canvas.height)
  context.strokeStyle = color
  context.strokeRect(0, 0, canvas.width, canvas.height)
}
