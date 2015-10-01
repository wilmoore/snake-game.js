'use strict'

/*!
 * exports.
 */

module.exports = init

/**
 * Draw canvas borders.
 */

function init (color, score) {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')
  score = score || 0

  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = '30px Arial'
  context.fillText(score, 0, 30)
  context.strokeStyle = color
  context.strokeRect(0, 0, canvas.width, canvas.height)
}
