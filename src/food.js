'use strict'

/*!
 * exports.
 */

module.exports = init

/*!
 * initialize snake object.
 */

function init () {
  return new Food()
}

/*!
 * Food object constructor.
 */

function Food () {
  this.refresh()
}

/*!
 * render (draw) food.
 */

Food.prototype.render = function render () {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')
  var pixelSize = canvas.width / 25

  context.fillStyle = 'green'
  context.fillRect(this.x * pixelSize, this.y * pixelSize, pixelSize, pixelSize)
  context.strokeStyle = 'white'
  context.strokeRect(this.x * pixelSize, this.y * pixelSize, pixelSize, pixelSize)
}

Food.prototype.refresh = function refresh () {
  var canvas = document.getElementById('canvas')
  var pixelSize = canvas.width / 25

  this.x = Math.round(Math.random() * (canvas.width - pixelSize) / pixelSize)
  this.y = Math.round(Math.random() * (canvas.height - pixelSize) / pixelSize)
}
