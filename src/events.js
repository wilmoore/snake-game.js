'use strict'

/*!
 * exports.
 */

module.exports = events

/*!
 * Key Map.
 */

var keyMap = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

/**
 * initialize events.
 */

function events (snake) {
  /*!
   * Key listener.
   */

  document.addEventListener('keydown', onKeyDown(snake), true)
}

/*!
 * exports.
 */

function onKeyDown (snake) {
  return function (key) {
    if (!keyMap.hasOwnProperty(key.which)) {
      return false
    }

    key.preventDefault()
    snake.direction = keyMap[key.which]
    console.log('Key Pressed: %s', keyMap[key.which])
  }
}
