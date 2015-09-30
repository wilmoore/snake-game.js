'use strict'

/*!
 * imports.
 */

var events = require('./events')
var loop = require('./game-loop')
var snake = require('./snake')()

/*!
 * main.
 */

events(snake)
loop(snake)
