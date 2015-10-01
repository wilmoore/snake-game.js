'use strict'

/*!
 * imports.
 */

var createCollisions = require('./collisions')
var events = require('./events')
var createFood = require('./food')
var loop = require('./game-loop')
var createSnake = require('./snake')

/*!
 * assets.
 */

var playerSnake = createSnake()
var food = createFood()

/*!
 * main.
 */

events(playerSnake)
loop(playerSnake, food, createCollisions(playerSnake, food))
